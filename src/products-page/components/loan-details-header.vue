<script>
export default {
    props: [
        'headerText'
    ]
}
</script>

<template>
    <div class="header-text text-highlight"><span class="text-brand">{{headerText.split(' ')[0]}}</span> {{headerText.split(' ')[1]}}</div>
</template>