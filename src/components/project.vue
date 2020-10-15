<template>
  <div class="project">
    <div class="box one">
      <img :src="img1" alt="vue构建CNode社区">
      <div class="intro">
        <h3>vue重构CNode社区</h3>
        <p>为了熟悉vue的使用，利用开放API做了CNode社区这个项目</p>
        <p>技术栈：vue/vue-router</p>
        <p><a href="https://github.com/zhangxq2019/vue-cnode">项目源码</a></p>
        <p><a href="https://zhangxq2019.github.io/vue-cnode/index.html">项目预览</a></p>
      </div>
    </div>
      <div class="box two">
        <img :src="img2" alt="星空todo">
        <div class="intro">
          <h3>星空todo</h3>
          <p>为了加深对小程序的掌握，做了这个打卡计时小程序</p>
          <p>功能：记录事件，完成事件，重要事件颜色醒目，可设置时间的倒计时功能</p>
          <p><a href="https://github.com/zhangxq2019/todo-program">项目源码</a></p>
          <p>此处应有二维码</p>
        </div>
      </div>
      <div class="box three">
        <img :src="img3" alt="胖丁唱歌">
        <div class="intro">
          <h3>胖丁唱歌</h3>
          <p>熟练掌握css中伪元素，border-radius及动画的使用</p>
          <p>功能：点击嘴巴开始唱歌，再次点击暂停</p>
          <p><a href="https://github.com/zhangxq2019/JigglyPuff">项目源码</a></p>
          <p><a href="https://zhangxq2019.github.io/JigglyPuff/Jigglypuff.html">项目预览</a></p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "project",
  data() {
    return {
      img1: require('../assets/cnode.jpg'),
      img2:require('../assets/star.jpg'),
      img3: require('../assets/puff.jpg')
    }
  }
}
</script>

<style scoped>
.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.box {
  display: flex;
  width: 80%;
  height: 30%;
}
.box:nth-child(1){
  margin-top: 2rem;
}
.intro {
  margin-left: 2rem;
}
img {
  width: 10rem;
  height: 10rem;
}
</style>
