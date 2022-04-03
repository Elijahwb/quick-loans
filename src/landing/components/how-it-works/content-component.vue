<script>
import Card from './card-component.vue'
export default {
    components: { Card }
}
</script>

<template>
    <div class="container my-20">
        <div class="text-[45px] text-highlight text-center mb-10">How it works</div>

        <div class="grid grid-cols-3 gap-10">
            <Card heading="Apply for loan" cardNumber="01" />
            <Card heading="Application review" cardNumber="02" />
            <Card heading="Get funding" cardNumber="03" />
        </div>
    </div>
</template>