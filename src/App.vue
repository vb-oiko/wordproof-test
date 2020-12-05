<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Dashboard from "@/views/Dashboard.vue";

export default Vue.extend({
  name: "App",
  components: {
    Dashboard,
  },
});
</script>
