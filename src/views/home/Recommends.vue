<template>
  <div class="recommends">
    <ul class="wrapper">
      <li v-for="item in recommends" class="recommends-item">
        <img :src="item.image">
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Recommends",
    props: {
      recommends: {
        type: Array,
        default(){
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .recommends{
    padding: 10px 0;
    border-bottom: 10px solid rgba(100,100,100,.1);
  }
  .wrapper{
    display: flex;
    list-style: none;
  }
  .recommends-item{
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .recommends-item img{
    width: 70px;
  }
</style>
