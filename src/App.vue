<template>
  <router-view />
  <BackToTop />
</template>

<script lang="ts">
import BackToTop from "@/components/BackToTop.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: {
    BackToTop,
  },
});
</script>
