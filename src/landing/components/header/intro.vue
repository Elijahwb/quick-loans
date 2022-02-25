<template>
    <div class="container h-[85%] w-full grid grid-cols-2 text-white text-sm">
        <div class="h-full flex items-center justify-center">
            <div class="flex flex-col justify-center">
                <div class="text-7xl font-medium">
                    Get a Business 
                    <br> or Small Loan 
                    <br> Today
                </div>

                <div class="mt-7">
                    <button-component class="py-3.5 px-5" label="How it works"></button-component>
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