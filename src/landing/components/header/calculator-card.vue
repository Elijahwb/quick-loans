<template>
    <div class="bg-white w-[80%] 2xl:w-[70%] h-[75%] py-5 px-10 flex flex-col items-center justify-center rounded-xl text-gray-900">
        <div class="text-highlight text-[33px]">How  much do you want?</div>

        <div class="text-center text-[20px] mt-5">We provide instant cash loans.</div>

        <div class="w-full mb-5 mt-[2.5rem]">
            <input type="number" min="10000" placeholder="Amount" class="mt-1 text-gray-600 px-3 py-5 border border-gray-300 placeholder-gray-500 focus:outline-none focus:border-brand-500 focus:ring-brand-500 block w-full rounded-md sm:text-sm focus:ring-1">
        </div>

        <div class="w-full my-3">
            <input type="number" min="1" placeholder="Month" class="mt-1 text-gray-600 px-3 py-5 border border-gray-300 placeholder-gray-500 focus:outline-none focus:border-brand-500 focus:ring-brand-500 block w-full rounded-md sm:text-sm focus:ring-1">
        </div>

        <div class="text-[18px] mt-5">
            You have to pay: <span class="text-highlight text-[22px] font-bold">UGX 0.00</span> 
        </div>

        <button-component class="text-white text-[25px] w-full py-3.5 mt-7 mb-2" label="Proceed"></button-component>
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
