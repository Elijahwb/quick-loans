<script>
import layoutComponent from '@/components/layout-component.vue'
import AboutusIntro from './intro.vue'
import CompanyVision from './company-vision.vue'
import CompanyMission from './company-mission.vue'
import FinancialDetails from './financial-details.vue'
import CultureStatement from './culture-statement.vue'
import CoreValues from './core-values.vue'
import CompanyHistory from './company-history.vue'

export default {
	components: { layoutComponent, AboutusIntro, CompanyVision, CompanyMission, FinancialDetails, CultureStatement, CoreValues, CompanyHistory },
    name: 'about-page',
}
</script>

<template>
    <layout-component>
        <aboutus-intro />
        <company-vision />
        <company-mission />
        <financial-details />
        <culture-statement />
        <core-values />
        <company-history />
    </layout-component>
</template>