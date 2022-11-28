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
            let dishOnMenuWithSameId = [];
            dishOnMenuWithSameId = this.selectedDishes.filter(dish => dish.id === newDish.id)
            if (dishOnMenuWithSameId.length > 0) {
                return;
            } else {
                this.selectedDishes.push(newDish)
            }
        },
        removeDishFromMenu(dishId) {
            this.selectedDishes = this.selectedDishes.filter(dish => (dish.id !== dishId))
        },
        async fetchDishes() {
            const dishesResponse = await axios.get('http://localhost:9000/dishes')
                .catch(error => console.log(error))
            this.availableDishes = dishesResponse.data.data
        },
    },
    async mounted() {
        eventBus.$on("add-dish-to-menu", (dish) => {
            this.addDishToMenu(dish)
        })
        eventBus.$on("remove-dish-from-menu", (dishId) => {
            this.removeDishFromMenu(dishId)
        })
        await this.fetchDishes();
    },
    beforeDestroy() {
        eventBus.$off("add-dish-to-menu")
        eventBus.$off("remove-dish-from-menu")
    }
}
</script>