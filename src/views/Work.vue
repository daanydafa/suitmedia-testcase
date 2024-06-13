<template>
  <div>
    <Banner :imageUrl="bannerImageUrl" :title="'Work'" />
  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import bannerImage from '../assets/banner.jpg';

export default {
  components: {
    Banner,
  },
  data() {
    return {
      bannerImageUrl: bannerImage,
    };
  },
};
</script>