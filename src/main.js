import VueFormulateDatepicker from "./VueFormulateDatepicker.vue";

export default function VueFormulateDatepickerPlugin(formulateInstance) {
  formulateInstance.extend({
    components: {
      VueFormulateDatepicker,
    },
    library: {
      datepicker: {
        classification: "datepicker",
        component: "VueFormulateDatepicker",
      },
    },
  });
}
