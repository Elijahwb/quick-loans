<script>
import ButtonComponent from '@/components/button.vue'
export default {
    components: {ButtonComponent}
}
</script>

<template>
    <div class="bg-white p-10 rounded-xl">
        <form action="">
            <div class="w-full mb-5 bg-[#EFEEEE]">
                <input type="text" placeholder="Your Name" class="mt-1 text-[25px] bg-transparent text-gray-600 px-3 py-5 border border-gray-300 placeholder-gray-500 focus:outline-none focus:border-brand-500 focus:ring-brand-500 block w-full rounded-md sm:text-sm focus:ring-1" required/>
            </div>
            <div class="w-full my-5 bg-[#EFEEEE]">
                <input type="email" placeholder="Email" class="mt-1 text-[25px] bg-transparent text-gray-600 px-3 py-5 border border-gray-300 placeholder-gray-500 focus:outline-none focus:border-brand-500 focus:ring-brand-500 block w-full rounded-md sm:text-sm focus:ring-1" required/>
            </div>
            <div class="w-full my-5 bg-[#EFEEEE]">
                <input type="text" placeholder="Mobile" class="mt-1 text-[25px] bg-transparent text-gray-600 px-3 py-5 border border-gray-300 placeholder-gray-500 focus:outline-none focus:border-brand-500 focus:ring-brand-500 block w-full rounded-md sm:text-sm focus:ring-1" required/>
            </div>
            <div class="w-full my-5 bg-[#EFEEEE]">
                <textarea style="font-size: 18px" placeholder="Message" class="mt-1 text-[25px] bg-transparent resize-none h-[155px] text-gray-600 px-3 py-5 border border-gray-300 placeholder-gray-500 focus:outline-none focus:border-brand-500 focus:ring-brand-500 block w-full rounded-md sm:text-sm focus:ring-1" required/>
            </div>

            <div class="flex justify-center items-center mt-10">
                <ButtonComponent class="text-[25px] text-white" label="Send Enquiry"/>
            </div>
        </form>
    </div>
</template>