<template>
  <div
    v-if="show"
    class="fixed w-full h-full top-0 left-0 flex items-center justify-center"
  >
    <div
      class="absolute w-full h-full bg-gray-900 opacity-50 top-0 left-0 flex items-center justify-center"
    ></div>
    <div class="w-96 bg-white text-indigo-700 relative rounded">
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

      <div class="mx-12 mt-10">
        <h2 class="font-black text-3xl text-indigo-700">Add website</h2>
        <text-input
          class="mt-4"
          v-model="websiteUrl"
          label="Website url"
          placeholder="wordproof.io"
        />
        <cms-select class="mt-4" v-model="cms" />
        <dropdown
          class="mt-6"
          :options="blockchainOptions"
          placeholder="Select the blockchain"
        />

        <button
          class="block outline:none focus:outline-none underline ml-auto mt-2"
          @click="isAdvancedSetup = !isAdvancedSetup"
        >
          Advanced setup
        </button>

        <text-input
          v-if="isAdvancedSetup"
          v-model="address"
          placeholder="Address"
          label="Address"
          class="mt-4"
        />
      </div>

      <button
        class="outline-none focus:outline-none block text-center w-full bg-gradient-to-r 
        from-violet-500 to-violet-400 text-violet-100 py-6 mt-8 font-semibold rounded-b"
      >
        Add website
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Dropdown from "@/components/shared/Dropdown.vue";
import TextInput from "@/components/shared/TextInput.vue";
import CmsSelect from "@/components/shared/CmsSelect.vue";
import { CMSType } from "@/types";

export default Vue.extend({
  name: "AddWebsiteModal",

  components: {
    Dropdown,
    TextInput,
    CmsSelect,
  },

  props: {
    show: { type: Boolean, required: true },
  },

  data() {
    return {
      blockchainOptions: [
        { value: 0, label: "EOS (recommended)" },
        { value: 1, label: "Telos" },
        { value: 2, label: "Ethereum" },
      ],
      websiteUrl: "",
      cms: "",
      isAdvancedSetup: false,
      address: "",
    };
  },

  methods: {
    onClose() {
      this.$emit("close");
    },
  },
});
</script>
