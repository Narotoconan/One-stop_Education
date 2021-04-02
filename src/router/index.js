import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/index'
    },
    {
        path: '/index',
        component: () => import('../views/index'),
        children: [
            {
                path: '',
                redirect: '/home'
            },
            {
                path: '/home',
                component: () => import('../views/home'),
                meta:{
                    title:'“一站式”在线教育'
                }
            },
            {
                path: '/category',
                component: () => import('../views/category'),
                meta:{
                    title:'课程分类',
                },
                children: [
                    {
                        path: 'hot',
                        component: () => import('../components/category/hot'),
                        meta:{
                            title:'热门课程'
                        },
                    },
                    {
                        path: 'all',
                        component: () => import('../components/category/all'),
                        meta:{
                            title:'全部课程'
                        },
                    },
                    {
                        path: 'math',
                        component: () => import('../components/category/math'),
                        meta:{
                            title:'数学课程'
                        },
                    },
                    {
                        path: 'english',
                        component: () => import('../components/category/english'),
                        meta:{
                            title:'英语课程',
                        },
                    },
                    {
                        path: 'program',
                        component: () => import('../components/category/program'),
                        meta:{
                            title:'代码编程'
                        },
                    },
                ],

            },

            {
                path: '/curriculum',
                component: () => import('../views/curriculumDetail'),
                meta:{
                    title:'课程详情'
                },
            },
            {
                path: '/profile',
                component: () => import('../views/profile'),
                meta: {
                    title: '个人中心',
                    requiresAuth: true // 是否需要判断是否登录
                },
                children: [
                    {
                        path: '',
                        redirect: 'userMg'
                    },
                    {
                        path: 'userMg',
                        component: () => import('../components/profile/userMg/userMg'),
                        meta:{
                            title:'用户信息',
                            requiresAuth: true
                        },
                    },
                    {
                        path: 'browsed',
                        component: () => import('../components/profile/browsed/browsed'),
                        meta:{
                            title:'浏览记录',
                            requiresAuth: true
                        },
                    },
                    {
                        path: 'favorites',
                        component: () => import('../components/profile/favorites/favorites'),
                        meta:{
                            title:'课程收藏',
                            requiresAuth: true
                        },
                    },

                ],

            },
            {
                path: '/video/:videoId',
                component: () => import('../views/videoPage'),
                meta:{
                    title:'视频详情',
                    requiresAuth: true
                },
            },
            {
                path: '/curriculum/:curriculumId',
                component: () => import('../views/curriculumDetail'),
                meta:{
                    title:'课程详情'
                },
            },
            {
                path: '/search',
                component: () => import('../views/searchPage'),
                meta:{
                    title:'搜索结果'
                },
            },
        ]
    },
    {
        path: '/login',
        component: () => import('../views/login'),
        children: [
            {
                path: '',
                redirect: 'toLogin'
            },
            {
                path: 'toLogin',
                component: () => import('../components/login/toLogin'),
                meta:{
                    title:'登录'
                },
                children: [
                    {
                        path: '',
                        redirect: 'user'
                    },
                    {
                        path: 'user',
                        component: () => import('../components/login/userLogin'),
                        meta:{
                            title:'用户登录'
                        },
                    },
                ]
            },
            {
                path: 'toSign',
                component: () => import('../components/login/toSign'),
                meta:{
                    title:'用户注册'
                },
            },
        ]
    },

]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, saveTop) {
        if (saveTop) {
            return saveTop;
        } else {
            return {x: 0, y: 0}
        }
    },
})
export default router
