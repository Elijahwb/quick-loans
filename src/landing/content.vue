<script>
import Header from './components/header/header.vue'
import Services from './components/services/services-component.vue'
import Aboutus from './components/about/aboutus-component.vue'
import ClientMessage from './components/clients-message.vue'
import HowItWorks from './components/how-it-works/content-component.vue'
import Questions from './components/questions/content-component.vue'
import Contactus from './components/contact/contact-content.vue'
import Footer from './components/footer/footer-content.vue'


export default {
    name:'header-component',

    components: { Header, Services, Aboutus, ClientMessage, HowItWorks, Questions, Contactus, Footer },
}
</script>

<template>
    <main class="bg-[#F3F7F9]">

        <Header />

        <Services />

        <Aboutus />

        <ClientMessage />

        <HowItWorks />

        <Questions />

        <Contactus />

        <Footer />
        
    </main>
</template>
