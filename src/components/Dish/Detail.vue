<template>
    <ui-modal :showModal="showModal" @close-modal="closeDetails">
        <template slot="header">
            <h3 class="text-lg font-medium leading-6 text-gray-900">{{ dish.name }}</h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">{{ dish.shortDescription }}</p>
            <div class="mt-3">
                <diet-label v-for="diet in dish.dietCategories" :key="diet" :diet="diet">
                </diet-label>
            </div>
        </template>
        <template slot="content">
            <dl class="sm:divide-y sm:divide-gray-200">
                <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6 sm:border-t sm:border-gray-200">
                    <dt class="text-sm font-medium text-gray-500">
                        {{ 'category' | translatedDishProperties }}
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        {{ dish.category | translatedCategories }}
                    </dd>
                </div>
                <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6 sm:border-t sm:border-gray-200">
                    <dt class="text-sm font-medium text-gray-500">
                        {{ 'availableMealtimes' | translatedDishProperties }}
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <span v-for="meal in dish.availableMealtimes" :key="meal">
                            {{ meal | translatedMealtimes }}<br />
                        </span>
                    </dd>
                </div>
                <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6 sm:border-t sm:border-gray-200">
                    <dt class="text-sm font-medium text-gray-500">
                        {{ 'availableDayCategory' | translatedDishProperties }}
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        {{ dish.availableDayCategory | translatedDayCategories }}
                    </dd>
                </div>
                <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6 sm:border-t sm:border-gray-200">
                    <dt class="text-sm font-medium text-gray-500">
                        {{ 'preparationTimeInMinutes' | translatedDishProperties }}
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        {{ dish.preparationTimeInMinutes | minutes }}
                    </dd>
                </div>
                <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6 sm:border-t sm:border-gray-200">
                    <dt class="text-sm font-medium text-gray-500">
                        {{ 'priceInEuro' | translatedDishProperties }}
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        {{ dish.priceInEuro | currency }}
                    </dd>
                </div>
            </dl>
        </template>
        <template slot="bottom">
            <button type="button"
                class="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                @click="addDishToMenu">Zum Menü hinzufügen</button>
        </template>
    </ui-modal>
</template>

<script>
import UiModal from "../Ui/UiModal.vue";
import DietLabel from "./DietLabel.vue";

export default {
    name: "dish-detail",
    components: {
        DietLabel,
        UiModal
    },
    props: {
        dish: {
            type: Object,
            default: () => { }
        },
        showModal: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeDetails() {
            this.$emit('close-details')
        },
        addDishToMenu() {
            this.$emit('add-dish-to-menu', this.dish);
            this.closeDetails()
        }
    }
}
</script>

<style lang="scss" scoped>

</style>