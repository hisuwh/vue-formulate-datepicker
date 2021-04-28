<template>
  <datepicker
    :class="`formulate-input-element formulate-input-element--${context.type}`"
    :data-type="context.type"
    v-model="context.model"
    :options="context.options"
    v-bind="context.attributes"
    :language="languages[context.attributes.language]"
  />
</template>

<script>
import Datepicker from "@sum.cumo/vue-datepicker";
import * as lang from "vuejs-datepicker/src/locale";
import "@sum.cumo/vue-datepicker/dist/Datepicker.css";

export default {
  name: "VueFormulateDatapicker",
  props: {
    context: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      languages: lang,
    };
  },
  components: { Datepicker },
  methods: {},
};
</script>
