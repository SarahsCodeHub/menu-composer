<template>
    <ui-modal :showModal="showModal" @close-modal="closeModal">
        <template slot="header">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Neues Gericht</h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">Geben Sie hier alle benötigten Informationen zum Gericht an.
            </p>
        </template>
        <template slot="content">
            <form>
                <div class=" space-y-6 sm:space-y-5">
                    <div
                        class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5 sm:pl-6 sm:border-t sm:border-gray-200">
                        <label for="name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Name</label>
                        <div class="mt-1 sm:col-span-2 sm:mt-0">
                            <input v-model="dish.name" type="text" name="name" id="name"
                                class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm" />
                        </div>
                    </div>
                    <div
                        class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5 sm:pl-6 sm:border-t sm:border-gray-200">
                        <label for="shortDescription"
                            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Kurzbeschreibung</label>
                        <div class="mt-1 sm:col-span-2 sm:mt-0">
                            <textarea v-model="dish.shortDescription" name="shortDescription" id="shortDescription"
                                rows="4" cols="50"
                                class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm" />
                        </div>
                    </div>
                    <div
                        class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5 sm:pl-6 sm:border-t sm:border-gray-200">
                        <label for="priceInEuro" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Preis
                            in Euro</label>
                        <div class="mt-1 sm:col-span-2 sm:mt-0">
                            <input v-model="dish.priceInEuro" type="number" name="priceInEuro" id="priceInEuro" min="0"
                                step="0.5"
                                class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm" />
                        </div>
                    </div>
                    <div
                        class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5 sm:pl-6 sm:border-t sm:border-gray-200">
                        <label for="category"
                            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Kategorie</label>
                        <div class="mt-1 sm:col-span-2 sm:mt-0">
                            <select id="category" name="category" v-model="dish.category"
                                class="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <option v-for="(value, key) in categories" :key="key" :value="key">
                                    {{ value }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div
                        class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5 sm:pl-6 sm:border-t sm:border-gray-200">
                        <label for="dietCategories"
                            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Ernährungsform</label>
                        <fieldset class="mt-1 sm:col-span-2 sm:mt-0 grid grid-cols-2 gap-x-5 gap-y-2">
                            <legend class="sr-only">Ernährungsform</legend>
                            <div v-for="(value, key) in dietCategories" :key="key"
                                class="relative flex items-start mb-1">
                                <div class="flex h-5 items-center">
                                    <input :id="key" :name="key" type="checkbox" :value="value"
                                        v-model="dish.dietCategories"
                                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                </div>
                                <div class="ml-3 text-sm">
                                    <label :for="key" class="font-medium text-gray-700">{{ value }}</label>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div
                        class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5 sm:pl-6 sm:border-t sm:border-gray-200">
                        <label for="dietCategories"
                            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Mahlzeiten</label>
                        <fieldset class="mt-1 sm:col-span-2 sm:mt-0 grid grid-cols-2 gap-x-5 gap-y-2">
                            <legend class="sr-only">Mahlzeiten</legend>
                            <div v-for="(value, key) in mealtimes" :key="key" class="relative flex items-start mb-1">
                                <div class="flex h-5 items-center">
                                    <input :id="key" :name="key" type="checkbox" :value="value"
                                        v-model="dish.availableMealtimes"
                                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                </div>
                                <div class="ml-3 text-sm">
                                    <label :for="key" class="font-medium text-gray-700">{{ value }}</label>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div
                        class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5 sm:pl-6 sm:border-t sm:border-gray-200">
                        <label for="dayCategories"
                            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Erhältlich</label>
                        <fieldset class="mt-1 sm:col-span-2 sm:mt-0 grid grid-cols-2 gap-x-5 gap-y-2">
                            <legend class="sr-only">Erhältlich an Tagen</legend>
                            <div v-for="(value, key) in dayCategories" :key="key"
                                class="relative flex items-start mb-1">
                                <div class="flex h-5 items-center">
                                    <input :id="key" :name="key" type="radio" :value="value"
                                        v-model="dish.availableDayCategory"
                                        class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                </div>
                                <div class="ml-3 text-sm">
                                    <label :for="key" class="font-medium text-gray-700">{{ value }}</label>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div
                        class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5 sm:pl-6 sm:border-t sm:border-gray-200">
                        <label for="preparationTimeInMinutes"
                            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Zubereitungszeit in
                            Minuten</label>
                        <div class="mt-1 sm:col-span-2 sm:mt-0">
                            <input v-model="dish.preparationTimeInMinutes" type="number" name="preparationTimeInMinutes"
                                id="preparationTimeInMinutes" min="1" step="1"
                                class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm" />
                        </div>
                    </div>
                    <div
                        class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5 sm:pl-6 sm:border-t sm:border-gray-200">
                        <label for="dietCategories"
                            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-1">Status</label>
                        <fieldset class="mt-1 sm:col-span-2 sm:mt-0 grid grid-cols-2 gap-x-5 gap-y-2">
                            <legend class="sr-only">Status</legend>
                            <div class="relative flex items-start mb-1 mt-1">
                                <div class="flex h-5 items-center">
                                    <input id="active" name="active" type="checkbox" value="true" v-model="dish.active"
                                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="active" class="font-medium text-gray-700">Aktiv</label>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </form>
        </template>
        <template slot="bottom">
            <button type="button"
                class="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                @click="saveDish">Speichern</button>
        </template>
    </ui-modal>
</template>

<script>
import { mealtimes, dietCategories, categories, dayCategories } from "../../utils/translations";
import UiModal from "../Ui/UiModal.vue";

export default {
    name: "dish-add",
    components: {
        UiModal
    },
    props: {
        showModal: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            dish: {
                name: null,
                shortDescription: null,
                priceInEuro: null,
                dietCategories: [],
                category: null,
                availableMealtimes: [],
                availableDayCategory: null,
                active: true,
                preparationTimeInMinutes: null
            }
        }
    },
    computed: {
        mealtimes() {
            return mealtimes
        },
        dietCategories() {
            return dietCategories
        },
        categories() {
            return categories
        },
        dayCategories() {
            return dayCategories
        }
    },
    methods: {
        closeModal() {
            this.$emit('close-modal');
        },
        saveDish() {
            this.$emit('add-dish', this.dish);
            this.closeModal();
        }
    }
}
</script>