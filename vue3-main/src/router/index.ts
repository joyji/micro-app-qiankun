import { createRouter, createWebHashHistory } from "vue-router";
import { useMenuStore } from "@/store/menu";
import { useUserStore } from "@/store/user";
import { useAppStore } from "@/store/app";
import { user as userData } from "@/data/userData";
import { loadMicroApp } from "qiankun";
import type { MicroApp } from "qiankun";
import { dispatchUserEvent } from "@/utils/dispatchUserEvent";
import { toRaw } from "vue";
import { setMicroAppLoading } from "@/utils/microAppLoading";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/main/communication-test",
    },
  ],
});

const microAppMap = new Map<string, MicroApp>();

// 是否已经加装初始化数据
let loadedInitData = false;
// 上一次location.hash
let lastHash = "";

router.beforeEach(async (to, from, next) => {
  const { addRoutes } = useMenuStore();
  const { setUser } = useUserStore();

  if (!loadedInitData) {
    setUser(userData);
    addRoutes();
    loadedInitData = true;
    next(to);
  } else {
    const { apps } = useAppStore();

    if (lastHash) {
      // TODO 嵌入微应用
      const app = apps.find((item) => lastHash.startsWith(item.activeRule));
      if (app) {
        const name = app.name;
        if (microAppMap.has(name)) {
          const microApp = microAppMap.get(name)!;
          if (microApp.getStatus() === "MOUNTED") {
            await microApp.unmount();
          }
        }
      }
    }
    next();
  }
});

let mounting = false;
router.afterEach(async (to) => {
  const { apps } = useAppStore();
  const { user } = useUserStore();
  lastHash = location.hash;
  const app = apps.find((item) => lastHash.startsWith(item.activeRule));
  let microApp;

  // 手动加载子应用
  if (app) {
    const name = app.name;
    if (microAppMap.has(name)) {
      microApp = microAppMap.get(name)!;
      if (!mounting) {
        mounting = true;
        await microApp.mount();
        mounting = false;
      }
    } else {
      if (!mounting) {
        mounting = true;
        microApp = loadMicroApp(app);
        microAppMap.set(name, microApp);
        await microApp.mountPromise;
      }
      mounting = false;
    }
    dispatchUserEvent(toRaw(user));
  }
  setMicroAppLoading(false);
});

export default router;
