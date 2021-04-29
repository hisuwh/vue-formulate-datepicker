import VueFormulateDatepicker from "./VueFormulateDatepicker.vue";

export default function VueFormulateDatepickerPlugin(formulateInstance) {
  formulateInstance.extend({
    components: {
      VueFormulateDatepicker,
    },
    library: {
      datepicker: {
        classification: "text",
        component: "VueFormulateDatepicker",
      },
    },
  });
}
