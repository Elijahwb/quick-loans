<template>
    <div class="w-full flex justify-between items-center lg:py-5 2xl:py-10 lg:px-10 px-20 text-white border">

        <div class="flex items-center">
            <img src="./assets/logo.png" alt="">
            <div class="font-bold lg:text-[1.3rem] 2xl:text-[3.25rem] ml-3">Eleglance Finance</div>
        </div>

        <div class="flex items-center lg:text-[1] 2xl:text-[1.125rem] font-bold">
            <div class="mx-6 cursor-pointer">Home</div>
            <div class="mx-6 cursor-pointer">Services</div>
            <div class="mx-6 cursor-pointer">About</div>
            <div class="mx-6 cursor-pointer">FAQ</div>
            <button-component class="lg:text-[1rem] 2xl:text-[1.5625rem] font-medium" label="Apply Today"></button-component>
        </div>
    </div>
</template>

<script>

import Button from '@/components/button'

export default {
    name: 'nav-component',

    components: { 
        'button-component': Button,
    }
}
</script>