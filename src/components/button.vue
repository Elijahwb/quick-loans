<template>
<button class="bg-brand-900 py-1 px-2 rounded hover:opacity-90">{{label}}</button>
</template>

<script>

export default {
    name: "button-component",

    props: {
        label: String,
    },

}
</script>