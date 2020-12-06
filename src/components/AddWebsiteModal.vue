<template>
  <div
    v-if="show"
    class="fixed w-full h-full top-0 left-0 flex flex-col items-center justify-center"
  >
    <div
      class="absolute w-full h-full bg-gray-900 opacity-50 top-0 left-0 flex items-center justify-center"
      @click="onClose"
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
          v-model="websiteSettings.websiteUrl"
          label="Website url"
          placeholder="wordproof.io"
        />
        <cms-select class="mt-4" v-model="websiteSettings.cmsId" />
        <dropdown
          class="mt-6"
          :options="blockchainOptions"
          placeholder="Select the blockchain"
          v-model="websiteSettings.blockchainId"
        />

        <button
          class="block outline:none focus:outline-none underline ml-auto mt-2"
          @click="isAdvancedSetup = !isAdvancedSetup"
        >
          Advanced setup
        </button>

        <text-input
          v-if="isAdvancedSetup"
          v-model="websiteSettings.address"
          placeholder="Address"
          label="Address"
          class="mt-4"
        />
      </div>

      <button
        class="outline-none focus:outline-none block text-center w-full bg-gradient-to-r 
        from-violet-500 to-violet-400 text-violet-100 py-6 mt-8 font-semibold rounded-b"
        @click="onSuccess"
      >
        Add website
      </button>
    </div>

    <div class="w-96 bg-warning-200 z-10 rounded mt-2 flex p-6">
      <div
        class="w-9 h-6 rounded-full bg-warning-600 text-warning-900 text-center overflow-hidden leading-6"
      >
        i
      </div>
      <div class="flex-grow ml-4  text-warning-900">
        Advanced post type settings can be found in your CMS plugin.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Dropdown from "@/components/shared/Dropdown.vue";
import TextInput from "@/components/shared/TextInput.vue";
import CmsSelect from "@/components/shared/CmsSelect.vue";
import { BLOCKCHAIN_OPTIONS } from "@/config";

const getBlankWebsiteSettings = () => ({
  blockchainId: null,
  cmsId: null,
  websiteUrl: "",
  address: "",
});

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
      blockchainOptions: BLOCKCHAIN_OPTIONS,
      isAdvancedSetup: false,
      websiteSettings: getBlankWebsiteSettings(),
    };
  },

  methods: {
    onClose() {
      this.$emit("close");
    },

    onSuccess() {
      this.$emit("close");
      this.$emit("success", this.websiteSettings);
    },
  },
});
</script>
