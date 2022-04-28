<script>
export default {
    name: 'core-component'
}
</script>

<script setup>
import navFunctions from '@/components/nav-composable'

const { handleScroll } = navFunctions();

document.addEventListener('scroll', handleScroll);
</script>

<template>
    <router-view />
</template>