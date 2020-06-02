import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children:[
      {
        path: 'xtgl',
        name: '系统管理',
        component: () => import(/* webpackChunkName: "about" */ '../views/page/xtgl.vue'),
        // 默认路由
        redirect: 'xtgl/xtglRoom',
        children:[
          {
            path: 'xtglRoom',
            name: '系统管理-设置',
            component: () => import(/* webpackChunkName: "about" */ '../components/xtgl/xtglRoom/xtglRoom.vue'),
          },
          {
            path: 'xtglPass',
            name: '系统管理-修改密码',
            component: () => import(/* webpackChunkName: "about" */ '../components/xtgl/xtglPass/xtglPass.vue'),
          },
          {
            path: 'xtglLog',
            name: '系统管理-日记管理',
            component: () => import(/* webpackChunkName: "about" */ '../components/xtgl/xtglLog/xtglLog.vue'),
          },
          {
            path: 'xtglView',
            name: '系统管理-示意图选择',
            component: () => import(/* webpackChunkName: "about" */ '../components/xtgl/xtglView/xtglView.vue'),
          },
          {
            path: 'xtglPosition',
            name: '系统管理-分站显示位置',
            component: () => import(/* webpackChunkName: "about" */ '../components/xtgl/other/xtglPosition.vue'),
          },
          {
            path: 'xtglWork',
            name: '系统管理-工作区显示位置',
            component: () => import(/* webpackChunkName: "about" */ '../components/xtgl/other/xtglWork.vue'),
          },
          {
            path: 'xtglLogout',
            name: '系统管理-注销登录',
            component: () => import(/* webpackChunkName: "about" */ '../components/xtgl/other/xtglLogout.vue'),
          },
        ]
      },
      {
        path: 'zhgl',
        name: '综合管理',
        component: () => import('../views/page/zhgl.vue'),
        // 默认路由
        redirect: 'zhgl/zhglSection',
        children:[
          {
            path: 'zhglSection',
            name: '综合管理-部门管理',
            component: () => import('../components/zhgl/zhglSection/zhglSection.vue'),
          },
          {
            path: 'zhglJob',
            name: '综合管理-职务管理',
            component: () => import('../components/zhgl/zhglJob/zhglJob.vue'),
          },
          {
            path: 'zhglJobTitle',
            name: '综合管理-职称管理',
            component: () => import('../components/zhgl/zhglJobTitle/zhglJobTitle.vue'),
          },
          {
            path: 'zhglJobType',
            name: '综合管理-工种类型',
            component: () => import('../components/zhgl/zhglJobType/zhglJobType.vue'),
          },
          {
            path: 'zhglFLT',
            name: '综合管理-班次设置',
            component: () => import('../components/zhgl/zhglFLT/zhglFLT.vue'),
          },
          {
            path: 'zhglWork',
            name: '综合管理-工作面管理',
            component: () => import('../components/zhgl/zhglWork/zhglWork.vue'),
          },
          {
            path: 'zhglPlan',
            name: '综合管理-应急预案管理',
            component: () => import('../components/zhgl/zhglPlan/zhglPlan.vue'),
          },
          {
            path: 'zhglDif',
            name: '综合管理-分站显示',
            component: () => import('../components/zhgl/zhglDif/zhglDif.vue'),
          },
        ]
      },
      {
        path: 'yhgl',
        name: '用户管理',
        component: () => import('../views/page/yhgl.vue'),
        // 默认路由
        redirect: 'yhgl/yhglUser',
        children:[
          {
            path: 'yhglUser',
            name: '用户管理-新增用户',
            component: () => import('../components/yhgl/yhglUser/yhglUser.vue'),
          },
          {
            path: 'yhglChange',
            name: '用户管理-修改用户信息',
            component: () => import('../components/yhgl/yhglChange/yhglChange.vue'),
          },
          {
            path: 'yhglDel',
            name: '用户管理-删除已有用户',
            component: () => import('../components/yhgl/yhglDel/yhglDel.vue'),
          },
          {
            path: 'yhglSelect',
            name: '用户管理-查询用户信息',
            component: () => import('../components/yhgl/yhglSelect/yhglSelect.vue'),
          },
        ]
      },{
        path: 'yggl',
        name: '员工管理',
        component: () => import('../views/page/yggl.vue'),
        // 默认路由
        redirect: 'yggl/ygglWorker',
        children:[
          {
            path: 'ygglWorker',
            name: '员工管理-员工查询',
            component: () => import('../components/yggl/ygglWorker.vue'),
          },
          {
            path: 'ygglCreate',
            name: '员工管理-新建员工信息',
            component: () => import('../components/yggl/ygglCreate.vue'),
          },
          {
            path: 'ygglChange',
            name: '员工管理-修改员工信息',
            component: () => import('../components/yggl/ygglChange.vue'),
          },
          {
            path: 'ygglDel',
            name: '员工管理-删除员工信息',
            component: () => import('../components/yggl/ygglDel.vue'),
          },
          {
            path: 'ygglCard',
            name: '员工管理-标识卡管理',
            component: () => import('../components/yggl/ygglCard.vue'),
          },
        ]
      },
      {
        path: 'rygz',
        name: '人员跟踪',
        component: () => import('../views/page/rygz.vue'),
        // 默认路由
        redirect: 'rygz/rygzChoose',
        children:[
          {
            path: 'rygzChoose',
            name: '人员跟踪-选择跟踪',
            component: () => import('../components/rygz/rygzChoose/rygzChoose.vue'),
          },
          {
            path: 'rygzNow',
            name: '人员跟踪-实时跟踪',
            component: () => import('../components/rygz/rygzNow/rygzNow.vue'),
          },
          {
            path: 'rygzPosition',
            name: '人员跟踪-实时跟踪',
            component: () => import('../components/rygz/rygzPosition/rygzPosition.vue'),
          },
          {
            path: 'rygzWay',
            name: '人员跟踪-活动轨迹',
            component: () => import('../components/rygz/rygzWay/rygzWay.vue'),
          },
          {
            path: 'rygzResWay',
            name: '人员跟踪-活动轨迹',
            component: () => import('../components/rygz/rygzResWay/rygzResWay.vue'),
          },
          {
            path: 'rygzMine',
            name: '人员跟踪-个人定位',
            component: () => import('../components/rygz/rygzMine/rygzMine.vue'),
          }
        ]
      },
      // 工具页
      {
        path: 'NotFound',
        name: '404NotFound',
        component: () => import('../components/Tool/NotFound.vue'),
      }
    ]
  },
]

const router = new VueRouter({
  base:"/", //
  mode:"hash", //去除#/
  routes
})

export default router
