const currency = (value) => {
    if (!value || typeof value != 'number') return ''
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value);
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

export {
    currency,
    minutes
}