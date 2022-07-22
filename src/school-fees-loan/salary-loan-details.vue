<script>
import LoanDetailsHeader from '@/products-page/components/loan-details-header.vue'

export default {
    components: { LoanDetailsHeader }
}
</script>

<template>
    <section>
        <div class="container px-5 lg:px-0 pt-5">
            <loan-details-header headerText="School Fees Loan" />

            <div class="grid lg:grid-cols-2 text-pale">
                <div>
                    <article class="my-5">
                        Nothing is more important to you than Knowledge for your children and yourself. With our School fees loan, you can help your children and yourself save for the future. 

                    </article>
                    
                    <article class="my-5">
                        At Eleglance Finance we understand that securing a future is important to you.  This product is for all our existing clients who may have school fees needs.
                    </article>
                </div>

                <div class="pl-10 pt-5">
                    <img src="@/assets/schoolFeesLoan.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

