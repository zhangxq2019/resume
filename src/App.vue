<template>
  <div id="app">
    <top/>
    <div class="main">
      <slideBar/>
      <router-view name="right"></router-view>
    </div>
  </div>
</template>

<script>
import top from './components/top'
import slideBar from "./components/slideBar";
export default {
  name: 'App',
  components: {
    top,
    slideBar,
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.main {
  padding: 0;
  margin: 0;
  display: flex;
  width: 100%;
  height: 85vh;
  color: #3c3c3c;
}
</style>
