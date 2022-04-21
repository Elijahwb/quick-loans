<script>
import ServiceCard from './service-card.vue'
export default {
    components: { ServiceCard }
}
</script>

<template>
    <div class="w-full bg-white relative mb-5">
        <div class="absolute w-full top-[-3rem]">
            <div class="container grid grid-cols-5 gap-20">
                <ServiceCard>
                    <div class="bg-white border lg:p-1 2xl:p-2 rounded-lg lg:mb-2 2xl:mb-3 lg:h-[6rem] 2xl:h-[7rem] lg:w-[6.5rem] 2xl:w-[7.5rem] grid items-center justify-center">
                        <img src="./assets/moneybag.png" alt="">
                    </div>
                    <div>Salary Loan</div>
                </ServiceCard>

            
                <ServiceCard>
                    <div class="bg-white border lg:p-1 2xl:p-2 rounded-lg lg:mb-2 2xl:mb-3 lg:h-[6rem] 2xl:h-[7rem] lg:w-[6.5rem] 2xl:w-[7.5rem] grid items-center justify-center">
                        <img src="./assets/moneybag.png" alt="">
                    </div>
                    <div>Business Loan</div>
                </ServiceCard>


                <ServiceCard>
                    <div class="bg-white border lg:p-1 2xl:p-2 rounded-lg lg:mb-2 2xl:mb-3 lg:h-[6rem] 2xl:h-[7rem] lg:w-[6.5rem] 2xl:w-[7.5rem] grid items-center justify-center">
                        <img src="./assets/dbstack.png" alt="">
                    </div>
                    <div>Agricultural Loan</div>
                </ServiceCard>


                <ServiceCard>
                    <div class="bg-white border lg:p-1 2xl:p-2 rounded-lg lg:mb-2 2xl:mb-3 lg:h-[6rem] 2xl:h-[7rem] lg:w-[6.5rem] 2xl:w-[7.5rem] grid items-center justify-center">
                        <img src="./assets/dbstack.png" alt="">
                    </div>
                    <div>School Fees Loan</div>
                </ServiceCard>


                <ServiceCard>
                    <div class="bg-white border lg:p-1 2xl:p-2 rounded-lg lg:mb-2 2xl:mb-3 lg:h-[6rem] 2xl:h-[7rem] lg:w-[6.5rem] 2xl:w-[7.5rem] grid items-center justify-center">
                        <img src="./assets/dbstack.png" alt="">
                    </div>
                    <div>Daily Loan</div>
                </ServiceCard>

            </div>
        </div>
    </div>
</template>