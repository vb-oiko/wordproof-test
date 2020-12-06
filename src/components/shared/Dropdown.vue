<template>
  <div
    class="relative focus:outline-none border border-gray-800 focus:ring-1 focus:ring-indigo-600 rounded"
    tabindex="-1"
    @focusout="hideDropdown"
  >
    <div class="  p-2 flex align-items-center focus:outline-none">
      <div
        class="px-2 pb-1 pt-2 block focus:outline-none flex-grow"
        :class="{
          'text-gray-400': selected === null,
          'text-gray-800': selected !== null,
        }"
        @click="toggleDropdown"
      >
        {{ selectedLabel }}
      </div>

      <button
        class="text-indigo-800 flex focus:outline-none"
        @click="toggleDropdown"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 404.257 404.257"
          fill="currentColor"
          class="w-4 h-4 self-center justify-self-center"
        >
          <path
            d="M386.257 114.331L202.128 252.427 18 114.331l-18 24 202.128 151.596 202.129-151.596z"
          />
        </svg>
      </button>
    </div>
    <ul
      v-if="showDropdown"
      class="absolute left-0 top-14 w-full border border-gray-800 rounded py-1 bg-white"
    >
      <li
        v-for="option in filteredOptions"
        :key="option.value"
        class="px-4 py-2 hover:bg-indigo-100 hover:font-bold text-gray-800"
        @click="onSelect(option.value)"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface DropdownOption {
  value: null | number;
  label: string;
}

export default Vue.extend({
  name: "Dropdown",

  props: {
    value: { type: Number, default: null },
    placeholder: { type: String, default: "" },
    options: {
      type: Array as () => DropdownOption[],
      required: true,
      default: [] as DropdownOption[],
    },
  },

  data() {
    return {
      selected: this.value,
      showDropdown: false,
    };
  },

  computed: {
    filteredOptions(): DropdownOption[] {
      return (this.options as DropdownOption[]).filter(
        (option) => option.value !== null
      );
    },

    selectedLabel(): string {
      const selectedOption = this.options.find(
        (option) => option.value === this.selected
      );
      return selectedOption ? selectedOption.label : this.placeholder;
    },
  },

  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },

    hideDropdown() {
      this.showDropdown = false;
    },

    onSelect(value: number) {
      this.selected = value;
      this.hideDropdown();
      this.$emit("input", value);
    },
  },
});
</script>
