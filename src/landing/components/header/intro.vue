<template>
    <div class="container pt-[100px] h-[90%] w-full grid grid-cols-2 text-white text-sm">
        <div class="h-full flex items-center justify-center">
            <div class="flex flex-col justify-center">
                <div class="lg:text-[2.9rem] 2xl:text-[3.75rem] font-bold">
                    <div>Get a <span class="text-brand-500">Business</span></div> 
                    <div class="mt-[5rem]"><span class="text-brand-500">Loan</span> Today</div>
                </div>

                <div class="mt-[4rem]">
                    <button-component class="py-3.5 px-5 lg:text-[1rem] 2xl:text-[1.5625rem] font-medium" label="How it works"></button-component>
                </div>
            </div>
        </div>


        <div class="flex items-center justify-center">
            <calculator-card></calculator-card>
        </div>
    </div>
</template>

<script>

import Button from '@/components/button'
import CalculatorCard from './calculator-card.vue'

export default {
    name: 'intro-component',

    components: { 
        'button-component': Button,
        'calculator-card': CalculatorCard,
    }
}
</script>