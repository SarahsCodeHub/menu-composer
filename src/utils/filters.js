import { categories, dayCategories, mealtimes, dishProperties } from "./translations"

const currency = (value) => {
    if (!value) return ''
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseFloat(value));
}

const minutes = (value, format = 'long') => {
    if (!value) return ''
    switch(format) {
        case 'short':
            return  value + '′';
        case 'long':
        default:
            return value + ' Minuten';

    }
}

const translatedCategories = (value) => {
    if (!value || !categories[value]) return ''
    return categories[value]
}

const translatedDayCategories = (value) => {
    if (!value || !dayCategories[value]) return ''
    return dayCategories[value]
}

const translatedMealtimes = (value) => {
    if (!value || !mealtimes[value]) return ''
    return mealtimes[value]
}

const translatedDishProperties = (value) => {
    if(!value) return ''
    return dishProperties[value]
} 

export {
    currency,
    minutes,
    translatedCategories,
    translatedDayCategories,
    translatedMealtimes,
    translatedDishProperties
}