<script>
export default {
    name: 'core-component'
}
</script>

<script setup>
import Landing from '@/landing/content'
import navFunctions from '@/landing/components/header/nav-composable'

navFunctions();
</script>

<template>
    <Landing />
</template>