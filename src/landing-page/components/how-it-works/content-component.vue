<script>
import Card from './card-component.vue'
export default {
    components: { Card }
}
</script>

<template>
    <div class="container pt-5 lg:pt-0 lg:mb-12 2xl:my-20 px-5">
        <div class="text-highlight sub-header-text text-center mt-5 mb-10 font-bold"><span class="text-brand underline">How</span> it works</div>

        <div class="grid lg:grid-cols-3 gap-5 lg:gap-20">
            <Card heading="Apply for loan" cardNumber="01" content="Simply, run the loan calculations, fill-in the required forms and submit" />
            <Card heading="Application review" cardNumber="02" content="Assessment begins and we  validate your request. And the loan processing is begun" />
            <Card heading="Get funding" cardNumber="03" content="Get your funding within 48 hours from first contact and 24 hours for repeat clients" />
        </div>
    </div>
</template>