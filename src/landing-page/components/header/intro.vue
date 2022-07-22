<template>
    <div class="container pt-[100px] h-[90%] w-full grid lg:grid-cols-2 text-white text-sm">
        <div class="h-full flex items-center justify-center">
            <div class="flex flex-col justify-center">
                <div class="header-text text-center lg:text-left">
                    <div>Get a <span class="text-brand-500">{{activeLoan.loan}}</span></div> 
                    <div class="mt-4 lg:mt-[5rem]"><span class="text-brand-500">Loan</span> Today</div>
                </div>

                <div class="flex justify-center lg:block mt-[2.5rem] lg:mt-[4rem]">
                    <button-component :routeString="activeLoan.link" class="prominent-button px-5" label="How it works" />
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
import { inject } from 'vue'
import CalculatorCard from './calculator-card.vue'


export default {
    name: 'intro-component',

    setup () {
        const activeLoan = inject('activeLoan')

        return {
            activeLoan
        }
    },

    components: { 
        'button-component': Button,
        'calculator-card': CalculatorCard,
    }
}
</script>