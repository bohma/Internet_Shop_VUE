<template>
  <div id="app">
    <nav-bar />
    <main-wrapper />
  </div>
</template>

<script>
import MainWrapper from "./components/main-wrapper";
import NavBar from "./components/nav-bar";

export default {
  name: "App",
  components: {
    MainWrapper,
    NavBar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img {
  max-width: 100%;
}
a {
  color: #000;
  text-decoration: none;
  transition: .2s;
}
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
@media screen and (max-width: 1280px) {
  .container {
    max-width: 1024px;
  }
}
@media screen and (max-width: 1023px) {
  .container {
    max-width: 768px;
  }
}
@media screen and (max-width: 767px) {
  .container {
    max-width: 375px;
  }
}
</style>
