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
        scroll: null,
        posY: 0
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 3,
        pullUpLoad: true
      });
      this.scroll.on('scroll', pos => {
        this.posY = pos.y;
        this.$emit('getPosY', pos.y);
      });
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp');
      });
    },
    methods: {
      backTo(x, y, time=300){
        this.scroll.scrollTo(x, y, time)
      },
      refresh(){
        this.scroll.refresh();
      },
      finishPullUp(){
        this.scroll.finishPullUp();
      }
    }
  }
</script>

<style scoped>
  .content{
    /*height: 1000px;*/
  }
</style>
