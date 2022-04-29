<script>
import layoutComponent from '@/components/layout-component.vue'
import HowitWorks from '@/landing-page/components/how-it-works/content-component.vue'
import FrequentQuestions from '@/landing-page/components/questions/content-component.vue'
import AboutusIntro from './intro.vue'
import ProductsList from './products-list.vue'
import LoanDelivery from './loan-delivery.vue'

export default {
	components: { layoutComponent, AboutusIntro, HowitWorks, FrequentQuestions, ProductsList, LoanDelivery },
    name: 'about-page',
}
</script>

<template>
    <layout-component>
        <aboutus-intro />
        <products-list />
        <loan-delivery />
        <howit-works />
        <frequent-questions />

    </layout-component>
</template>