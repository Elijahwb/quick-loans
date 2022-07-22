<script setup>
import { watch, ref, inject } from 'vue';

const lastSlide = ref(null)

const initiateSliderFunctions = inject('initiateSliderFunctions')

watch(lastSlide, () => {
    if (lastSlide.value !== null) {
        initiateSliderFunctions()
        console.log('All slides have been mounted')
    }
})

// onMounted(() => initiateSliderFunctions())

</script>

<template>
    <div class="slide-container h-full w-full relative">
        <div class="slide" >
            <img src="@/assets/salaryLoan.jpg" alt="">
        </div>

        <div class="slide" >
            <img src="@/assets/businessLoan.jpg" alt="">
        </div>

        <div class="slide" >
            <img src="@/assets/agricLoan.jpg" alt="">
        </div>

        <div class="slide" >
            <img src="@/assets/dailyLoan.jpeg" alt="">
        </div>
        
        <div ref="lastSlide" class="slide" >
            <img src="@/assets/schoolFeesLoan.jpg" alt="">
        </div>
    </div>
</template>

<style scoped>
.slide {
    @apply absolute top-0 bottom-0 left-0 right-0 z-[-1];
}

.slide.active {
    @apply z-[0];
    animation: fadeIn 500ms ease-in-out;
}

.slide img {
    @apply w-full h-full object-cover
}

.fade-in {
    animation: fadeIn 500ms ease-in-out;
}

.fade-out {
    animation: fadeOut 500ms ease-in-out forwards;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
