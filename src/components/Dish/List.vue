<template>
    <div class="overflow-hidden rounded-md bg-white shadow">
        <div class=" bg-white px-4 pt-8 pb-2 sm:px-6">
            <div class="-ml-4 -mt-2 text-center relative">
                <div class="ml-4 mt-2">
                    <h2 class="text-xl font-bold leading-6 text-gray-900">{{ listType === 'selection' ?
                            'Speisekarte'
                            : 'Verfügbare Gerichte'
                    }}</h2>
                </div>
                <div v-if="listType === 'options'" class="absolute right-0 top-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <!-- <button type="button"
                        class="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Gericht hinzufügen</button> -->
                </div>
            </div>
        </div>
        <section v-for="(categoryName, categoryKey) in categories" :key="categoryKey" class="px-6" :id="categoryKey"
            :aria-labelledby="categoryKey">
            <h2 class="sr-only" :id="`section-${categoryKey}-title`">{{ categoryKey | translatedCategories }}</h2>
            <div class="relative">
                <div class="px-16 pt-6 pb-4">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex">
                        <span class="bg-white px-3 text-lg font-medium text-gray-900">
                            {{ categoryKey | translatedCategories }}
                        </span>
                    </div>
                </div>
            </div>
            <div v-if="!categorizedDishes[categoryKey]" class="font-light text-center text-grey px-6 pb-6">
                {{ placeholderForEmptyCategories }}
            </div>
            <div v-for="dish in categorizedDishes[categoryKey]" :key="dish.id">
                <dish-card :dish="dish" @add-dish="addDish" @remove-dish="removeDish"></dish-card>
            </div>
        </section>
    </div>
</template>

<script>
import DishCard from "./Card.vue";

export default {
    name: "dish-list",
    components: {
        DishCard,
    },
    props: {
        dishes: {
            type: Array,
            default: () => []
        },
        categories: {
            type: Object,
            default: () => { }
        },
        listType: {
            type: String,
            default: 'options'
        }
    },
    computed: {
        categorizedDishes() {
            let categorizedDishes = {};
            this.dishes.map((dish) => {
                categorizedDishes[dish.category] ? categorizedDishes[dish.category].push(dish) : categorizedDishes[dish.category] = [dish]

            })
            return categorizedDishes;
        },
        placeholderForEmptyCategories() {
            if (this.listType === 'selection') {
                return "-"
            } else {
                return "Es stehen leider keine Gerichte in dieser Kategorie zur Auswahl bereit."
            }
        }
    },
    methods: {
        addDish(dishId) {
            console.log(`Add Dish with id ${dishId}`)
        },
        removeDish(dishId) {
            console.log(`Remove Dish with id ${dishId}`)
        }
    },
    mounted() {
        console.log(this.categories);
    },
}
</script>