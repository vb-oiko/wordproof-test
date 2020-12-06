<template>
  <div class="text-indigo-700">
    <h3 class="text-lg font-semibold">Choose CMS</h3>
    <ul class="flex mt-2">
      <li v-for="item in items" :key="item.value" class="mr-3">
        <cms-icon
          :cms="item.label"
          :active="item.value === selected"
          @click="onSelect(item.value)"
        />
        <div
          class="text-center mt-1 font-semibold"
          :class="{ invisible: item.value !== selected }"
          style="font-size:0.65rem;"
        >
          {{ item.label }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CmsIcon from "@/components/shared/CmsIcon.vue";
import { CMS_OPTIONS } from "@/config";
import { numberOrNullValidator } from "@/helpers";

export default Vue.extend({
  name: "CmsSelect",

  components: {
    CmsIcon,
  },

  props: {
    value: { validator: numberOrNullValidator, required: true },
  },

  data() {
    return {
      items: CMS_OPTIONS,
      selected: this.value,
    };
  },

  methods: {
    onSelect(value: number) {
      this.selected = value;
      this.$emit("input", value);
    },
  },
});
</script>
