<template>
  <div class="home">
    <nav-bar>
      <span slot="middle">购物街</span>
    </nav-bar>
    <rotation :img-list="banners"/>
    <recommends :recommends="recommends"/>
    <feature-view/>
    <tab-control @itemClick="itemClick"/>
    <goods-list :goods="goods[currentType].list"/>
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
  import {getHomeMultidata, getHomeGoods} from "network/home";

  import Rotation from "components/common/rotation/Rotation";
  import NavBar from "components/content/navbar/NavBar";
  import TabControl from "components/content/tabcontrol/TabControl";
  import GoodsList from "components/content/goodsList/GoodsList";

  import Recommends from "./Recommends";
  import FeatureView from "./FeatureView";


  export default {
    name: "Home",
    data(){
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop'
      }
    },
    components: {
      NavBar,
      Rotation,
      Recommends,
      FeatureView,
      TabControl,
      GoodsList
    },
    created() {
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods: {
      /**
      *事件相关方法
      */
      itemClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
      },
      /**
       * 网络请求相关方法
       */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        });
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list);
        })
        this.goods[type].page += 1;
      }
    }
  }
</script>

<style scoped>
  .home{
    padding-top: 44px;
  }
</style>
