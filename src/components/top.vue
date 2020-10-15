<template>
<div class="top">
<p class="name">简历</p>
<p class="job">应聘前端工程师</p>
</div>
</template>

<script>
export default {
  name: "top"
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15vh;
  background: #3c3c3c;
}
.name {
  font-size: 26px;
  color: #fff;
}
.job {
  color: #aaaaa0;
}
</style>
