<script>
export default {
    props: [
        'cardNumber',
        'heading'
    ]
}
</script>

<template>
    <div class="text-center flex flex-col items-center justify-center w-[397px] bg-white p-5">
        <div class="w-[80px] h-[80px] rounded-full bg-brand-500 text-white text-[30px] flex items-center justify-center">
            {{cardNumber}}
        </div>

        <div class="text-[30px] text-highlight my-6">{{heading}}</div>

        <div class="text-[25px] text-[#768599]">
            Lorem ipsum dolor sit amet, sit amet, consectetur adipiscing elit, sed dor
        </div>
    </div>
</template>