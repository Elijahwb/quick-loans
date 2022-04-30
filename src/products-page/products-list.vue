<script>
import { inject } from '@vue/runtime-core'
export default {
    setup() {
        const handleNavClick = inject('handleNavClick')

        return {
            handleNavClick,
        }
    }
}
</script>

<template>
    <section>
        <div class="container grid lg:grid-cols-2 gap-10 px-5 lg:px-0 py-5 lg:py-20">
            <div>
                <div class="grid lg:grid-cols-2 gap-5">
                    <!-- CARD -->
                    <div class="text-center rounded-md shadow-lg flex flex-col items-center justify-center 2xl:w-[397px] bg-white p-5 2xl:p-10">
                        <div class="w-[40px] lg:w-[60px] 2xl:w-[80px] h-[40px] lg:h-[60px] 2xl:h-[80px] rounded-full text-white lg:text-[1.5rem] 2xl:text-[1.875rem] flex items-center justify-center">
                            <img src="@/assets/moneybag.png" alt="">
                        </div>

                        <div class="lg:text-[1.5rem] 2xl:text-[1.875rem] text-highlight my-2.5 lg:my-5 2xl:my-6 font-medium">Salary Loan</div>

                        <div class="lg:text-[1.2rem] 2xl:text-[1.5625rem] text-[#768599]">
                            Enabling you fulfill your dreams living your life to the full
                        </div>

                        <router-link @click="handleNavClick" to="/salary-loan" class="text-brand flex items-center">
                            <div>Tell me more</div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </router-link>
                    </div>
                    <!-- END OF CARD -->

                    <!-- CARD -->
                    <div class="text-center rounded-md shadow-lg flex flex-col items-center justify-center 2xl:w-[397px] bg-white p-5 2xl:p-10">
                        <div class="w-[40px] lg:w-[60px] 2xl:w-[80px] h-[40px] lg:h-[60px] 2xl:h-[80px] rounded-full text-white lg:text-[1.5rem] 2xl:text-[1.875rem] flex items-center justify-center">
                            <img src="@/assets/moneybag.png" alt="">
                        </div>

                        <div class="lg:text-[1.5rem] 2xl:text-[1.875rem] text-highlight my-2.5 lg:my-5 2xl:my-6 font-medium">Business Loan</div>

                        <div class="lg:text-[1.2rem] 2xl:text-[1.5625rem] text-[#768599]">
                            Let us help you realize your full business potential through our SME loan
                        </div>

                        <router-link @click="handleNavClick" to="/business-loan" class="text-brand flex items-center">
                            <div>Tell me more</div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </router-link>
                    </div>
                    <!-- END OF CARD -->
                </div>

                <div class="grid lg:grid-cols-2 gap-5 mt-5">
                    <!-- CARD -->
                    <div class="text-center rounded-md shadow-lg flex flex-col items-center justify-center 2xl:w-[397px] bg-white p-5 2xl:p-10">
                        <div class="w-[40px] lg:w-[60px] 2xl:w-[80px] h-[40px] lg:h-[60px] 2xl:h-[80px] rounded-full text-white lg:text-[1.5rem] 2xl:text-[1.875rem] flex items-center justify-center">
                            <img src="@/assets/moneybag.png" alt="">
                        </div>

                        <div class="lg:text-[1.5rem] 2xl:text-[1.875rem] text-highlight my-2.5 lg:my-5 2xl:my-6 font-medium">Salary Loan</div>

                        <div class="lg:text-[1.2rem] 2xl:text-[1.5625rem] text-[#768599]">
                            Enabling you fulfill your dreams living your life to the full
                        </div>

                        <div class="text-brand flex items-center">
                            <div>Tell me more</div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                    <!-- END OF CARD -->

                    <!-- CARD -->
                    <div class="text-center rounded-md shadow-lg flex flex-col items-center justify-center 2xl:w-[397px] bg-white p-5 2xl:p-10">
                        <div class="w-[40px] lg:w-[60px] 2xl:w-[80px] h-[40px] lg:h-[60px] 2xl:h-[80px] rounded-full text-white lg:text-[1.5rem] 2xl:text-[1.875rem] flex items-center justify-center">
                            <img src="@/assets/moneybag.png" alt="">
                        </div>

                        <div class="lg:text-[1.5rem] 2xl:text-[1.875rem] text-highlight my-2.5 lg:my-5 2xl:my-6 font-medium">Agricultural Loan</div>

                        <div class="lg:text-[1.2rem] 2xl:text-[1.5625rem] text-[#768599]">
                            We understand the challenges farmers face from day to day
                        </div>

                        <router-link @click="handleNavClick" to="/agricultural-loan" class="text-brand flex items-center">
                            <div>Tell me more</div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </router-link>
                    </div>
                    <!-- END OF CARD -->
                </div>

                <div class="grid lg:grid-cols-2 gap-5 mt-5">
                    <!-- CARD -->
                    <div class="text-center rounded-md shadow-lg flex flex-col items-center justify-center 2xl:w-[397px] bg-white p-5 2xl:p-10">
                        <div class="w-[40px] lg:w-[60px] 2xl:w-[80px] h-[40px] lg:h-[60px] 2xl:h-[80px] rounded-full text-white lg:text-[1.5rem] 2xl:text-[1.875rem] flex items-center justify-center">
                            <img src="@/assets/moneybag.png" alt="">
                        </div>

                        <div class="lg:text-[1.5rem] 2xl:text-[1.875rem] text-highlight my-2.5 lg:my-5 2xl:my-6 font-medium">Daily Interest Loan</div>

                        <div class="lg:text-[1.2rem] 2xl:text-[1.5625rem] text-[#768599]">
                            Enabling you fulfill your dreams living your life to the full
                        </div>

                        <router-link @click="handleNavClick" to="/daily-interest-loan" class="text-brand flex items-center">
                            <div>Tell me more</div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </router-link>
                    </div>
                    <!-- END OF CARD -->

                    <!-- CARD -->
                    <div class="text-center rounded-md shadow-lg flex flex-col items-center justify-center 2xl:w-[397px] bg-white p-5 2xl:p-10">
                        <div class="w-[40px] lg:w-[60px] 2xl:w-[80px] h-[40px] lg:h-[60px] 2xl:h-[80px] rounded-full text-white lg:text-[1.5rem] 2xl:text-[1.875rem] flex items-center justify-center">
                            <img src="@/assets/moneybag.png" alt="">
                        </div>

                        <div class="lg:text-[1.5rem] 2xl:text-[1.875rem] text-highlight my-2.5 lg:my-5 2xl:my-6 font-medium">School Fees Loan</div>

                        <div class="lg:text-[1.2rem] 2xl:text-[1.5625rem] text-[#768599]">
                            we understand that securing a future is important to you. Secure your future Today! 
                        </div>

                        <router-link @click="handleNavClick" to="/school-fees-loan" class="text-brand flex items-center">
                            <div>Tell me more</div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </router-link>
                    </div>
                    <!-- END OF CARD -->
                </div>
            </div>

            <div class="flex flex-col justify-between">
                <div>
                    <div class="header-text text-highlight w-full"><span class="text-brand underline">Loan</span> Products</div>

                    <article class="text-pale">
                        <p class="my-3 lg:my-5">
                            Eleglance Finance offers a mix of loan products customized to the needs of the clients in urban, peri-urban and rural areas of Uganda to meet their ever-changing needs. 
                        </p>
                        <p class="my-3 lg:my-5">
                            These products include individual loans, salary loans, Agricultural loans, Daily interest loans and school fees loans. 
                        </p>
                    </article>
                </div>

                <div class="my-5 lg:my-10">
                    <div class="header-text text-highlight w-full"><span class="text-brand underline">Other</span> Services</div>

                    <article class="text-pale">
                        <div class="my-3 lg:my-5">
                            <p class="font-medium">1. Mobile Money Transfers:</p>
                            <p class="ml-5 my-1">a. Airtel</p>
                            <p class="ml-5 my-1">b. MTN</p>
                        </div>
                        <div class="my-3 lg:my-5">
                            <p class="font-medium">2. Agency Banking:</p>
                            <p class="ml-5 my-1">a. Centenary Bank</p>
                            <p class="ml-5 my-1">b. DFCU Bank</p>
                            <p class="ml-5 my-1">c. Finance Trust Bank</p>
                            <p class="ml-5 my-1">d. Exim Bank</p>
                            <p class="ml-5 my-1">e. Stanbic Bank</p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>