<template>
  <screen-scroll :fullscreen="true">
    <div class="item" id="one">
      <screen-particles>
        <template v-slot:homepage>
          <home-page></home-page>
        </template>
      </screen-particles>
    </div>
    <div class="item" id="two">
      <about-page></about-page>
    </div>
    <div class="item" id="three">ddd</div>
    <div class="item" id="four">ssss</div>
  </screen-scroll>
</template>

<script>
import ScreenScroll from "./components/ScreenScroll/ScreenScroll.vue";
import ScreenParticles from "./components/ScreenParticles/ScreenParticles.vue";
import HomePage from "./components/HomePage/HomePage.vue";
import AboutPage from "./components/AboutPage/AboutPage.vue";
export default {
  name: "App",
  components: {
    ScreenScroll,
    ScreenParticles,
    HomePage,
    AboutPage,
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
