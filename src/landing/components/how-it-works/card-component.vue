<script>
export default {
    props: [
        'cardNumber',
        'heading'
    ]
}
</script>

<template>
    <div class="text-center flex flex-col items-center justify-center w-[397px] bg-white lg:p-3 2xl:p-5">
        <div class="lg:w-[60px] 2xl:w-[80px] lg:h-[60px] 2xl:h-[80px] rounded-full bg-brand-500 text-white lg:text-[1.5rem] 2xl:text-[1.875rem] flex items-center justify-center">
            {{cardNumber}}
        </div>

        <div class="lg:text-[1.5rem] 2xl:text-[1.875rem] text-highlight lg:my-5 2xl:my-6">{{heading}}</div>

        <div class="lg:text-[1.2rem] 2xl:text-[1.5625rem] text-[#768599]">
            Lorem ipsum dolor sit amet, sit amet, consectetur adipiscing elit, sed dor
        </div>
    </div>
</template>