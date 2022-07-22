<script>
import router from '@/router'


export default {
    name: "button-component",

    props: {
        label: String,

        transparent: {
            type: Boolean,
            default: false,
        },

        routeString: {
            type: String,
            default: null,
        },
    },

    methods: {
        goTo() {
            if (this.routeString !== null) router.push(this.routeString)
        }
    }

}
</script>


<template>
    <button @click="goTo" :class="{'bg-brand-500': !transparent, 'bg-transparent text-brand-500 hover:text-white hover:bg-brand-500': transparent}" class="border-[1.6px] border-brand-500 overflow-hidden py-1 px-5 rounded-md">{{label}}</button>
</template>