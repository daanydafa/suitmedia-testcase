import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    posts: [],
    currentPage: 1,
    pageSize: 10,
    sort: '-published_at',
    totalItems: 0,
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
    setPageSize(state, size) {
      state.pageSize = size;
    },
    setSort(state, sort) {
      state.sort = sort;
    },
    setTotalItems(state, total) {
      state.totalItems = total;
    },
  },
  actions: {
    fetchPosts({ commit, state }) {
      const url = `https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${state.currentPage}&page[size]=${state.pageSize}&append[]=small_image&append[]=medium_image&sort=${state.sort}`;
      axios.get(url).then(response => {
        commit('setPosts', response.data.data);
        commit('setTotalItems', response.data.meta.total);
      });
    },
  },
});
