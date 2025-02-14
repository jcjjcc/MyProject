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
                    id:'3',name: 'DIDI陪诊', icon:'BellFilled'
                },
                children: [
                    
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