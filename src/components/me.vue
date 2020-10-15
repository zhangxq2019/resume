<template>
  <div class="me">
    <div class="intro">
    <h1>个人信息</h1>
    <p>一年前端学习经验，熟悉vue技术栈,有小程序开发经验</p>
    </div>
    <div class="infomation">
      <p>姓名：张晓倩</p>
      <p>学校：宿州学院</p>
      <p>年龄： 24</p>
      <p>专业：网络工程</p>
      <p>手机：18895701017</p>
      <p>邮箱： zhangxq@foxmail</p>
    </div>
    <div class="assess">
    <h2>个人评价</h2>
    <p>善于知识梳理总结，乐于学习新技术，经常写博客，乐于分享</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "me"
}
</script>

<style scoped>
.me {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.infomation {
  font-size: 1.5rem;
}
.intro,.assess {
  text-align: center;
}
.intro p,.assess p {
  font-size: 1.3rem;
  margin-top: 1rem;
}
</style>
