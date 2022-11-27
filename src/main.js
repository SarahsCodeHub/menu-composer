import Vue from 'vue'
import App from './App.vue'
import { currency, minutes, translatedCategories, translatedDayCategories, translatedMealtimes, translatedDishProperties } from "./utils/filters"

Vue.config.productionTip = false

Vue.filter('currency', currency);
Vue.filter('minutes', minutes);
Vue.filter('translatedCategories', translatedCategories);
Vue.filter('translatedDayCategories', translatedDayCategories);
Vue.filter('translatedMealtimes', translatedMealtimes);
Vue.filter('translatedDishProperties', translatedDishProperties);

new Vue({
  render: h => h(App),
}).$mount('#app')
