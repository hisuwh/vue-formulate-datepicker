# vue-formulate-datepicker
[![vue-formulate-datepicker](https://badgen.net/npm/v/vue-formulate-datepicker?color=blue)](https://www.npmjs.com/package/vue-formulate-datepicker)

## Installation
npm 

`npm install vue-formulate-datepicker`

yarn

`yarn add vue-formulate-datepicker`

## Usage 
Add this to your main.js
```javascript
import VueFormulateDatepickerPlugin from "vue-formulate-datepicker";
// Add styles if need
import "@sum.cumo/vue-datepicker/dist/Datepicker.css";

Vue.use(VueFormulate, {
  plugins: [VueFormulateDatepickerPlugin]
});
```

```vue
<template>
    <FormulateInput
          language="fr"
          name="date"
          type="datepicker"
          v-model="date"
    >
    </FormulateInput>
</template>

<script>

export default {
  name: 'Example',
  data() {
    return {
      date: new Date(),
    }
  },
}
</script>

```
[Documentation](https://github.com/sumcumo/vue-datepicker)
