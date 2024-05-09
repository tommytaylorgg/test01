import { createRouter, createWebHashHistory } from 'vue-router'
import page1 from '../components/2-1.vue'
import page2 from '../components/2-2.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: '/2-1',name: "2-1", component: page1 },
      { path: '/2-2',name: "2-2", component: page2 }
    ]
  })
  
export default router
