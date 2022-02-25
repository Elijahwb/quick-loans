<template>
    <div class="w-full flex justify-between items-center py-10 px-20 text-white">

        <div class="flex items-center">
            <div class="w-9 h-9 mr-2 rounded bg-brand-900 flex items-center justify-center">
                <div class="h-7 w-7 border border-white rounded flex items-center justify-center">
                    <div class="h-5 w-5 border border-white rounded flex items-center justify-center">
                        <div class="h-3 w-3 border border-white rounded"></div>
                    </div>
                </div>
                
            </div>
            <div class="font-bold text-lg">CompanyLogo</div>
        </div>

        <div class="flex items-center">
            <div class="mx-6 cursor-pointer">Home</div>
            <div class="mx-6 cursor-pointer">Services</div>
            <div class="mx-6 cursor-pointer">About</div>
            <div class="mx-6 cursor-pointer">FAQ</div>
            <button-component class="ml-6" label="Contact"></button-component>
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