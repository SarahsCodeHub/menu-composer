<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <transition enter-class="ease-out duration-300" enter-from-class="opacity-0" enter-to-class="opacity-100"
            leave-class="ease-in duration-200" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-if="show" class="fixed inset-0 bg-gray-500 bg-opacity-60 transition-opacity"></div>
        </transition>
        <transition enter-class="ease-out duration-300"
            enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100" leave-class="ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">

            <div v-if="show" class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div
                        class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                        <div class="overflow-hidden">
                            <div class="px-4 pt-2 pb-5 sm:px-6">
                                <div class="absolute top-0 right-0 hidden pt-6 pr-6 sm:block">
                                    <button type="button"
                                        class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        @click="closeModal">
                                        <span class="sr-only">Modal schließen</span>
                                        <svg class="h-6 w-6" x-description="Heroicon name: outline/x-mark"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M6 18L18 6M6 6l12 12">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                <h3 class="text-lg font-medium leading-6 text-gray-900">{{ dish.name }}</h3>
                                <p class="mt-1 max-w-2xl text-sm text-gray-500">{{ dish.shortDescription }}</p>
                                <div class="mt-3">
                                    <diet-label v-for="diet in dish.dietCategories" :key="diet" :diet="diet">
                                    </diet-label>
                                </div>
                            </div>
                            <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                                <dl class="sm:divide-y sm:divide-gray-200">
                                    <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-500">
                                            {{ 'category' | translatedDishProperties }}
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                            {{ dish.category | translatedCategories }}
                                        </dd>
                                    </div>
                                    <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-500">
                                            {{ 'availableMealtimes' | translatedDishProperties }}
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                            <span v-for="meal in dish.availableMealtimes" :key="meal">
                                                {{ meal | translatedMealtimes }}<br />
                                            </span>
                                        </dd>
                                    </div>
                                    <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-500">
                                            {{ 'availableDayCategory' | translatedDishProperties }}
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                            {{ dish.availableDayCategory | translatedDayCategories }}
                                        </dd>
                                    </div>
                                    <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-500">
                                            {{ 'preparationTimeInMinutes' | translatedDishProperties }}
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                            {{ dish.preparationTimeInMinutes | minutes }}
                                        </dd>
                                    </div>
                                    <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-500">
                                            {{ 'priceInEuro' | translatedDishProperties }}
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                            {{ dish.priceInEuro | currency }}
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                            <button type="button"
                                class="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                                @click="addDishToMenu">Zum Menü hinzufügen</button>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import DietLabel from "./DietLabel.vue";

export default {
    name: "dish-detail-modals",
    components: {
        DietLabel,
    },
    props: {
        dish: {
            type: Object,
            default: () => { }
        },
        show: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        listedDetails() {
            const detailsToBeListed = ['availableDayCategory', 'availableMealtimes', 'category'];
            let listedDetails = {}
            detailsToBeListed.map(detail => listedDetails[detail] = this.dish[detail]);
            return listedDetails;
        }
    },
    methods: {
        closeModal() {
            this.$emit('close-modal')
        },
        addDishToMenu() {
            this.$emit('add-dish', this.dish.id)
            this.closeModal()
        }
    }
}
</script>

<style lang="scss" scoped>

</style>