<template>
    <div class="overflow-hidden rounded-md bg-white shadow">
        <section v-for="(categoryName, categoryKey) in categories" :key="categoryKey" class="px-6 pb-6"
            :id="categoryKey" :aria-labelledby="categoryName">
            <h2 class="sr-only" id="section-1-title">{{ categoryName }}</h2>
            <div class="relative">
                <div class="p-6">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center">
                        <span class="bg-white px-3 text-lg font-medium text-gray-900">{{ categoryName }}</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'menu-selection',
    props: {
        dishes: {
            type: Array,
            default: () => []
        },
        categories: {
            type: Object,
            default: () => []
        }
    },
}
</script>

<style lang="scss" scoped>

</style>