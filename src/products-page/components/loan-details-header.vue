<script>
export default {
    props: [
        'headerText'
    ],

    setup() {
        const removeFirstWord = (str) => {
            const indexOfSpace = str.indexOf(' ');

            if (indexOfSpace === -1) {
                return '';
            }

            return str.substring(indexOfSpace + 1);
        }

        return {
            removeFirstWord
        }
    },
}
</script>

<template>
    <div class="header-text text-highlight"><span class="text-brand">{{headerText.split(' ')[0]}}</span> {{removeFirstWord(headerText)}}</div>
</template>