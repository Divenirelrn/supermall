<template>
  <div class="detail">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg">
      </div>
      <ul slot="middle" class="nav-title-wrapper">
        <li v-for="(item, index) in navTitles"
            class="nav-title"
            @click="liClick(index)"
            :class="{active: index === currentIndex}">
            {{item}}
        </li>
      </ul>
    </nav-bar>
    <rotation :imgList="topImages" class="rotation"/>
  </div>
</template>

<script>
  import {getDetailInfo} from "network/detail";
  import Rotation from "components/common/rotation/Rotation";

  import NavBar from "../navbar/NavBar";

  export default {
    name: "Detail",
    components: {
      NavBar,
      Rotation
    },
    data(){
      return {
        navTitles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0,
        topImages: []
      }
    },
    created(){
      getDetailInfo(this.$route.query.iid).then(res => {
        console.log(res);
        this.topImages.push(...res.result.itemInfo.topImages);
      })
    },
    methods: {
      backClick(){
        this.$router.back();
      },
      liClick(index){
        this.currentIndex = index;
      }
    }
  }
</script>

<style scoped>
  .detail{
    padding-top: 44px;
  }
  .nav-title-wrapper{
    display: flex;
    list-style: none;
    color: #000;
  }
  .nav-title{
    flex: 1;
  }
  .back img{
    position: relative;
    top: 4px;
  }
  .active{
    color: var(--color-high-text);
  }
  .rotation{
    height: 300px;
    overflow: hidden;
  }
</style>
