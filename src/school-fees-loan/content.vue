<script>
import layoutComponent from '@/components/layout-component.vue'
import HowitWorks from '@/landing-page/components/how-it-works/content-component.vue'
import FrequentQuestions from '@/landing-page/components/questions/content-component.vue'
import ProductsIntro from '@/products-page/intro.vue'
import LoanDetails from './salary-loan-details.vue'
import LoanDescription from '@/products-page/components/loan-description.vue'
import SalaryFeatures from './salary-features.vue'
import QualificationSection from './qualification-section.vue'

export default {
	components: { layoutComponent, ProductsIntro, HowitWorks, FrequentQuestions, LoanDetails, LoanDescription, SalaryFeatures, QualificationSection },
    name: 'about-page',
}
</script>

<template>
    <layout-component>
        <products-intro />
        <loan-details />
        <loan-description>
            Nothing is more important to you than securing Knowledge for yourself or your children. With our school fees loan you can secure a future by getting a loan and pay it later in manageable installments and help your children save for the future...
        </loan-description>
        <salary-features />
        <qualification-section/>
        <howit-works />
        <frequent-questions />

    </layout-component>
</template>