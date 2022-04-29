<script>
import ButtonComponent from '@/components/button'
export default {
    name: 'info-section',
    components: { ButtonComponent }
}
</script>

<template>
    <div class="lg:px-10 2xl:px-20">
        <div class="text-highlight sub-header-text font-bold"><span class="text-brand underline">Why</span> Choose Us?</div>

        <div class="my-4 lg:lg:my-8 2xl:my-10 text-pale">
            We are professional, accountable, passionately driven by the belief that every Ugandan should have quick access to high quality and reliable financial services.
        </div>

        <div class="lg:mt-8 2xl:my-10 text-pale">
            We offer credit in an affordable, straight forward and flexible way.
        </div>

        <div class="mt-1 lg:mt-2 mb-4 lg:mb-8 2xl:mb-10 text-pale">
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-brand mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>Loans with quick approval.</div>
            </div>
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-brand mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>Customize a loan based on the amount.</div>
            </div>
        </div>

        <div class="my-4 lg:my-8 2xl:my-10 text-pale">
            Typically we can deliver a loan within 48 hours from first contact and 24 hours for repeat clients. 
        </div>

        <div class="text-white">
            <button-component class="px-5" label="About us" />
        </div>
    </div>
</template>