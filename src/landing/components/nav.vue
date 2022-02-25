<template>
    <div class="w-full flex justify-between items-center py-4 text-white">

        <div class="flex items-center">
            <div class="w-9 h-9 mr-2 rounded bg-brand-900 flex items-center justify-center">
                <div class="h-7 w-7 border border-white rounded flex items-center justify-center">
                    <div class="h-5 w-5 border border-white rounded flex items-center justify-center">
                        <div class="h-3 w-3 border border-white rounded"></div>
                    </div>
                </div>
                
            </div>
            <div>CompanyLogo</div>
        </div>

        <div class="flex items-center text-sm">
            <div>Home</div>
            <div>Services</div>
            <div>About</div>
            <div>FAQ</div>
            <button class="bg-brand-900 py-1 px-2 rounded">Contact</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav-component',
}
</script>