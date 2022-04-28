<script>
export default {
    name: 'nav-component',
}
</script>

<script setup>
import { inject } from 'vue'
import ButtonComponent from '@/components/button'

const isMobileNav = inject('isMobileNav')
const isSolidNavBg = inject('isSolidNavBg')
const showMobileMenu = inject('showMobileMenu')
const hideMobileMenu = inject('hideMobileMenu')
</script>

<template>
    <div>
        <!-- MAIN NAV OF THE SITE -->
        <div :class="{'bg-white text-[#41201E] shadow': isSolidNavBg, 'bg-transparent text-white': !isSolidNavBg}" class="hidden lg:grid fixed top-0 w-full z-10">
            <div class="container flex w-full justify-between items-center py-5 px-5 2xl:px-0">
                <div class="flex items-center">
                    <img src="@/assets/logo.png" alt="">
                    <div class="company-name">Eleglance Finance</div>
                </div>

                <nav class="flex items-center font-medium">
                    <router-link to="/" class="mx-6">Home</router-link>
                    <router-link to="/products" class="mx-6">Products</router-link>
                    <div class="mx-6">Services</div>
                    <router-link to="/about-us" class="mx-6">About</router-link>
                    <div class="mx-6">FAQ</div>
                    <div class="mx-6">Contact</div>
                </nav>

                <button-component class="font-medium" :transparent="true" label="Apply Today"></button-component>
            </div>
        </div>
        <!-- END OF MAIN NAV OF THE SITE -->

        <!-- MOBILE NAV OF THE SITE -->
        <div :class="{'bg-white text-[#41201E] shadow': isSolidNavBg, 'bg-transparent text-white': !isSolidNavBg}"  class="fixed lg:hidden top-0 w-full flex justify-between items-center z-10 py-5 px-5">
            
            <div class="flex items-center">
                <img class="w-10" src="@/assets/logo.png" alt="">
                <div class="company-name">Eleglance Finance</div>
            </div>

            <svg @click="showMobileMenu" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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

            <nav class="flex flex-col items-center font-medium">
                <router-link to="/" class="mx-6 my-4 cursor-pointer">Home</router-link>
                <router-link to="/products" class="mx-6 my-4 cursor-pointer">Products</router-link>
                <div class="mx-6 my-4 cursor-pointer">Services</div>
                <router-link to="/about-us" class="mx-6 my-4 cursor-pointer">About</router-link>
                <div class="mx-6 my-4 cursor-pointer">FAQ</div>
                <div class="mx-6 my-4 cursor-pointer">Contact</div>
            </nav>
        </div>
        <!-- MOBILE NAV CONTENT -->
    </div>
</template>