<template>
  <div class="vl-parent">
    <loading
      v-model:active="isLoading"
      :can-cancel="true"
      :is-full-page="fullPage"
    />
  </div>
</template>

<script setup lang="ts">
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import { useloadingStore } from "~/stores/loadingStore";
const loadingstore = useloadingStore();
const fullPage = ref(true);
const isLoading = computed(() => loadingstore.getLoading);
</script>
