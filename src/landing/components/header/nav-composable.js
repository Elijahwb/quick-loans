import { provide, ref } from "vue";

export default function navFunctions() {
    const isMobileNav = ref(false);

    const showMobileMenu = () => isMobileNav.value = true;

    const hideMobileMenu = () => isMobileNav.value = false;

    provide('isMobileNav', isMobileNav);
    provide('showMobileMenu', showMobileMenu);
    provide('hideMobileMenu', hideMobileMenu);
}