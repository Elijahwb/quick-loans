<template>
    <div class="intro-container h-[90vh] lg:h-[85vh] 2xl:h-[75vh]">
        <div class="h-full bg-black/50">
            <div class="h-full">
                <Intro />
            </div>
        </div>
    </div>
</template>

<script>
import Intro from './intro.vue'

export default {
    name: 'header-component',
    components: { Intro }
}
</script>

<style scoped>
.intro-container {
    background: url('./assets/group.jpg');
    background-size: cover;
    background-position: center;
}
</style>