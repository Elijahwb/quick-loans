<script setup>
import { onMounted } from 'vue';

let slides = []
let numberOfSlides = 0
let activeSlideIndex = 0

onMounted(() => {
    slides = document.querySelectorAll('.slide')

    numberOfSlides = slides.length

    slides[0].classList.add('active')


    setTimeout(() => {
        setInterval(() => nextSlide(), 4000)
    }, 4000)

})

const removeActiveClass = () => slides.forEach((slide) => slide.classList.remove('active'))

const nextSlide = () => {
    removeActiveClass()
    activeSlideIndex += 1

    if (activeSlideIndex < numberOfSlides) slides[activeSlideIndex].classList.add('active')

    else {
        activeSlideIndex = 0
        slides[activeSlideIndex].classList.add('active')
    }
}

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
        
        <div class="slide" >
            <img src="@/assets/schoolFeesLoan.jpg" alt="">
        </div>
    </div>
</template>

<style scoped>
button {
    @apply bg-white text-brand px-4 py-1 mx-5;
}
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
