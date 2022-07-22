<script>
import Intro from './intro.vue'
import HomeSlider from './home-slider.vue'

export default {
    name: 'header-component',
    components: {
        Intro,
        HomeSlider,
    }
}
</script>

<template>
    <div class="intro-container h-[90vh] lg:h-[85vh] 2xl:h-[75vh] relative">
        <div class="absolute top-0 bottom-0 left-0 right-0">
            <home-slider />
        </div>

        <div class="absolute top-0 bottom-0 left-0 right-0 bg-black/50">
            <div class="h-full">
                <Intro />
            </div>
        </div>
    </div>
</template>

<style scoped>
.intro-container {
    background: url('./assets/group.jpg');
    background-size: cover;
    background-position: center;
}
</style>