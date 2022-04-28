<script>
export default {
    props: [
        'cardNumber',
        'heading',
        'content',
    ]
}
</script>

<template>
    <div class="text-center rounded-md shadow-lg flex flex-col items-center justify-center 2xl:w-[397px] bg-white p-5 2xl:p-10">
        <div class="w-[40px] lg:w-[60px] 2xl:w-[80px] h-[40px] lg:h-[60px] 2xl:h-[80px] rounded-full bg-brand-500 text-white lg:text-[1.5rem] 2xl:text-[1.875rem] flex items-center justify-center">
            {{cardNumber}}
        </div>

        <div class="lg:text-[1.5rem] 2xl:text-[1.875rem] text-highlight my-2.5 lg:my-5 2xl:my-6">{{heading}}</div>

        <div class="lg:text-[1.2rem] 2xl:text-[1.5625rem] text-[#768599]">
            {{content}}
        </div>
    </div>
</template>