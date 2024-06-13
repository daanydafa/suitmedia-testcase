<template>
  <div class="paginator">
    <button type="button" class="btn btn-sm" @click="goToPage(currentPage - 2)" :disabled="currentPage <= 2"> << </button>
    <button type="button" class="btn btn-sm" @click="goToPage(currentPage - 1)" :disabled="currentPage <= 1"> < </button>
    <button type="button" class="btn btn-sm" v-for="page in pageNumbers" :key="page" @click="goToPage(page)"
      :class="{ active: currentPage === page }">
      {{ page }}
    </button>
    <button type="button" class="btn btn-sm" @click="goToPage(currentPage + 1)" :disabled="currentPage >= totalPages"> > </button>
    <button type="button" class="btn btn-sm" @click="goToPage(currentPage + 2)" :disabled="currentPage >= totalPages - 1"> >> </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pageNumbers() {
      let start = Math.max(1, this.currentPage - 2);
      let end = Math.min(this.totalPages, this.currentPage + 2);
      
      if (end - start < 4) {
        start = Math.max(1, end - 4);
      }

      return Array.from({ length: Math.min(5, end - start + 1) }, (_, i) => start + i);
    },
  },
  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.$emit('page-changed', page);
      }
    },
  },
};
</script>

<style>
.paginator {
  display: flex;
  gap: 5px;
  justify-content: center;
  margin: 1rem 0;
}

button.active {
  font-weight: bold;
  background-color: rgb(236, 106, 49) !important;
  color: white !important; 
}
</style>
