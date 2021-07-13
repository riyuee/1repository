import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Main.vue'),
    // 按视频写成@views/Main.vue报错
  },
]

const router = new VueRouter({
  routes,
})

export default router
