<script>
import LoanDetailsHeader from '@/products-page/components/loan-details-header.vue'

export default {
    components: { LoanDetailsHeader }
}
</script>

<template>
    <section>
        <div class="container px-5 lg:px-0 pt-5">
            <loan-details-header headerText="Agricultural Loan" />

            <div class="grid lg:grid-cols-2 text-pale">
                <div>
                    <article class="my-5">
                        This product targets all clients, in rural or peri- urban areas, as long as they are engaged in business enterprises in the Agricultural Value Chain. Providing Finance to farmers is unique. We understand the challenges farmers face from day to day. Our aim is to help you with all your short and medium term borrowing needs &amp; support the successful &amp; profitable operations of your farming activities and any diversification or expansion plans you may have as long as you are engaged in business enterprises in the Agricultural value chain.

                    </article>
                    
                    <article class="my-5">
                        Whether you need funds to buy agricultural machinery, land, property or livestock, or to make environmental improvements to your farm,  
                    </article>

                    <article class="my-5">
                        <p>
                            we have the finance option to help you. By tailoring our Farm Capital Loan to your exact requirements, we’ll help provide the funds you need. You can obtain finance for any legitimate business purpose, including:  
                        </p>

                        <div>
                            <div class="flex items-start my-5">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-brand mr-1.5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>

                                <article>
                                    <p>
                                        <span class="font-medium">Direct farm investment</span> – such as an investment in capital equipment or purchase of more land to expand operations.
                                    </p>
                                </article>
                            </div>
                            <div class="flex items-start my-5">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-brand mr-1.5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>

                                <article>
                                    <p>
                                        <span class="font-medium">Diversification</span> – if you’re looking to branch out into new areas such as a farm shop.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </article>

                    <article class="my-5">
                        A considerable proportion of our customers come from repeat or recommended sources. Come talk to us, we are straight forward to deal with and speak farming.  
                    </article>
                </div>

                <div class="pl-10 pt-5">
                    <img src="@/assets/agricLoan.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>