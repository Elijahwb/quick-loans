<script>
export default {
    name: 'core-component'
}
</script>

<script setup>
import Landing from '@/landing/content'
import navFunctions from '@/landing/components/header/nav-composable'

const { handleScroll } = navFunctions();

document.addEventListener('scroll', handleScroll);
</script>

<template>
    <Landing />
</template>