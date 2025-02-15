import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: '/',
        component:() => import('../views/Main.vue'),
        name: 'main',
        children: [
            {
                path: 'dashboard',
                meta : {
                    id:'1',name: '控制台', icon:'Platform',path: '/dashboard',
                    decribe: '用于展示当前系统的统计数据'
                },
                component: () => import('../views/dashboard/index.vue')
            },
            {
                path: 'auth',
                meta: {
                    id:'2',name: '权限管理', icon:'Grid'
                },
                children: [
                    {
                        path: '',
                        alias: ['admin'],
                        meta: {
                            id: '1',name: '账号管理',icon: 'Avatar',path: '/auth/admin',
                            decribe: '管理员可以进行编辑'
                        },
                        component: () => import('../views/auth/admin/index.vue')  
                    },
                    {
                        path: 'group',
                        meta: {
                            id: '2',name: '菜单管理',icon: 'Menu',path: '/auth/group',
                            decribe: '菜单规则'
                        },
                        component: () => import('../views/auth/group/index.vue')  
                    },  
                ]
            },
            {
                path: 'vppz',
                meta: {
                    id:'3',name: 'DocPal陪诊', icon:'BellFilled'
                },
                children: [
                {
                    path: '',
                    alias: ['staff'],
                    meta: { id: '1', name: '陪护管理', icon: 'Checked', path: '/vppz/staff', describe: '陪护师可以进行创建和修改，设置对应生效状态控制C端选择' },
                    component: ()=>import('../views/vppz/staff/index.vue')
                },
                {
                    path: 'order',
                    meta: { id: '2', name: '订单管理', icon: 'List', path: '/vppz/order', describe: 'C端下单后可以查看所有订单状态，已支付的订单可以完成陪护状态修改' },
                    component: ()=>import('../views/vppz/order/index.vue')
                }
                ]
            }
            
        ]
    },
    {
        path: '/login',
        component:() => import('../views/login/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})



export default router