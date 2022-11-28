<template>

    <span class="inline-flex items-center mr-3 px-2.5 py-0.5 rounded-full text-xs font-medium  capitalize"
        :class="colorClasses">
        {{ diet }}
    </span>
</template>

<script>
export default {
    name: 'diet-label',
    props: {
        diet: {
            type: String,
            default: ''
        }
    },
    computed: {
        colorClasses() {
            switch (this.diet) {
                case 'vegan':
                    return 'bg-teal-100 text-teal-800'
                case 'vegetarisch':
                    return 'bg-lime-100 text-lime-800'
                case 'glutenfrei':
                    return 'bg-yellow-100 text-orange-800'
                case 'laktosefrei':
                    return 'bg-sky-100 text-sky-800'
                default:
                    return 'bg-grey-100 text-grey-800'
            }
        }
    },
}
</script>