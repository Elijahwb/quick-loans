<script>
import ImagesSection from '@/landing-page/components/about/images-section.vue'

export default {
    components: { ImagesSection }
}
</script>

<template>
    <section>
        <div class="container grid grid-cols-2 gap-5 py-10">
            <div>
                <div class="sub-header-text"><span class="text-brand underline">About</span> Eleglance Finance</div>

                <article class="text-pale">
                    <p class="my-10">
                        EFL is a Financial Services Company delivering benefits of financial services tailored to SMEs and Individuals. Our financial services are also tailored to the needs of essential workers.
                    </p>

                    <p class="my-10">
                        EFL offers a mix of loan products, including individual loans, voluntary savings, mobile money transfers, micro insurance and business advisory services tailored to the needs of its clients. 
                    </p>

                    <p class="my-10">
                        We are professional, accountable, passionately driven by the belief that every Ugandan should have quick access to high quality and reliable financial services.
                    </p>
                </article>
            </div>

            <images-section class="lg:h-[40vh]" />
        </div>
    </section>
</template>