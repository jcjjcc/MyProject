<template>
    <el-menu
        :style="{ width: !isCollapse ? '230px' : '64px'}"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="aside-menu"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        :collapse-transition="false"
      >
        <p class="logo-lg">{{isCollapse ? '陪诊' : '医路随行'}}</p>
        <tree-menu :index="1" :menuData="menuData"/>
      </el-menu>
</template>

<script setup>
import treeMenu from './treeMenu.vue';
import { useRouter } from 'vue-router';
import { reactive,toRefs } from 'vue';
import { useMenuStore } from '../store/menuStore';

//获取路由实例
const router = useRouter();
//menuData代表所有一级路由的信息
const menuData = reactive(router.options.routes[0].children)

// 获取菜单状态
const menuStore = useMenuStore();
const {isCollapse} = toRefs(menuStore);
// console.log(menuStore.isCollapse)
// console.log(router)
const handleOpen = () => {}
const handleClose = () => {}
</script>






<style lang="less" scoped>
// 继承父容器的高度
.aside-menu {
    height: 100%;
    .logo-lg {
        font-size: 20px;
        text-align: center;
        height:50px;
        line-height:50px;
        color:#fff;
    }
} 
</style>