<template>
    <div id="app" class="min-h-full">
        <main class="-mt-24 pb-8">
            <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 class="sr-only">Menu Composer</h1>
                <!-- Main 3 column grid -->
                <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-8">
                    <!-- Left column -->
                    <div class="grid grid-cols-1 gap-4">
                        <dish-list id="options" :dishes="availableDishes" :categories="categories"
                            :listType="'options'">
                        </dish-list>
                    </div>

                    <!-- Right column -->
                    <div class="grid grid-cols-1 gap-4">
                        <dish-list id="menu" :dishes="selectedDishes" :categories="categories" :listType="'selection'">
                        </dish-list>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios'
import { categories as staticCategories } from "./utils/translations.js"
import eventBus from './utils/eventBus'
import DishList from "./components/Dish/List.vue";

export default {
    name: "App",
    components: { DishList },
    data() {
        return {
            availableDishes: [],
            selectedDishes: [],
        };
    },
    computed: {
        categories() {
            return staticCategories
        },
    },
    methods: {
        addDishToMenu(newDish) {
            let dishIndex = this.selectedDishes.findIndex(dish => dish.id === newDish.id)
            if (dishIndex !== -1) {
                return;
            } else {
                this.selectedDishes.push(newDish)
            }
        },
        removeDishFromMenu(dishId) {
            this.selectedDishes = this.selectedDishes.filter(dish => (dish.id !== dishId))
        },
        updateDishes(updatedDish) {
            let dishIndex = this.availableDishes.findIndex(dish => dish.id === updatedDish.id)
            if (dishIndex === -1) {
                this.availableDishes.push(updatedDish)
            } else {
                this.selectedDishes[dishIndex] = updatedDish
            }
        },
        async fetchDishes() {
            await axios.get('http://localhost:9000/dishes')
                .then((response) => {
                    this.availableDishes = response.data.data
                })
                .catch(error => console.log(error))
        }
    },
    async mounted() {
        eventBus.$on("add-dish-to-menu", (dish) => {
            this.addDishToMenu(dish)
        })
        eventBus.$on("remove-dish-from-menu", (dishId) => {
            this.removeDishFromMenu(dishId)
        })
        eventBus.$on("saved-dish", (dish) => {
            this.updateDishes(dish)
        })
        await this.fetchDishes();
    },
    beforeDestroy() {
        eventBus.$off("add-dish-to-menu")
        eventBus.$off("remove-dish-from-menu")
    }
}
</script>