import Vue from 'vue'
import VueRouter from 'vue-router'
import CRUDView from '../views/CRUDView.vue'
import ScheduleView from '../views/ScheduleView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: { name: "lectures" },
  },
  {
    path: '/lectures',
    name: 'lectures',
    component: CRUDView
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: ScheduleView
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
