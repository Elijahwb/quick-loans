<script>
import layoutComponent from '@/components/layout-component.vue'
import AboutusIntro from './intro.vue'

export default {
	components: { layoutComponent, AboutusIntro },
    name: 'about-page',
}
</script>

<template>
    <layout-component>
        <aboutus-intro />
    </layout-component>
</template>