<script>
import Card from './card-component.vue'
export default {
    components: { Card }
}
</script>

<template>
    <div class="container lg:my-12 2xl:my-20 px-5">
        <div class="lg:text-[2.3rem] 2xl:text-[2.8125rem] text-highlight text-center mb-10">How it works</div>

        <div class="grid grid-cols-3 gap-10">
            <Card heading="Apply for loan" cardNumber="01" />
            <Card heading="Application review" cardNumber="02" />
            <Card heading="Get funding" cardNumber="03" />
        </div>
    </div>
</template>