<template>
    <header>
        <div class="h-full bg-black/50">
            <div class="container">
                <Nav />
            </div>
        </div>
    </header>
</template>

<script>
import Nav from './nav.vue'

export default {
    name: 'header-component',
    components: { Nav }
}
</script>

<style scoped>
header {
    background: url('./assets/group.jpg');
    background-size: cover;
    background-position: center;
    height: 770px;
}
</style>