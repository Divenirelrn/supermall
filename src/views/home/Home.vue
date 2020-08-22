<template>
  <div class="home">
    <nav-bar>
      <span slot="middle">购物街</span>
    </nav-bar>
    <scroll class="scroll" ref="scroll">
      <rotation :img-list="banners" @rotationImgLoad="imgLoad"/>
      <recommends :recommends="recommends"/>
      <feature-view/>
      <tab-control @itemClick="itemClick"/>
      <goods-list :goods="goods[currentType].list" @goodsLoad="imgLoad"/>
    </scroll>
  </div>
</template>

<script>
  import {getHomeMultidata, getHomeGoods} from "network/home";

  import Rotation from "components/common/rotation/Rotation";
  import Scroll from "components/common/scroll/Scroll";
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
      GoodsList,
      Scroll
    },
    created() {
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
      this.$bus.$on('goodsImgLoad', () => {
        this.$refs.scroll.scroll.refresh();
      });
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
      imgLoad(){
        this.$refs.scroll.scroll.refresh();
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
  .scroll{
    height: calc(100vh - 49px - 44px);
    overflow: hidden;
  }
</style>
