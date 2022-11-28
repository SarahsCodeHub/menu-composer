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
                                <slot name="header"></slot>
                            </div>
                            <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                                <slot name="content"></slot>
                            </div>
                        </div>
                        <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                            <slot name="bottom"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "ui-modal",
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeModal() {
            this.$emit('close-modal')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>