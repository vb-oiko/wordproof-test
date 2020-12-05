<template>
  <div>
    <app-bar />
    <add-website-modal />
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
});
</script>
