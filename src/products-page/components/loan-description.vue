<template>
    <section>
        <div class="bg-gradient-to-b from-black/50 to-brand-500/70 text-white my-5 lg:my-10">
            <div class="container px-5 lg:px-0 py-3 lg:py-5">
                <slot />
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    background: url('@/assets/close-up-businessman-with-digital-tablet 4.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    background-origin: bottom;
}
</style>