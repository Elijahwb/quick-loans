<script>
import ServiceCard from './service-card.vue'
export default {
    components: { ServiceCard }
}
</script>

<template>
    <div class="w-full bg-white relative mb-[8rem]">
        <div class="absolute w-full top-[-1.8rem] lg:top-[-3rem]">
            <div class="container flex items-start justify-center">
                <ServiceCard>
                    <div class="bg-white border p-2 lg:p-4 2xl:p-6 rounded-lg lg:mb-2 2xl:mb-3 h-[3rem] w-[3rem] lg:h-[6rem] 2xl:h-[7rem] lg:w-[6.5rem] 2xl:w-[7.5rem] grid items-center justify-center">
                        <img class="w-full h-full" src="./assets/moneybag.png" alt="">
                    </div>
                    <div>Salary Loan</div>
                </ServiceCard>

            
                <ServiceCard>
                    <div class="bg-white border p-2 lg:p-4 2xl:p-6 rounded-lg lg:mb-2 2xl:mb-3 h-[3rem] w-[3rem] lg:h-[6rem] 2xl:h-[7rem] lg:w-[6.5rem] 2xl:w-[7.5rem] grid items-center justify-center">
                        <img class="w-full h-full" src="./assets/moneybag.png" alt="">
                    </div>
                    <div>Business Loan</div>
                </ServiceCard>


                <ServiceCard>
                    <div class="bg-white border p-2 lg:p-4 2xl:p-6 rounded-lg lg:mb-2 2xl:mb-3 h-[3rem] w-[3rem] lg:h-[6rem] 2xl:h-[7rem] lg:w-[6.5rem] 2xl:w-[7.5rem] grid items-center justify-center">
                        <img class="w-full h-full" src="./assets/moneybag.png" alt="">
                    </div>
                    <div>Agricultural Loan</div>
                </ServiceCard>


                <ServiceCard>
                    <div class="bg-white border p-2 lg:p-4 2xl:p-6 rounded-lg lg:mb-2 2xl:mb-3 h-[3rem] w-[3rem] lg:h-[6rem] 2xl:h-[7rem] lg:w-[6.5rem] 2xl:w-[7.5rem] grid items-center justify-center">
                        <img class="w-full h-full" src="./assets/moneybag.png" alt="">
                    </div>
                    <div>School Fees Loan</div>
                </ServiceCard>


                <ServiceCard>
                    <div class="bg-white border p-2 lg:p-4 2xl:p-6 rounded-lg lg:mb-2 2xl:mb-3 h-[3rem] w-[3rem] lg:h-[6rem] 2xl:h-[7rem] lg:w-[6.5rem] 2xl:w-[7.5rem] grid items-center justify-center">
                        <img class="w-full h-full" src="./assets/moneybag.png" alt="">
                    </div>
                    <div>Daily Loan</div>
                </ServiceCard>

            </div>
        </div>
    </div>
</template>