<script>
import ContactInfo from './contact-info.vue'
import ContactForm from './contact-form.vue'

export default {
    components: { ContactInfo, ContactForm, }
}
</script>

<template>
    <div class="container grid lg:grid-cols-2 gap-10 items px-5 py-5 lg:py-[3rem] 2xl:py-[6rem]">
        <ContactInfo />
        <ContactForm />
    </div>
</template>