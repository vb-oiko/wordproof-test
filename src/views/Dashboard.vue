<template>
  <div>
    <app-bar @add-website="showAddWebsiteModal = true" />
    <add-website-modal
      :show="showAddWebsiteModal"
      @close="showAddWebsiteModal = false"
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
});
</script>
