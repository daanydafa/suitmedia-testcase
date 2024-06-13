<template>
  <div>
    <Banner :imageUrl="bannerImageUrl" :title="'Ideas'" />
    <PostList />
  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import PostList from '../components/PostList.vue';
import bannerImage from '../assets/banner.jpg';

export default {
  components: {
    Banner,
    PostList,
  },
  data() {
    return {
      bannerImageUrl: bannerImage,
    };
  },
};
</script>