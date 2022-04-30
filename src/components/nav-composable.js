import { provide, ref } from "vue";

export default function navFunctions() {
    const isSolidNavBg = ref(false);
    const isMobileNav = ref(false);

    const showMobileMenu = () => isMobileNav.value = true;

    const hideMobileMenu = () => isMobileNav.value = false;

    const handleScroll = () => {
        const scroll = document.documentElement.scrollTop || document.body.scrollTop
        if (scroll >= 100) isSolidNavBg.value = true

        else isSolidNavBg.value = false;
    }

    const handleNavClick = () => {
        document.getElementById('body').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
        setTimeout(() => hideMobileMenu(), 100)
    }

    provide('isMobileNav', isMobileNav);
    provide('isSolidNavBg', isSolidNavBg);
    provide('handleNavClick', handleNavClick);
    provide('showMobileMenu', showMobileMenu);
    provide('hideMobileMenu', hideMobileMenu);

    return {
        handleScroll
    }
}