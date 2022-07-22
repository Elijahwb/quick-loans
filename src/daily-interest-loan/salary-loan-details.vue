<script>
import LoanDetailsHeader from '@/products-page/components/loan-details-header.vue'

export default {
    components: { LoanDetailsHeader }
}
</script>

<template>
    <section>
        <div class="container px-5 lg:px-0 pt-5">
            <loan-details-header headerText="Daily Interest Loan" />

            <div class="grid lg:grid-cols-2 text-pale">
                <div>
                    <article class="my-5">
                       Are you running a business and need quick cash to close a deal? We got you covered, this product targets all clients in rural or peri- urban areas, as long as you are engaged in business enterprises and have short term liquidity needs.
                    </article>
                </div>

                <div class="pl-10 pt-5">
                    <img src="@/assets/dailyLoan.jpeg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

