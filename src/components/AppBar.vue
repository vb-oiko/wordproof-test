<template>
  <nav class="border-b border-gray-300">
    <div class="max-w-7xl mx-auto flex ">
      <img
        src="@/assets/Logo-WordProof-720-300x62.png"
        alt="WordProof Logo"
        class="w-40 ml-4 m-4"
      />

      <ul class="flex self-center flex-grow ml-1">
        <li
          v-for="(menuItem, ind) in menuItems"
          :key="ind"
          class="text-indigo-700 rounded-full px-4 py-2 mr-4"
          :class="{ 'bg-indigo-100': menuItem === activeMenuItem }"
        >
          {{ menuItem }}
        </li>
      </ul>

      <button
        class="block leading-4 bg-indigo-700 text-indigo-100 rounded-full px-5 py-3 mr-4 self-center"
      >
        + website
      </button>

      <div class="text-indigo-700 p-5 bg-indigo-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          class="w-7 h-7"
        >
          <path
            d="M256 0C114.509 0 0 114.497 0 256c0 141.491 114.497 256 256 256 141.491 0 256-114.497 256-256C512 114.509 397.503 0 256 0zm15 481.513V30.487C387.26 38.051 482 134.618 482 256c0 121.349-94.685 217.945-211 225.513z"
          />
        </svg>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AppBar",

  data() {
    return {
      menuItems: ["Dashboard", "Content", "Settings", "Support"],
      activeMenuItem: "Dashboard",
    };
  },
});
</script>
