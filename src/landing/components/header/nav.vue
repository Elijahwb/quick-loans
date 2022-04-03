<template>
    <div class="w-full flex justify-between items-center py-10 px-20 text-white">

        <div class="flex items-center">
            <img src="./assets/logo.png" alt="">
            <div class="font-bold text-2xl ml-3">Eleglance Finance</div>
        </div>

        <div class="flex items-center text-lg">
            <div class="mx-6 cursor-pointer">Home</div>
            <div class="mx-6 cursor-pointer">Services</div>
            <div class="mx-6 cursor-pointer">About</div>
            <div class="mx-6 cursor-pointer">FAQ</div>
            <button-component class="ml-6" label="Apply"></button-component>
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