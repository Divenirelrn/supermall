<template>
  <div class="goods-list">
    <goods-item v-for="item in goods" :item-info="item"/>
  </div>
</template>

<script>
  import GoodsItem from "./GoodsItem";

  export default {
    name: "GoodsList",
    props: {
      goods: {
        type: Array,
        default(){
          return [];
        }
      }
    },
    components: {
      GoodsItem
    }
  }
</script>

<style scoped>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0 5px;
  }
</style>
