<template>
  <div class="goods-item">
    <img :src="itemInfo.show.img">
    <div class="disc">
      <div class="title">{{itemInfo.title}}</div>
      <span class="price">{{itemInfo.price}}</span>
      <span class="cfav">{{itemInfo.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props: {
      itemInfo: {
        type: Object,
        default(){
          return {};
        }
      }
    }
  }
</script>

<style scoped>
  .goods-item{
    width: 48%;
    font-size: 14px;
    text-align: center;
  }
  .goods-item img{
    width: 100%;
  }
  .disc{
    width: 100%;
  }
  .disc .title{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .price{
    color: var(--color-high-text);
  }
  .price::after{
    content: "";
    width: 15px;
    height: 15px;
    display: inline-block;
    background: url("~assets/img/common/collect.svg");
    background-size: 15px 15px;
    position: relative;
    top: 2px;
    margin: 0 3px 0 10px;
  }
</style>
