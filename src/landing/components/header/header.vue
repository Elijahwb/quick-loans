<template>
    <header class="h-[770px]">
        <div class="h-full bg-black/50">
            <div class="h-full">
                <Nav />
                <Intro />
            </div>
        </div>
    </header>
</template>

<script>
import Nav from './nav.vue'
import Intro from './intro.vue'


export default {
    name: 'header-component',
    components: { 
        Nav,
        Intro,
    }
}
</script>

<style scoped>
header {
    background: url('./assets/group.jpg');
    background-size: cover;
    background-position: center;
}
</style>