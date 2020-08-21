<template>
  <div class="home">
    <nav-bar>
      <span slot="middle">购物街</span>
    </nav-bar>
    <rotation :img-list="banners"></rotation>
  </div>
</template>

<script>
  import NavBar from "components/context/navbar/NavBar";
  import {getHomeMultidata} from "network/home";
  import Rotation from "components/common/rotation/Rotation";

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
      Rotation
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend;
      })
    }
  }
</script>

<style scoped>

</style>
