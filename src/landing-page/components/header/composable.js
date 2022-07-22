import { computed, provide, ref } from "vue"

export default function useSliderFunctions () {
    const slides = ref([])
    const activeSlideIndex = ref(0)
    const loans = [
        {
            loan: 'Salary',
            link: '/salary-loan'
        },
        {
            loan: 'Business',
            link: '/business-loan'
        },
        {
            loan: 'Agricultural',
            link: '/agricultural-loan'
        },
        {
            loan: 'Daily',
            link: '/daily-interest-loan'
        },
        {
            loan: 'SchoolFees',
            link: '/school-fees-loan'
        },
    ]
    const activeLoan = computed(() => loans[activeSlideIndex.value])
    let numberOfSlides = 0


    const initiateSliderFunctions = () => {
        slides.value = document.querySelectorAll('.slide')

        numberOfSlides = slides.value.length

        slides.value[0].classList.add('active')

        setTimeout(() => {
            setInterval(() => nextSlide(), 4000)
        }, 4000)

        console.log('Finished initiating the slider')

    }

    const removeActiveClass = () => slides.value.forEach((slide) => slide.classList.remove('active'))

    const nextSlide = () => {
        removeActiveClass()
        activeSlideIndex.value += 1

        if (activeSlideIndex.value < numberOfSlides) slides.value[activeSlideIndex.value].classList.add('active')

        else {
            activeSlideIndex.value = 0
            slides[activeSlideIndex.value].classList.add('active')
        }
    }

    provide('activeLoan', activeLoan)
    provide('activeSlideIndex', activeSlideIndex)
    provide('initiateSliderFunctions', initiateSliderFunctions)
}