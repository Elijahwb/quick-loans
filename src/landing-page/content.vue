<script>
import Nav from '@/components/nav.vue'
import Header from './components/header/header.vue'
import Aboutus from './components/about/aboutus-component.vue'
import ClientMessage from './components/clients-message.vue'
import HowItWorks from './components/how-it-works/content-component.vue'
import Questions from './components/questions/content-component.vue'
import Contactus from '@/contact-page/contact-section.vue'
import Footer from '@/components/footer/footer-content.vue'
import Copyright from '../components/copy-right.vue'


export default {
    name:'header-component',

    components: { Nav, Header, Aboutus, ClientMessage, HowItWorks, Questions, Contactus, Footer, Copyright },
}
</script>

<template>
    <section class="bg-[#F3F7F9] relative">
        <Nav />
        
        <main>
            <Header />

            <Aboutus />

            <ClientMessage />

            <HowItWorks />

            <Questions />

            <Contactus />

            <Footer />

            <Copyright />
        </main>
        
    </section>
</template>
