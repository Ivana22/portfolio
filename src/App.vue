<template>
  <screen-scroll :fullscreen="true">
    <div class="item">
      <home-page></home-page>
    </div>
    <div class="item" id="about">
      <about-page></about-page>
    </div>
    <div class="item" id="three">ddd</div>
    <div class="item" id="four">ssss</div>
  </screen-scroll>
</template>

<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</div>

<script>
import ScreenScroll from "./components/ScreenScroll/ScreenScroll.vue";
import HomePage from "./components/HomePage/HomePage.vue";
import AboutPage from "./components/AboutPage/AboutPage.vue";
export default {
  name: "App",
  components: {
    ScreenScroll,
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
