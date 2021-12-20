import Vue from "vue";
import Datepicker from "vuejs-datepicker";

if (process.client) {
  Vue.component("date-picker", Datepicker);
}
