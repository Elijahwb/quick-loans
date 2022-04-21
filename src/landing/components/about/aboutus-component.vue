<script>
import ImageSection from './images-section.vue'
import InfoSection from './info-section.vue'

export default {
    components: { ImageSection, InfoSection, }
}
</script>

<template>
    <div class="lg:p-2.5 2xl:p-5 lg:mt-[13rem] 2xl:mt-[17rem] mb-20">
        <div class="container grid grid-cols-2">
            <ImageSection />
            <InfoSection />
        </div>
    </div>
</template>