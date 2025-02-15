<template>
    <div class="header-container">
        <div class="header-left flex-box">
            <el-icon class="icon" size="20" @click="menuStore.collapseMenu"><Fold /></el-icon>
            <ul class="flex-box">
                <li 
                v-for="(item, index) in menuStore.selectedMenu"
                :key="item.path"
                class="tab flex-box"
                :class="{ active: route.path === item.path }"
                >
                    <el-icon size="12"><component :is="item.icon" /></el-icon>
                    <router-link class="text flex-box" :to="{ path: item.path }">
                        {{ item.name }}
                    </router-link>
                    <el-icon  size="12" class="close" @click="closeTab(item, index)"><Close/></el-icon>
                </li>
            </ul>
        </div>
        <div class="header-right">
            <el-dropdown>
                <div class="el-dropdown-link flex-box">
                    <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                />
                <p class="username">admin</p>
                </div>
                <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item disabled>Action 4</el-dropdown-item>
                    <el-dropdown-item divided>Action 5</el-dropdown-item>
                </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import { useMenuStore } from '../store/menuStore';
import {useRoute, useRouter} from 'vue-router';
import { toRefs } from 'vue';
const menuStore = useMenuStore();
const {selectedMenu} = toRefs(menuStore);
//当前路由
const route = useRoute();

const router = useRouter();
//关闭标签页，关闭的非当前页，不做处理
//关闭当前页，选中效果后移一位，关闭的是最后一页，前移一位
const closeTab = (item, index) => {
    //删除选中的标签页
    menuStore.removeMenu(item)
    //关闭的非当前页，不做处理,直接返回
    if(route.path !== item.path) {
        return;
    }
    //关闭最后一页
    if(index === selectedMenu.value.length) {
        //如果仅剩一个标签页
        if(selectedMenu.value.length === 0) {
            router.push('/')
        } else {
            router.push({
                path: selectedMenu.value[index-1].path,
            })
        }
    } else {
        //关闭的是中间的标签页
        router.push({
            path: selectedMenu.value[index].path,
        })
    }

}

</script>

<style lang="less" scoped>
.flex-box {
    display: flex;
    align-items: center;
    height: 100%;
}
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    background-color: #fff;
    padding-right: 25px;
    .header-left {
        height: 100%;
        .icon {
            width: 45px;
            height: 100%;
        }
        .icon:hover {
            background-color: #f5f5f5;
            cursor: pointer;
        }
        .tab {
            padding: 0 10px;
            height: 100%;
            .text {
                margin: 0 5px;
                color: #000;
                font-size: 10px;
            }
            .close {
                visibility: hidden;
            }
            &.active {
                a {
                    color: #409eff;
                }
                i {
                    color: #409eff;
                }
                background-color: #f5f5f5;
            }
        }
        .tab:hover {
            background-color: #f5f5f5;
            .close {
                visibility: inherit;
                cursor: pointer;
                color: #000;
            }
        }

    }
    .header-right {
        .username {
            margin-left: 10px;
        }
    }
}
</style>