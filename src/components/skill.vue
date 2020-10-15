<template>
<div class="skill">
  <div class="html">
    <h2>HTML5 & CSS 💙💙💙💙🖤</h2>
    <div class="line"></div>
    <p>标签语义化: 能够使用HTML5的标签写语义化的页面</p>
    <p>CSS: 熟练使用css居中布局，盒模型使用flex，float，position等方面布局</p>
    <p>使用css</p>
  </div>
  <div class="js">
    <h2>JavaScript 💙💙💙💙🖤</h2>
    <div class="line"></div>
    <p>熟悉JavaScript，理解异步，this，闭包，函数防抖，原型链等</p>
    <p>熟悉ES6的常用语法，能在项目中普遍使用let,箭头函数</p>
  </div>
  <div class="vue">
    <h2>Vue 💙💙💙💙🖤</h2>
    <div class="line"></div>
    <p>熟悉vue/vue-router/vuex的使用</p>
  </div>
</div>
</template>

<script>
export default {
  name: "skill"
}
</script>

<style scoped>
.skill {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.line {
  width: 100%;
  height: 2px;
  background: #3c3c3c;
}
.html,
.js,
.vue {
  width: 80%;
}
p {
  margin-top: 1rem;
}
</style>
