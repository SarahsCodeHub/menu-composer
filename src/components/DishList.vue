<template>
    <div class="overflow-hidden rounded-md bg-white shadow">
        <section v-for="(categoryName, categoryKey) in categories" :key="categoryKey" class="px-6 pb-6"
            :id="categoryKey" :aria-labelledby="categoryKey">
            <h2 class="sr-only" :id="`section-${categoryKey}-title`">{{ categoryKey | translatedCategories }}</h2>
            <div class="relative">
                <div class="p-6">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center">
                        <span class="bg-white px-3 text-lg font-medium text-gray-900">
                            {{ categoryKey | translatedCategories }}
                        </span>
                    </div>
                </div>
            </div>
            <div v-if="!categorizedDishes[categoryKey]" class="font-light text-center text-grey">
                {{ placeholderForEmptyCategories }}
            </div>
            <div v-for="dish in categorizedDishes[categoryKey]" :key="dish.id">
                <dish-card :dish="dish" @add-dish="addDish" @remove-dish="removeDish"></dish-card>
            </div>
        </section>
    </div>
</template>

<script>
import DishCard from "./DishCard.vue";

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