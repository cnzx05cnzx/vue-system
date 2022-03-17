import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";


const routes = [
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                meta: {
                    title: '系统首页'
                },
                component: () => import (
                    /* webpackChunkName: "dashboard" */
                    "../views/Dashboard.vue")
            }, {
                path: "/table",
                name: "basetable",
                meta: {
                    title: '表格'
                },
                component: () => import (
                    /* webpackChunkName: "table" */
                    "../views/BaseTable.vue")
            }, {
                path: "/charts",
                name: "basecharts",
                meta: {
                    title: '图表'
                },
                component: () => import (
                    /* webpackChunkName: "charts" */
                    "../views/BaseCharts.vue")
            }, {
                path: "/form",
                name: "baseform",
                meta: {
                    title: '表单'
                },
                component: () => import (
                    /* webpackChunkName: "form" */
                    "../views/BaseForm.vue")
            }, {
                path: "/tabs",
                name: "tabs",
                meta: {
                    title: 'tab标签'
                },
                component: () => import (
                    /* webpackChunkName: "tabs" */
                    "../views/Tabs.vue")
            },  {
                path: "/permission",
                name: "permission",
                meta: {
                    title: '权限管理',
                    permission: true
                },
                component: () => import (
                    /* webpackChunkName: "permission" */
                    "../views/Permission.vue")
            }, {
                path: "/upload",
                name: "upload",
                meta: {
                    title: '上传插件'
                },
                component: () => import (
                    /* webpackChunkName: "upload" */
                    "../views/Upload.vue")
            }, {
                path: "/icon",
                name: "icon",
                meta: {
                    title: '自定义图标'
                },
                component: () => import (
                    /* webpackChunkName: "icon" */
                    "../views/Icon.vue")
            }, {
                path: '/404',
                name: '404',
                meta: {
                    title: '找不到页面'
                },
                component: () => import (/* webpackChunkName: "404" */
                    '../views/404.vue')
            }, {
                path: '/403',
                name: '403',
                meta: {
                    title: '没有权限'
                },
                component: () => import (/* webpackChunkName: "403" */
                    '../views/403.vue')
            }
        ]
    },
    {
        path: "/user",
        redirect: '/user/index',
        name: "pHome",
        meta: {
            roles: ['user']
        },
        component: () => import ("../views/user/Home"),
        children: [
            {
                path: "index",
                name: "pindex",
                meta: {
                    title: '系统首页'
                },
                component: () => import ("../views/user/index")
            },{
                path: "charts",
                name: "pcharts",
                meta: {
                    title: '图表展示'
                },
                component: () => import ("../views/user/charts")
            }, {
                path: "info",
                name: "pinfo",
                meta: {
                    title: '个人信息'
                },
                component: () => import ("../views/user/info")
            }, {
                path: "history",
                name: "pbuy",
                meta: {
                    title: '历史服务查询'
                },
                component: () => import ("../views/user/history")
            }, {
                path: "spideritem",
                name: "spideritem",
                meta: {
                    title: '商品评论爬取'
                },
                component: () => import ("../views/user/spideritem")
            },{
                path: "analysis",
                name: "analysis",
                meta: {
                    title: '商品评论分析'
                },
                component: () => import ("../views/user/analysis")
            },{
                path: "message",
                name: "message",
                meta: {
                    title: '消息'
                },
                component: () => import (
                    /* webpackChunkName: "tabs" */
                    "../views/user/message")
            },
        ],
    },
    {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import (
            /* webpackChunkName: "login" */
            "../views/Login.vue")
    },
    {
        path: "/register",
        name: "register",
        meta: {
            title: '注册'
        },
        component: () => import (
            /* webpackChunkName: "login" */
            "../views/register/reg"),
    },
    {
        path: '/:pathMatch(.*)',
        name: '404',
        component: () => import('../views/404.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | 分析平台`;
    const role = localStorage.getItem('ms_username');
    console.log(role);
    if (to.path.includes('register')) {
        next();
    } else if (!role && to.path !== '/login') {
        console.log("1");
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        console.log("2");
        role === 'admin'
            ? next()
            : next('/403');
    } else if (to.meta.roles) {
        next();
    } else
        next();
});

export default router;