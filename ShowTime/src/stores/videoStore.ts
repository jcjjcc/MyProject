import { defineStore } from "pinia";
// 关键数据要限制类型
import { ref } from "vue";
// 引诱 面试官 es6 module 问题
import type {
   TopBarItem,
   recommendItem
} from "@/types/video";
import { comment } from "postcss";

export const useVideoStore = defineStore("videoStore",()=> {
    const topBarState = ref<TopBarItem[]>([
        {
            title: "历年好剧",
            icon: "juyuan"
        },
        {
            title: "电影片单",
            icon: "dianying1"
        },
        {
            title: "排行榜",
            icon: "31paixingbang"
        }
    ])

   const recommendItemState = ref<recommendItem[]>([
        {
            title: "爱情",
            items: [
                {
                    title: "爱在离婚进行时",
                    msg:"内地 · 2025 · 偶像爱情 任世豪 李星瑶",
                    discuss:"离婚进行时，心动正当时 ",
                    score:"8.1",
                    img:"https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc002001hn6kyf1733215123648/0?max_age=7776000"
                },
                {
                    title: "​雨爱千金​",
                    msg:"内地 · 2025 · 甜虐爱情 陈芳彤 代高政",
                    discuss:"代高政陈芳彤三搭",
                    score:"8.5",
                    img:"https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc0020050e1d6i1736238948584/0?max_age=7776000"
                
                },
                {
                    title: "再次人生",
                    msg:" 内地 · 2025 · 偶像爱情 · 奇幻爱情 张耀 卢洋洋",
                    discuss:"张耀卢洋洋携手再次人生",
                    score:"8.6",
                    img:"https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc002008xvde9j1734421725352/0?max_age=7776000"
                }
            ]
        },
        {
            title: "喜剧",
            items: [
                {
                    title: "​鹊刀门传奇2​",
                    msg:" 内地 · 2025 · 喜剧武侠 · 古装喜剧 赵本山 宋小宝",
                    discuss:"赵本山宋小宝爆笑回归",
                    score:"9.1",
                    img:"https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200vashbcc1737520355349/0?max_age=7776000"
                },
                {
                    title: "床前明月，咣！",
                    msg:"· 内地 · 2024 · 院线 · 悬疑喜剧 费翔 左凌峰",
                    discuss:"费翔宋小宝奇咖喜聚",
                    score:"8.2",
                    img:"https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200umqq9ti1733800670338/260?imageView2/2/w/223"
                },            {
                    title: "情圣2",
                    msg:"内地 · 2019 · 院线 · 爱情喜剧 吴秀波 白百何",
                    discuss:"吴秀波肖央联手“套路”",
                    score:"8.8",
                    img:"https://puui.qpic.cn/vcover_vt_pic/0/2kanm7ni6obgww41548217779/0?max_age=7776000"
                }
            ]
        },
        {
            title: "古装",
            items: [

            ]
        },
        {
            title: "合家欢",
            items: [

            ]
        },
        {
            title: "悬疑",
            items: []
           
        },
        {
            title: "犯罪",
            items: [
                
            ]
        },
        {
            title: "动作",
            items: [
   
            ]
        },
        {
            title: "爱情",
            items: []
           
        },
        {
            title: "冒险",
            items: []
           
        },
        {
            title: "科幻",
            items: []
           
        },
   ])

    return {topBarState, recommendItemState}
})