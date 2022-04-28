<script>
import Nav from './components/header/nav.vue'
import Footer from './components/footer/footer-content.vue'
import Copyright from './components/copy-right.vue'


export default {
    name:'header-component',

    components: { Nav, Footer, Copyright },
}
</script>

<template>
    <section class="bg-[#F3F7F9] relative">
        <Nav />
        
        <main class="mt-[94px]">
            <slot />

            <Footer />

            <Copyright />
        </main>
        
    </section>
</template>
