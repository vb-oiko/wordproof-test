<template>
  <div class="text-indigo-700">
    <h3 class="text-lg font-semibold">Choose CMS</h3>
    <ul class="flex mt-2">
      <li v-for="item in items" :key="item" class="mr-3">
        <cms-icon
          :cms="item"
          :active="item === selected"
          @click="onSelect(item)"
        />
        <div
          class="text-center mt-1 font-semibold"
          :class="{ invisible: item !== selected }"
          style="font-size:0.65rem;"
        >
          {{ item }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CmsIcon from "@/components/shared/CmsIcon.vue";
import { CMSType } from "@/types";

export default Vue.extend({
  name: "CmsSelect",

  components: {
    CmsIcon,
  },

  props: {
    value: { type: String, required: true },
  },

  data() {
    return {
      items: Object.values(CMSType),
      selected: this.value,
    };
  },

  methods: {
    onSelect(value: string) {
      this.selected = value;
      this.$emit("input", value);
    },
  },
});
</script>
