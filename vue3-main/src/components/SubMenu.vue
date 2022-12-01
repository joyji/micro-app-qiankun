<template>
  <a-sub-menu :key="menuInfo.key">
    <template #title>
      <span>
        <team-outlined />
        <span>{{menuInfo.name}}</span>
      </span>
    </template>
    <template v-for="item in menuInfo.children" :key="item.key">
      <template v-if="item.children">
        <sub-menu :menu-info="item" :key="item.key"></sub-menu>
      </template>
      <template v-else>
        <a-menu-item :key="item.key">
          {{item.name}}
        </a-menu-item>
      </template>
    </template>
  </a-sub-menu>
</template>

<script lang="ts">
export default {
  name: 'SubMenu'
}
</script>

<script lang="ts" setup>
import {TeamOutlined} from "@ant-design/icons-vue"
import type { PropType } from 'vue'
import type { Menu } from '@/data/menuData'

defineProps({
  menuInfo: {
    type: Object as PropType<Menu>,
    default: ()=>({})
  }
})

</script>

<style lang="less" scoped>
  
</style>