<template>
    <div class="common-layout">
        <el-container>
            <el-aside>
                <Aside/>
            </el-aside>
            <el-container>
                <el-header>
                    <Header />
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import Aside from '../components/aside.vue';
import Header from '../components/navHeader.vue';
</script>

<style lang="less" scoped>
.common-layout {
    height: 100%;
    .el-container {
        height: 100%;
    }
}
.el-aside {
    transition: width 0.15s;
  -webkit-transition: width 0.15s;
  -moz-transition: width 0.15s;
  -webkit-transition: width 0.15s;
  -o-transition: width 0.15s;
  width: auto;
  }
</style>