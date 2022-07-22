<script>
import LoanDetailsHeader from '@/products-page/components/loan-details-header.vue'

export default {
    components: { LoanDetailsHeader }
}
</script>

<template>
    <section>
        <div class="container px-5 lg:px-0 pt-5">
            <loan-details-header headerText="Business Loan" />

            <div class="grid lg:grid-cols-2 text-pale">
                <div>
                    <article class="my-5">
                        Our SME loan is designed specifically to help SMEs with access to funds whether you need working capital or you’re looking to expand. Our working capital can also be provided through a renewable credit facility in which credit again becomes available as the loan is repaid. Our flexibility approach allows you to grow your business while we take care of the rest.

                    </article>
                    
                    <article class="my-5">
                        Our SME loan is a market place for quick and reliable way to access credit. Eleglance has a smarter, fairer and more humane way of doing money. It’s like borrowing and lending with your friends and family. Let us help you realize your full business potential through our SME loan.
                    </article>
                </div>

                <div class="pl-10 pt-5">
                    <img src="@/assets/businessLoan.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
