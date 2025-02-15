<template>
    <!-- 当它们同时存在于一个节点上时，v-if 比 v-for 的优先级更高。这意味
     着 v-if 的条件将无法访问到 v-for 作用域内定义的变量别名。 
     在外新包装一层 <template> 再在其上使用 v-for 可以解决这个问题 (这也更加明显易读)
     -->
  <template v-for="(item, index) in props.menuData">
    <el-menu-item 
    @click="handleClick(item,`${props.index}-${item.meta.id}`)"
    v-if="!item.children || item.children.length === 0"
     :index="`${props.index}-${item.meta.id}`"
     :key="index"
     >
        <!-- <el-icon><setting /></el-icon>
        <span>Navigator Four</span> -->
        <el-icon size="20" >
            <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.name }}</span>
    </el-menu-item>
    <el-sub-menu v-else :index="`${props.index}-${item.meta.id}`">
        <template #title>
            <el-icon size="20">
                <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.name }}</span>
        </template>
        <!-- treeMenu组件递归 -->
        <treeMenu :menuData="item.children" :index="`${props.index}-${item.meta.id}`" />
    </el-sub-menu>
  </template>  
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useMenuStore } from '../store/menuStore';
const props = defineProps(['menuData','index'])
// console.log(props.menuData)
const router = useRouter();
// console.log('treeMenu组件下的：',router)

const menuStore = useMenuStore();

// 点击菜单
// item是每个路由的信息
const handleClick = (item,active) => {
    router.push(item.meta.path)
    menuStore.addMenu(item.meta)
    // console.log(item)
    // console.log(active)
}
</script>

<style lang="less" scoped>
</style>