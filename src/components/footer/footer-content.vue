<template>
    <footer class="text-white">
        <div class="bg-gradient-to-r from-black/40 to-black/80 lg:py-6 2xl:py-12">
            <div class="container px-5 lg:px-0 py-5 grid lg:grid-cols-2">
                <div class="flex flex-col 2xl:items-center justify-center">
                    <div class="flex items-center">
                        <img class="w-[3rem]" src="./assets/logo.png" alt="">
                        <div class="company-name">Eleglance Finance</div>
                    </div>

                    <div class="lg:text-[1.2rem] 2xl:text-[1.5625rem] my-4 lg:my-6 font-light">
                        <div>
                            Providing Credit, Savings and Money transfer 
                            services to our customers in a simple and 
                            efficient way for mutual benefit.
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center my-6 lg:my-10">
                            <div class="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-brand-500/50">
                                <font-awesome-icon :icon="['fab', 'facebook']" />
                            </div>
                            <div class="w-[40px] ml-4 h-[40px] rounded-full flex items-center justify-center bg-brand-500/50">
                                 <font-awesome-icon :icon="['fab', 'twitter']" />
                            </div>
                            <div class="w-[40px] ml-4 h-[40px] rounded-full flex items-center justify-center bg-brand-500/50">
                                 <font-awesome-icon :icon="['fab', 'whatsapp']" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:text-[1.2rem] 2xl:text-[1.5625rem] flex flex-col lg:items-center">
                    <div class="font-bold mb-4">Quick Links</div>
                    <div class="font-light">
                        <div>About</div>
                        <div>Services</div>
                        <div>How it works</div>
                        <div>FAQ</div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background: url('./assets/footer1.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
}
</style>