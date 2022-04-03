<template>
<button class="bg-brand-500 py-1 px-5 rounded-full hover:opacity-90">{{label}}</button>
</template>

<script>

export default {
    name: "button-component",

    props: {
        label: String,
    },

}
</script>