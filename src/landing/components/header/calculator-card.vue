<template>
    <div class="bg-white w-[80%] 2xl:w-[70%] h-[75%] py-5 px-10 flex flex-col items-center justify-center rounded-xl text-gray-900">
        <div class="text-highlight lg:text-[1.5rem] 2xl:text-[2.0625rem]">How  much do you want?</div>

        <div class="text-center lg:text-[1rem] 2xl:text-[1.25rem] mt-5">We provide instant cash loans.</div>

        <div class="w-full lg:mb-2.5 2xl:mb-5 lg:mt-[1.7rem] 2xl:mt-[2.5rem]">
            <input type="number" min="10000" placeholder="Amount" class="lg:mt-0.5 2xl:mt-1 text-gray-600 px-3 lg:py-3 2xl:py-5 border border-gray-300 placeholder-gray-500 focus:outline-none focus:border-brand-500 focus:ring-brand-500 block w-full rounded-md sm:text-sm focus:ring-1">
        </div>

        <div class="w-full lg:my-1.5 2xl:my-3">
            <input type="number" min="1" placeholder="Month" class="lg:mt-0.5 2xl:mt-1 text-gray-600 px-3 lg:py-3 2xl:py-5 border border-gray-300 placeholder-gray-500 focus:outline-none focus:border-brand-500 focus:ring-brand-500 block w-full rounded-md sm:text-sm focus:ring-1">
        </div>

        <div class="text-[18px] lg:mt-2.5 2xl:mt-5">
            You have to pay: <span class="text-highlight lg:text-[1rem] 2xl:text-[1.375rem] font-bold">UGX 0.00</span> 
        </div>

        <button-component class="text-white lg:text-[1rem] 2xl:text-[1.5625rem] w-full lg:py-[0.6rem] 2xl:py-3.5 lg:mt-3.5 2xl:mt-7 lg:mb-1 2xl:mb-2" label="Proceed"></button-component>
    </div>
</template>

<script>

import Button from '@/components/button'

export default {
    components: { 
        'button-component': Button,
    }
}
</script>
