import { createRouter, createWebHistory } from 'vue-router'
import landingRoutes from '@/landing-page/router'
import aboutUsRoutes from '@/about-page/router'
import productsRoutes from '@/products-page/router'
import contactUsRoutes from '@/contact-page/router'

const routes = [
    ...landingRoutes,
    ...aboutUsRoutes,
    ...productsRoutes,
    ...contactUsRoutes,
]
  
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router