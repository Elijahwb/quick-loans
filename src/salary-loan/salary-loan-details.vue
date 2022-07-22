<script>
import LoanDetailsHeader from '@/products-page/components/loan-details-header.vue'

export default {
    components: { LoanDetailsHeader }
}
</script>

<template>
    <section>
        <div class="container px-5 lg:px-0 pt-5">
            <loan-details-header headerText="Salary Loan" />

            <div class="grid lg:grid-cols-2 text-pale">
                <div>
                    <article class="my-5">
                        Eleglance Finance understands that you have dreams and ambitions about improving the quality of your life. We know that you would for example like to buy new furniture or buy a plot of land. That you also buy consumer durables such as a washing machine or microwave oven that makes life easier and more convenient for you and your family.
                    </article>
                    
                    <article class="my-5">
                        You may also be planning to study for your Masters or parallel degree or any other grand dream you may have. All these dreams need financing to become a reality. That is why we at Eleglance Finance offer you salary Loans to enable you fulfill your dreams and live your life to the full.
                    </article>
                </div>

                <div class="pl-10 pt-5">
                    <img src="@/assets/salaryLoan.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>