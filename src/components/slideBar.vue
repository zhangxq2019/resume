<template>
  <div class="slide">
    <ul class="tabs">
      <router-link class="link" to="/">
        <li class="tab">
          <i class="iconfont icon-ziwopingjia"></i>
          <p>个人信息</p>
        </li>
      </router-link>
      <router-link class="link" to="/project">
        <li class="tab">
          <i class="iconfont icon-xiangmu"></i>
          <p>开源作品</p>
        </li>
      </router-link>
      <router-link class="link" to="/skill">
        <li class="tab">
          <i class="iconfont icon-jineng"></i>
          <p>专业技能</p>
        </li>
      </router-link>
      <li class="tab">
        <i class="iconfont icon-boke"></i>
        <p><a href="https://juejin.im/user/817692382859614/posts" target="_blank">学习博客</a></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "slideBar"
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.slide {
  width: 20rem;
  height: 100%;
  border-right: 2px solid #cccccc;
}

.tabs {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.link {
  color: #3c3c3c;
  text-decoration: none;
}
li {
  display: flex;
  list-style: none;
}

i {
  font-size: 2rem;
  margin-right: 10px;
}

.tab {
  font-size: 2rem;
}
a {
  olor: #3c3c3c;
  text-decoration: none;
}
a:visited {
  color: #3c3c3c;
}
</style>
