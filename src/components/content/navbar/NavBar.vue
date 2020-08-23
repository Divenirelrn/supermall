<template>
  <div class="nav-bar" :style="{backgroundColor: backColor}">
    <div class="left"><slot name="left"></slot></div>
    <div class="middle"><slot name="middle"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    props: {
      backColor: String
    }
  }
</script>

<style scoped>
  .nav-bar{
    height: 44px;
    line-height: 44px;
    /*background-color: var(--color-tint);*/
    display: flex;
    text-align: center;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }
  .left, .right{
    width: 60px;
  }
  .middle{
    flex: 1;
  }
</style>
