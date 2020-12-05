<template>
  <div
    v-if="show"
    class="fixed w-full h-full top-0 left-0 flex items-center justify-center"
  >
    <div
      class="absolute w-full h-full bg-gray-900 opacity-50 top-0 left-0 flex items-center justify-center"
    ></div>
    <div class="w-1/3 h-1/2 bg-white text-indigo-500 relative">
      <button
        class="text-indigo-500 flex justify-center mt-4 mr-4 absolute top-0 right-0 focus:outline-none"
        @click="onClose"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 357 357"
          fill="currentColor"
          class="w-4 h-4 self-center justify-self-center"
        >
          <path
            d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AddWebsiteModal",

  props: {
    show: { type: Boolean, required: true },
  },

  methods: {
    onClose() {
      this.$emit("close");
    },
  },
});
</script>
