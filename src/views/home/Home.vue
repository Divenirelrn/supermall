<template>
  <div class="home">
    <nav-bar>
      <span slot="middle">购物街</span>
    </nav-bar>
    <rotation :img-list="banners"></rotation>
    <recommends :recommends="recommends"></recommends>
  </div>
</template>

<script>
  import NavBar from "components/context/navbar/NavBar";
  import {getHomeMultidata} from "network/home";
  import Rotation from "components/common/rotation/Rotation";
  import Recommends from "./Recommends";

  export default {
    name: "Home",
    data(){
      return {
        banners: [],
        recommends: []
      }
    },
    components: {
      NavBar,
      Rotation,
      Recommends
    },
    created() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>

</style>
