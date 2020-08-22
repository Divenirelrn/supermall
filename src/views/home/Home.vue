<template>
  <div class="home">
    <nav-bar>
      <span slot="middle">购物街</span>
    </nav-bar>
    <rotation :img-list="banners"/>
    <recommends :recommends="recommends"/>
    <feature-view/>
    <tab-control/>
    <ul>
      <li>李若男1</li>
      <li>李若男2</li>
      <li>李若男3</li>
      <li>李若男4</li>
      <li>李若男5</li>
      <li>李若男6</li>
      <li>李若男7</li>
      <li>李若男8</li>
      <li>李若男9</li>
      <li>李若男10</li>
      <li>李若男11</li>
      <li>李若男12</li>
      <li>李若男13</li>
      <li>李若男14</li>
      <li>李若男15</li>
      <li>李若男16</li>
      <li>李若男17</li>
      <li>李若男18</li>
      <li>李若男19</li>
      <li>李若男20</li>
      <li>李若男1</li>
      <li>李若男2</li>
      <li>李若男3</li>
      <li>李若男4</li>
      <li>李若男5</li>
      <li>李若男6</li>
      <li>李若男7</li>
      <li>李若男8</li>
      <li>李若男9</li>
      <li>李若男10</li>
      <li>李若男11</li>
      <li>李若男12</li>
      <li>李若男13</li>
      <li>李若男14</li>
      <li>李若男15</li>
      <li>李若男16</li>
      <li>李若男17</li>
      <li>李若男18</li>
      <li>李若男19</li>
      <li>李若男20</li>
      <li>李若男1</li>
      <li>李若男2</li>
      <li>李若男3</li>
      <li>李若男4</li>
      <li>李若男5</li>
      <li>李若男6</li>
      <li>李若男7</li>
      <li>李若男8</li>
      <li>李若男9</li>
      <li>李若男10</li>
      <li>李若男11</li>
      <li>李若男12</li>
      <li>李若男13</li>
      <li>李若男14</li>
      <li>李若男15</li>
      <li>李若男16</li>
      <li>李若男17</li>
      <li>李若男18</li>
      <li>李若男19</li>
      <li>李若男20</li>
    </ul>
  </div>
</template>

<script>
  import {getHomeMultidata} from "network/home";

  import Rotation from "components/common/rotation/Rotation";
  import NavBar from "components/context/navbar/NavBar";
  import TabControl from "components/context/tabcontrol/TabControl";

  import Recommends from "./Recommends";
  import FeatureView from "./FeatureView";


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
      Recommends,
      FeatureView,
      TabControl
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
  .home{
    padding-top: 44px;
  }
</style>
