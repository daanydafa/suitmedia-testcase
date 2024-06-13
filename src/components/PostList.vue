<template>
  <div class="post-container">

    <div class="controls">
      <div class="controls-left">
        Showing {{ startItem }} - {{ endItem }} of {{ totalItems }}
      </div>
      <div class="controls-right">
        <div class="control-item">
          <label class="me-2">Show per page:</label>
          <select v-model="pageSize" @change="updatePageSize">
            <option :value="10">10</option>
            <option :value="20">20</option>
            <option :value="50">50</option>
          </select>
        </div>
        <div class="control-item" style="padding-inline-start: 2rem;">
          <label class="me-2">Sort by:</label>
          <select v-model="sort" @change="updateSort">
            <option value="-published_at">Newest</option>
            <option value="published_at">Latest</option>
          </select>
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col" v-for="post in posts" :key="post.id" style="margin-bottom: 20px">
        <div class="card shadow border-0" style="width: 15rem; height: 100%; margin: 0 auto">
          <div class="card-img-top" style="width: 100%; height: 150px">
            <div style="background-color: grey; width: 100%; height: 100%; border-radius:5px 5px 0px 0px"></div>
          </div>
          <div class="card-body"
            style="display: flex; flex-direction: column; align-items: start; justify-content: start">
            <p class="card-text m-0" style="max-width: 100%; color: rgb(88, 83, 83); font-size: 12px;">
              {{ formatDate(post.published_at) }}
            </p>
            <h5 class="card-title m-0" style="max-width: 100%; text-align: left; font-size: 18px;">{{ post.title }}</h5>
          </div>
        </div>
      </div>
    </div>

    <Paginator :currentPage="currentPage" :totalPages="totalPages" @page-changed="handlePageChange" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Paginator from './Paginator.vue';

export default {
  components: {
    Paginator,
  },
  data() {
    return {
      pageSize: 10,
      sort: '-published_at',
    };
  },
  computed: {
    ...mapState(['posts', 'currentPage', 'totalItems']),
    totalPages() {
      return Math.ceil(this.totalItems / this.pageSize);
    },
    startItem() {
      return (this.currentPage - 1) * this.pageSize + 1;
    },
    endItem() {
      return Math.min(this.currentPage * this.pageSize, this.totalItems);
    },
  },
  methods: {
    ...mapActions(['fetchPosts']),
    updatePageSize() {
      this.$store.commit('setPageSize', this.pageSize);
      this.$store.commit('setCurrentPage', 1);
      this.fetchPosts();
    },
    updateSort() {
      this.$store.commit('setSort', this.sort);
      this.$store.commit('setCurrentPage', 1);
      this.fetchPosts();
    },
    handlePageChange(newPage) {
      this.$store.commit('setCurrentPage', newPage);
      this.fetchPosts();
    },
    formatDate(value) {
      if (value) {
        const date = new Date(value);
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return new Intl.DateTimeFormat('id-ID', options).format(date).toUpperCase();
      }
      return value;
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>


<style>
.post-container {
  padding-inline: 7rem;
}

.controls {
  display: flex;
  justify-content: space-between;
  padding-block: 1rem;
}

.controls-right {
  display: flex;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.col {
  flex: 0 0 25%;
  /* Adjust width based on your design */
}

.card {
  width: 15rem;
  height: auto;
  margin: 0 auto;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.frame {
  width: 207px;
  height: 311px;
}

.card-img-top {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: center;
}

.card-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
}

select {
  padding-block: 5px;
  padding-inline-end:2rem;
  border: 1px solid #ccc;
  border-radius: 2rem;
  background-color: #fff;
  font-size: 1rem;
  color: #333;
  outline: none;
}

select:focus {
  /* border-color: rgb(236, 106, 49); */
  box-shadow: 0 0 5px rgba(236, 106, 49, 0.5);
}

.control-item {
  display: flex;
  align-items: center;
}

label {
  margin-right: 0.5rem;
}
</style>
