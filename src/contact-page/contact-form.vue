<script>
import ButtonComponent from '@/components/button.vue'
export default {
    components: {ButtonComponent}
}
</script>

<template>
    <div class="flex flex-col items-center justify-center">
        
        <form class="bg-white p-5 2xl:p-10 rounded-xl w-full lg:w-[90%] text-pale" action="">
            <div class="mb-5">
                You can reach us any time via <span class="text-brand">info@eleglancefinance.co.ug</span>
                or fill out the form and we shall get back to promptly
            </div>
            <div class="w-full mb-5 bg-[#FFFCFC]">
                <input type="text" placeholder="Your Name" class="mt-2 lg:text-[25px] bg-transparent px-3 py-2 lg:py-3 2xl:py-5 border border-gray-300 placeholder-gray-500 focus:outline-none focus:border-brand-500 focus:ring-brand-500 block w-full rounded-md sm:text-sm focus:ring-1" required/>
            </div>
            <div class="w-full mb-5 bg-[#FFFCFC]">
                <input type="email" placeholder="Email" class="mt-2 lg:text-[25px] bg-transparent px-3 py-2 lg:py-3 2xl:py-5 border border-gray-300 placeholder-gray-500 focus:outline-none focus:border-brand-500 focus:ring-brand-500 block w-full rounded-md sm:text-sm focus:ring-1" required/>
            </div>
            <div class="w-full mb-5 bg-[#FFFCFC]">
                <input type="text" placeholder="Mobile" class="mt-2 lg:text-[25px] bg-transparent px-3 py-2 lg:py-3 2xl:py-5 border border-gray-300 placeholder-gray-500 focus:outline-none focus:border-brand-500 focus:ring-brand-500 block w-full rounded-md sm:text-sm focus:ring-1" required/>
            </div>
            <!-- Products section here -->
            <div>
                <p>Products</p>

                <div class="grid grid-cols-2 font-medium">
                    <div>
                        <div class="flex items-center my-3">
                            <input type="checkbox" name="" id="">
                            <div class="ml-2">Salary Loan</div>
                        </div>
                        <div class="flex items-center my-3">
                            <input type="checkbox" name="" id="">
                            <div class="ml-2">Business Loan</div>
                        </div>
                        <div class="flex items-center my-3">
                            <input type="checkbox" name="" id="">
                            <div class="ml-2">School Fees Loan</div>
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center my-3">
                            <input type="checkbox" name="" id="">
                            <div class="ml-2">Agricultural Loan</div>
                        </div>
                        <div class="flex items-center my-3">
                            <input type="checkbox" name="" id="">
                            <div class="ml-2">Daily Interest Loan</div>
                        </div>
                        <div class="flex items-center my-3">
                            <input type="checkbox" name="" id="">
                            <div class="ml-2">Other</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End of products section here -->
            <div class="w-full mb-5 bg-[#EFEEEE] rounded overflow-hidden">
                <textarea placeholder="How can we help you" class="mt-2 lg:text-[20px] bg-transparent resize-none h-[155px] px-3 py-2 lg:py-3 2xl:py-5 placeholder-gray-500 focus:outline-none focus:border-brand-500 focus:ring-brand-500 block w-full rounded-md sm:text-sm focus:ring-1" required/>
            </div>

            <div class="flex justify-center items-center mt-5 2xl:mt-10">
                <ButtonComponent class="prominent-button text-white w-full lg:mt-3.5 2xl:mt-7 lg:mb-1 2xl:mb-2" label="Send Enquiry"/>
            </div>
        </form>
    </div>
</template>