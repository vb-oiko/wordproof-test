<template>
  <div>
    <app-bar @add-website="showAddWebsiteModal = true" />
    <add-website-modal
      :show="showAddWebsiteModal"
      @close="showAddWebsiteModal = false"
      @success="onWebsiteAdd"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppBar from "@/components/AppBar.vue";
import AddWebsiteModal from "@/components/AddWebsiteModal.vue";

export default Vue.extend({
  name: "Dashboard",

  components: {
    AppBar,
    AddWebsiteModal,
  },

  data() {
    return {
      showAddWebsiteModal: false,
    };
  },

  methods: {
    onWebsiteAdd(settings: object) {
      console.warn({ ...settings });
    },
  },
});
</script>
