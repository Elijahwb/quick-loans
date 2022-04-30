import { createRouter, createWebHistory } from 'vue-router'
import landingRoutes from '@/landing-page/router'
import aboutUsRoutes from '@/about-page/router'
import productsRoutes from '@/products-page/router'
import contactUsRoutes from '@/contact-page/router'
import salaryLoanRoutes from '@/salary-loan/router'
import businessLoanRoutes from '@/business-loan/router'
import agriculturalLoanRoutes from '@/agricultural-loan/router'
import schoolFessLoanRoutes from '@/school-fees-loan/router'
import dailyInterestLoanRoutes from '@/daily-interest-loan/router'

const routes = [
    ...landingRoutes,
    ...aboutUsRoutes,
    ...productsRoutes,
    ...contactUsRoutes,
    ...salaryLoanRoutes,
    ...businessLoanRoutes,
    ...agriculturalLoanRoutes,
    ...schoolFessLoanRoutes,
    ...dailyInterestLoanRoutes,
]
  
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router