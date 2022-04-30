<script>
import layoutComponent from '@/components/layout-component.vue'
import HowitWorks from '@/landing-page/components/how-it-works/content-component.vue'
import FrequentQuestions from '@/landing-page/components/questions/content-component.vue'
import ProductsIntro from '@/products-page/intro.vue'
import LoanDetails from './business-loan-details.vue'
import LoanDescription from '@/products-page/components/loan-description.vue'
import BusinessLoanFeatures from './business-loan-features.vue'
import QualificationSection from './qualification-section.vue'

export default {
	components: { layoutComponent, ProductsIntro, HowitWorks, FrequentQuestions, LoanDetails, LoanDescription, BusinessLoanFeatures, QualificationSection },
    name: 'about-page',
}
</script>

<template>
    <layout-component>
        <products-intro />
        <loan-details />
        <loan-description>
            Small &amp; Medium Enterprises also referred to as the informal economy employ over 70% of Uganda’s total work force outside small scale agriculture
        </loan-description>
        <business-loan-features />
        <qualification-section/>
        <howit-works />
        <frequent-questions />

    </layout-component>
</template>