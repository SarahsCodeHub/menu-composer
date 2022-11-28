<template>
    <li class="col-span-1 flex rounded-md shadow-sm mb-3">
        <div
            class="flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm font-medium rounded-l-md">
            {{ dish.preparationTimeInMinutes | minutes('short') }}</div>
        <div class="flex flex-1 items-center justify-between truncate border-t  border-b border-gray-200 bg-white">
            <div class="flex-1 truncate px-4 py-2 text-sm">
                <label :for="`dish-${dish.id}`" class="font-medium text-gray-900 hover:text-gray-600">
                    {{ dish.name }}
                </label>
                <p :id="`dish-${dish.id}-price`" class="text-gray-500">{{ dish.priceInEuro | currency }}</p>
            </div>
            <div class="flex-shrink-0 pr-2">
                <button type="button" @click="showDetails = !showDetails"
                    class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span class="sr-only">Zeige Details</span>
                    <!-- Heroicon name: mini/ellipsis-vertical -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>


                </button>
            </div>
        </div>
        <div
            class="flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-r-md border-t border-r border-b border-gray-200">
            <input v-model="checked" @change="addOrRemoveFromMenu" :id="dish.id" :name="dish.name" type="checkbox"
                class="h-4 w-4 rounded border-gray-400 text-purple-600 focus:ring-purple-500">
        </div>
        <dish-detail :show="showDetails" :dish="dish" @close-details="showDetails = false">
        </dish-detail>
    </li>
</template>

<script>
import DishDetail from './Detail.vue'
export default {
    name: "dish-card",
    components: {
        DishDetail,
    },
    props: {
        dish: {
            type: Object,
            default: () => { }
        },
    },
    data() {
        return {
            checked: false,
            showDetails: false
        }
    },
    methods: {
        addOrRemoveFromMenu() {
            if (this.checked) {
                this.$emit('add-dish', this.dish.id)
            } else {
                this.$emit('remove-dish', this.dish.id)
            }
        }
    }
}
</script>
