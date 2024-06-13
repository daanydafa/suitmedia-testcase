<template>
  <div class="banner">
    <div class="banner-image" :style="{ backgroundImage: 'url(' + imageUrl + ')' }"></div>
    <div class="banner-text">
      <h1>{{ title }}</h1>
      <h4>Where all our great things begin</h4>
    </div>
    <div class="banner-frame"></div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.banner {
  position: relative;
  height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.banner-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  transform: translateY(0);
  transition: transform 0.5s ease-out;
}

.banner-text {
  position: relative;
  z-index: 1;
}

.banner-text h1 {
  margin: 0;
}

.banner-frame {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  transform-origin: bottom right;
  transform: skewY(-6deg);
  background-color: white;
  z-index: 0;
}
</style>
