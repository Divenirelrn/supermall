<template>
  <tab-bar>
    <tab-bar-item fontColor="red" path="/home">
      <img src="~assets/img/tabbar/home.svg" slot="item-icon">
      <img src="~assets/img/tabbar/home_active.svg" slot="item-icon-active">
      <p slot="item-text">首页</p>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img src="~assets/img/tabbar/category.svg" slot="item-icon">
      <img src="~assets/img/tabbar/category_active.svg" slot="item-icon-active">
      <p slot="item-text">分类</p>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <img src="~assets/img/tabbar/shopcart.svg" slot="item-icon">
      <img src="~assets/img/tabbar/shopcart_active.svg" slot="item-icon-active">
      <p slot="item-text">购物车</p>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img src="~assets/img/tabbar/profile.svg" slot="item-icon">
      <img src="~assets/img/tabbar/profile_active.svg" slot="item-icon-active">
      <p slot="item-text">我的</p>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/TabBar"
  import TabBarItem from "components/common/TabBarItem"

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
  /*img{*/
  /*  width: 24px;*/
  /*  height: 24px;*/
  /*}*/
</style>
