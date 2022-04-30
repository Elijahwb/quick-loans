<script>
import Nav from '@/components/nav.vue'
import Header from './components/header/header.vue'
import Services from './components/services/services-component.vue'
import Aboutus from './components/about/aboutus-component.vue'
import ClientMessage from './components/clients-message.vue'
import HowItWorks from './components/how-it-works/content-component.vue'
import Questions from './components/questions/content-component.vue'
import Contactus from '@/contact-page/contact-section.vue'
import Footer from '@/components/footer/footer-content.vue'
import Copyright from '../components/copy-right.vue'
import { inject } from '@vue/runtime-core'


export default {
    name:'header-component',

    setup() {
        const handleNavClick = inject('handleNavClick')

        return {
            handleNavClick
        }
    },

    components: { Nav, Header, Services, Aboutus, ClientMessage, HowItWorks, Questions, Contactus, Footer, Copyright },
}
</script>

<template>
    <section class="bg-[#F3F7F9] relative">
        <Nav />
        
        <main>
            <Header />

            <Services />

            <Aboutus />

            <div class="lg:hidden px-5 py-2 pb-10">
                <div class="sub-header-text text-highlight font-bold mb-5"><span class="text-brand underline">Loan</span> Products</div>
                <div class="grid grid-cols-2 gap-6">
                    <router-link @click="handleNavClick" to="/salary-loan" class="flex bg-white rounded shadow-md py-3 px-2">
                        <div class="w-6 h-6 mr-1 p-0.5"><img class="w-full h-full" src="@/assets/moneybag.png" alt=""></div>
                        <div>Salary Loan</div>
                    </router-link>
                    <router-link @click="handleNavClick" to="/business-loan" class="flex bg-white rounded shadow-md py-3 px-2">
                        <div class="w-6 h-6 mr-1 p-0.5"><img class="w-full h-full" src="@/assets/moneybag.png" alt=""></div>
                        <div>Business Loan</div>
                    </router-link>
                </div>

                <router-link @click="handleNavClick" to="/school-fees-loan" class="flex bg-white rounded shadow-md py-3 px-2 mt-2.5">
                    <div class="w-6 h-6 mr-1 p-0.5"><img class="w-full h-full" src="@/assets/moneybag.png" alt=""></div>
                    <div>School Fees Loan</div>
                </router-link>

                <div class="grid grid-cols-2 gap-6 mt-2.5">
                    <router-link @click="handleNavClick" to="/agricultural-loan" class="flex bg-white rounded shadow-md py-3 px-2">
                        <div class="w-6 h-6 mr-1 p-0.5"><img class="w-full h-full" src="@/assets/moneybag.png" alt=""></div>
                        <div>Agricultural Loan</div>
                    </router-link>
                    <router-link @click="handleNavClick" to="/daily-interest-loan" class="flex bg-white rounded shadow-md py-3 px-2">
                        <div class="w-6 h-6 mr-1 p-0.5"><img class="w-full h-full" src="@/assets/moneybag.png" alt=""></div>
                        <div>Daily Loan</div>
                    </router-link>
                </div>

            </div>

            <ClientMessage />

            <HowItWorks />

            <Questions />

            <Contactus />

            <Footer />

            <Copyright />
        </main>
        
    </section>
</template>
