<template>
  <div id="app">
    <Header/>
    <FilmDisplay/>
  </div>
</template>

<script>
import Header from "./components/Header";
import FilmDisplay from "./components/FilmDisplay";
export default {
  name: "App",
  components: {
    Header,
    FilmDisplay
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
