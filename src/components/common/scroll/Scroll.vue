<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import Pullup from '@better-scroll/pull-up'

  BScroll.use(Pullup)

  export default {
    name: "Scroll",
    data(){
      return {
        scroll: null
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 3,
        pullUpLoad: true
      });
      this.scroll.on('scroll', pos => {
        // console.log(pos);
      });
      this.scroll.on('pullingUp', () => {
        console.log('上拉加载更多');
        this.scroll.finishPullUp();
      });
    }
  }
</script>

<style scoped>
  .content{
    /*height: 1000px;*/
  }
</style>
