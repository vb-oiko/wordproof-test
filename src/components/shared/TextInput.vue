<template>
  <div class="border border-gray-800 rounded relative p-2">
    <label
      for="price"
      class="block text-sm font-medium text-indigo-700 bg-white px-2 absolute -top-3 left-3"
      >{{ label }}</label
    >
    <input
      type="text"
      name="price"
      id="price"
      class="px-2 pb-1 pt-2 block w-full focus:outline-none text-gray-800"
      :placeholder="placeholder"
      v-model="inputValue"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TextInput",

  props: {
    value: { type: String, required: true },
    label: { type: String, default: "" },
    placeholder: { type: String, default: "" },
  },

  data() {
    return {
      inputValue: this.value,
    };
  },
});
</script>
