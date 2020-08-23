<template>
  <div class="home">
    <nav-bar>
      <span slot="middle">购物街</span>
    </nav-bar>
    <scroll class="scroll"
            ref="scroll"
            @getPosY="getPosY"
            @pullingUp="loadMore">
      <rotation :img-list="banners" @rotationImgLoad="imgLoad"/>
      <recommends :recommends="recommends"/>
      <feature-view/>
      <tab-control @itemClick="itemClick" ref="control"/>
      <goods-list :goods="goods[currentType].list"/>
    </scroll>
    <back-top v-show="isShow" @click.native="backTop"/>
  </div>
</template>

<script>
  import {debounce} from "common/utils";

  import {getHomeMultidata, getHomeGoods} from "network/home";

  import Rotation from "components/common/rotation/Rotation";
  import Scroll from "components/common/scroll/Scroll";
  import NavBar from "components/content/navbar/NavBar";
  import TabControl from "components/content/tabcontrol/TabControl";
  import GoodsList from "components/content/goodsList/GoodsList";
  import BackTop from "components/content/backTop/BackTop";

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
        currentType: 'pop',
        isShow: false,
        posY: 0
      }
    },
    components: {
      NavBar,
      Rotation,
      Recommends,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    created() {
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 300);
      this.$bus.$on('goodsImgLoad', () => {
        refresh();
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
        this.$refs.scroll.refresh();
        this.offsetTop = this.$refs.control.$el.offsetTop;
      },
      loadMore(){
        this.getHomeGoods(this.currentType);
      },
      /**
       * BackTop控制相关方法
       */
      getPosY(posY){
        this.isShow = -posY >= this.offsetTop - 44;
      },
      backTop(){
        this.$refs.scroll.backTo(0, 0, 10);
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
        this.$refs.scroll && this.$refs.scroll.finishPullUp();
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
