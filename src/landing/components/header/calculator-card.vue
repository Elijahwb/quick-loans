<template>
    <div class="bg-white w-[50%] h-[70%] py-5 px-10 flex flex-col items-center justify-center rounded-xl text-gray-900">
        <div class="text-brand-900 text-2xl">How  much do you want?</div>

        <div class="text-center text-lg">We provide instant cash loans.</div>

        <div class="w-full mb-5 mt-6">
            <input type="number" min="10000" placeholder="Amount" class="mt-1 text-gray-600 px-3 py-5 border border-gray-300 placeholder-gray-500 focus:outline-none focus:border-brand-900 focus:ring-brand-900 block w-full rounded-md sm:text-sm focus:ring-1">
        </div>

        <div class="w-full my-3">
            <input type="number" min="1" placeholder="Month" class="mt-1 text-gray-600 px-3 py-5 border border-gray-300 placeholder-gray-500 focus:outline-none focus:border-brand-900 focus:ring-brand-900 block w-full rounded-md sm:text-sm focus:ring-1">
        </div>

        <div class="text-lg mt-2">
            You have to pay: <span class="text-brand-900 font-bold">UGX 0.00</span> 
        </div>

        <button-component class="text-white w-full py-3.5 mt-7 mb-2" label="Proceed"></button-component>
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
