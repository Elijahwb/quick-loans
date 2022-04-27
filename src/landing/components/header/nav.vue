<script>
export default {
    name: 'nav-component',
}
</script>

<script setup>
import { inject } from 'vue'
import ButtonComponent from '@/components/button'

const isMobileNav = inject('isMobileNav')
const showMobileMenu = inject('showMobileMenu')
const hideMobileMenu = inject('hideMobileMenu')

</script>

<template>
    <div>
        <!-- MAIN NAV OF THE SITE -->
        <div class="hidden fixed top-0 w-full lg:flex justify-between items-center bg-transparent py-5 px-10 text-white">

            <div class="flex items-center">
                <img src="./assets/logo.png" alt="">
                <div class="company-name">Eleglance Finance</div>
            </div>

            <nav class="flex items-center 2xl:text-[1.125rem] font-bold">
                <div class="mx-6 cursor-pointer">Home</div>
                <div class="mx-6 cursor-pointer">Services</div>
                <div class="mx-6 cursor-pointer">About</div>
                <div class="mx-6 cursor-pointer">FAQ</div>
            </nav>

            <button-component class="font-medium" :transparent="true" label="Apply Today"></button-component>
        </div>
        <!-- END OF MAIN NAV OF THE SITE -->

        <!-- MOBILE NAV OF THE SITE -->
        <div class="fixed lg:hidden top-0 w-full flex justify-between items-center bg-transparent py-5 px-5">
            
            <div class="flex items-center">
                <img class="w-10" src="./assets/logo.png" alt="">
                <div class="company-name">Eleglance Finance</div>
            </div>

            <svg @click="showMobileMenu" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 cursor-pointer text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>

        </div>
        <!-- END OF THE MOBILE NAV OF THE SITE -->

        <!-- MOBILE NAV CONTENT -->
        <div v-if="isMobileNav" class="fixed lg:hidden z-10 h-screen w-full bg-gradient-to-b from-black/60 backdrop-blur-lg text-white py-5 px-5">
            <div class="flex justify-end items-center">
                <svg @click="hideMobileMenu" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>

            <nav class="flex flex-col items-center">
                <div class="mx-6 my-4 cursor-pointer">Home</div>
                <div class="mx-6 my-4 cursor-pointer">Services</div>
                <div class="mx-6 my-4 cursor-pointer">About</div>
                <div class="mx-6 my-4 cursor-pointer">FAQ</div>
            </nav>
        </div>
        <!-- MOBILE NAV CONTENT -->
    </div>
</template>