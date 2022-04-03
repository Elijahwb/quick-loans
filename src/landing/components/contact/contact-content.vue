<script>
import ContactInfo from './contact-info.vue'
import ContactForm from './contact-form.vue'

export default {
    components: { ContactInfo, ContactForm, }
}
</script>

<template>
    <div class="container grid grid-cols-2 items py-[6rem]">
        <ContactInfo />
        <ContactForm />
    </div>
</template>