const categories = {
    starter: "Vorspeise",
    maincourse: "Hauptspeise",
    dessert: "Dessert",
    beverage: "Getränk",
};

const dayCategories = {
    weekdays: "wochentags",
    weekends: "am Wochenende",
    alldays: "täglich",
};

const mealtimes = {
    breakfast:  "Frühstück",
    lunch:  "Mittagstisch",
    dinner : "Abendessen",
    alldaylong:  "ganztägig",
};

const dishProperties = {
    name: 'Name',
    category: 'Kategorie',
    availableMealtimes: 'Mahlzeiten',
    availableDayCategory: 'Erhältlich',
    active:'aktiv',
    preparationTimeInMinutes: 'Zubereitungszeit',
    priceInEuro: 'Preis'
}


export {
    categories,
    dayCategories,
    mealtimes,
    dishProperties
}