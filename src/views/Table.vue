<template>
  <div class="table">
    <a-divider>Table with pagination</a-divider>
    <WithPagination />
    <a-divider>Table with filters</a-divider>
    <WithFilterTable />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

import WithPagination from "@/components/tables/WithPaginationTable.vue";
import WithFilterTable from "@/components/tables/WithFilterTable.vue";

export default defineComponent({
  components: {
    WithPagination,
    WithFilterTable,
  },
});
</script>
