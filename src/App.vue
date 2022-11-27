<template>
  <div id="app" class="min-h-full">
    <main class="-mt-24 pb-8">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 class="sr-only">Menu Composer</h1>
        <!-- Main 3 column grid -->
        <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-8">
          <!-- Left column -->
          <div class="grid grid-cols-1 gap-4">
            <dish-list :dishes="reactiveAvailablesDishes" :categories="categories">
            </dish-list>
          </div>

          <!-- Right column -->
          <div class="grid grid-cols-1 gap-4">
            <menu-selection :dishes="selectedDishes" :categories="categories"></menu-selection>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import DishList from "./components/DishList.vue";
import MenuSelection from "./components/MenuSelection.vue";
// import { DayCategory } from "./enums/DayCategory.enum";
// import { DishCategory } from "./enums/DishCategory.enum";
// import { Mealtime } from "./enums/Mealtime.enum";
// import { Dish } from "./interfaces/dish.interface"

let availableDishes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    shortDescription: "Feine Spaghetti mit Carbonara-Soße, der Klassiker aus Italien",
    priceInEuro: 12.00,
    dietCategory: [],
    category: "MAINCOURSE",
    availableMealtimes: ["Mealtime.LUNCH", "Mealtime.DINNER"],
    availableDays: "DayCategory.ALLDAYS",
    active: true,
    preparationTimeInMinutes: 15.00
  },
  {
    id: 2,
    name: "Cacio e Pepe",
    shortDescription: "Toskanische Pici mit Pecorino und schwarzem Pfeffer, zurück in der Toskana-Urlaub",
    priceInEuro: 14.00,
    dietCategory: ["vegetarisch"],
    category: "MAINCOURSE",
    availableMealtimes: ["Mealtime.LUNCH", "Mealtime.DINNER"],
    availableDays: "DayCategory.ALLDAYS",
    active: true,
    preparationTimeInMinutes: 15.00
  },
  {
    id: 3,
    name: "Profiteroles",
    shortDescription: "Feinste Windbeutelchen in dunkler Schokoladensoße",
    priceInEuro: 7.00,
    dietCategory: ["vegetarisch"],
    category: "DESSERT",
    availableMealtimes: ["Mealtime.LUNCH", "Mealtime.DINNER"],
    availableOnDayCategories: "DayCategory.ALLDAYS",
    active: true,
    preparationTimeInMinutes: 5.00
  },
  {
    id: 4,
    name: "Pannacotta",
    shortDescription: "Pannacotta mit echter Bourbon-Vanille garniert mit Waldfrüchten",
    priceInEuro: 7.50,
    dietCategory: ["glutenfrei"],
    category: "DESSERT",
    availableMealtimes: ["Mealtime.LUNCH", "Mealtime.DINNER"],
    availableDays: "DayCategory.ALLDAYS",
    active: true,
    preparationTimeInMinutes: 5.00
  },
  {
    id: 5,
    name: "Saltimbocca",
    shortDescription: "Saltimbocca heißt \"Spring in den Mund\" und bezeichnet einen italienischen Küchenklassiker aus feinem Kalbfleisch, luftgetrocknetem Schinken und Salbeiblättern.",
    priceInEuro: 18.00,
    dietCategory: ["glutenfrei"],
    category: "MAINCOURSE",
    availableMealtimes: ["Mealtime.DINNER"],
    availableDays: "DayCategory.ALLDAYS",
    active: true,
    preparationTimeInMinutes: 18.00
  },
  {
    id: 6,
    name: "Zuppa di Pesce",
    shortDescription: "Italienische Fischsuppe mit Riesengarnelen, Muscheln und Kabeljau.",
    priceInEuro: 24.00,
    dietCategory: ["laktosefrei", "glutenfrei"],
    category: "MAINCOURSE",
    availableMealtimes: ["Mealtime.DINNER"],
    availableDays: "DayCategory.WEEKENDS",
    active: true,
    preparationTimeInMinutes: 18.00
  },
  {
    id: 7,
    name: "Insalata Caprese",
    shortDescription: "Frische Tomate und Büffelmozzarella mit Basilikum",
    priceInEuro: 7.00,
    dietCategory: ["vegetarisch", "glutenfrei"],
    category: "STARTER",
    availableMealtimes: ["Mealtime.DINNER", "Mealtime.DINNER"],
    availableDays: "DayCategory.ALLDAYS",
    active: true,
    preparationTimeInMinutes: 10.00
  },
  {
    id: 8,
    name: "Vitello Tonnato",
    shortDescription: "Hauchdünn geschnittenes Kalbsfilet mit einer Soße aus Thunfisch, Kapern und Ei.",
    priceInEuro: 12.00,
    category: "STARTER",
    availableMealtimes: ["Mealtime.DINNER"],
    availableDays: "DayCategory.WEEKENDS",
    active: true,
    preparationTimeInMinutes: 8.00
  },
];

export default {
  name: "App",
  components: { DishList, MenuSelection },
  data() {
    return {
      reactiveAvailablesDishes: availableDishes,
      selectedDishes: [],
      inWork: true
    };
  },
  computed: {
    categories() {
      return {
        STARTER: "Vorspeise",
        MAINCOURSE: "Hauptspeise",
        DESSERT: "Dessert",
        BEVERAGE: "Getränk",
      }
    },
  },
  mounted() {
  }
}
</script>