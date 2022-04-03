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
                    <div class="bg-white border p-2 rounded-lg mb-3 h-[7rem] w-[7rem] grid items-center justify-center">
                        <img src="./assets/moneybag.png" alt="">
                    </div>
                    <div>Salary Loan</div>
                </ServiceCard>

            
                <ServiceCard>
                    <div class="bg-white border p-2 rounded-lg mb-3 h-[7rem] w-[7rem] grid items-center justify-center">
                        <img src="./assets/moneybag.png" alt="">
                    </div>
                    <div>Business Loan</div>
                </ServiceCard>


                <ServiceCard>
                    <div class="bg-white border p-2 rounded-lg mb-3 h-[7rem] w-[7rem] grid items-center justify-center">
                        <img src="./assets/dbstack.png" alt="">
                    </div>
                    <div>Agricultural Loan</div>
                </ServiceCard>


                <ServiceCard>
                    <div class="bg-white border p-2 rounded-lg mb-3 h-[7rem] w-[7rem] grid items-center justify-center">
                        <img src="./assets/dbstack.png" alt="">
                    </div>
                    <div>School Fees Loan</div>
                </ServiceCard>


                <ServiceCard>
                    <div class="bg-white border p-2 rounded-lg mb-3 h-[7rem] w-[7rem] grid items-center justify-center">
                        <img src="./assets/dbstack.png" alt="">
                    </div>
                    <div>Daily Loan</div>
                </ServiceCard>

            </div>
        </div>
    </div>
</template>