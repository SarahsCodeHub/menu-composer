<template>
    <li class="col-span-1 flex rounded-md shadow-sm mb-3">
        <div
            class="flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm font-medium rounded-l-md">
            {{ dish.preparationTimeInMinutes }} min</div>
        <div class="flex flex-1 items-center justify-between truncate border-t  border-b border-gray-200 bg-white">
            <div class="flex-1 truncate px-4 py-2 text-sm">
                <label :for="`dish-${dish.id}`" class="font-medium text-gray-900 hover:text-gray-600">{{ dish.name
                }}</label>
                <p :id="`dish-${dish.id}-price`" class="text-gray-500">{{ dish.price }} €</p>
            </div>
            <div class="flex-shrink-0 pr-2">
                <button type="button"
                    class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span class="sr-only">Open options</span>
                    <!-- Heroicon name: mini/ellipsis-vertical -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true">
                        <path
                            d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                    </svg>
                </button>
            </div>
        </div>
        <div
            class="flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-r-md border-t border-r border-b border-gray-200">
            <input v-model="checked" @change="addOrRemoveFromMenu" :id="dish.id" :name="dish.name" type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500">
        </div>
    </li>
</template>

<script>
export default {
    name: "dish-card",
    props: {
        dish: {
            type: Object,
            default: () => { }
        },
    },
    data() {
        return {
            checked: false
        }
    },
    methods: {
        addOrRemoveFromMenu() {
            if (this.checked) {
                this.$emit('addDish', this.dish.id)
            } else {
                this.$emit('removeDish', this.dish.id)
            }
        }
    },
}
</script>

<style lang="scss" scoped>

</style>