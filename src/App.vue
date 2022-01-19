<template>
  <ScreenScroll :fullscreen="true">
    <div class="item" id="one"><ScreenParticles></ScreenParticles></div>
    <div class="item" id="two">ffff</div>
    <div class="item" id="three">ddd</div>
    <div class="item" id="four">ssss</div>
  </ScreenScroll>
</template>

<script>
import ScreenScroll from "./components/ScreenScroll/ScreenScroll.vue";
import ScreenParticles from "./components/ScreenParticles/ScreenParticles.vue";
export default {
  name: "App",
  components: {
    ScreenScroll,
    ScreenParticles,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Open+Sans:wght@400;700&display=swap");

#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
