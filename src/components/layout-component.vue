<script>
import Nav from '@/components/nav.vue'
import HappyClients from '@/components/happy-clients.vue'
import Footer from '@/components/footer/footer-content.vue'
import Copyright from '@/components/copy-right.vue'


export default {
    name:'header-component',

    components: { Nav, HappyClients, Footer, Copyright },
}
</script>

<template>
    <section class="bg-[#F3F7F9] relative">
        <Nav />
        <!-- class="mt-[94px]" -->
        <main>
            <slot />

            <happy-clients />

            <Footer />

            <Copyright />
        </main>
        
    </section>
</template>
