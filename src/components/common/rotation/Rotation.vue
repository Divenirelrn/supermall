<template>
  <div class="rotation">
    <div class="img-list" :style="{marginLeft: leftPosition}">
      <img v-for="item in imgList" :src="item.image">
      <img :src="imgList[0] && imgList[0].image">
    </div>
    <div class="pointer-wrapper">
      <div class="pointer"
           v-for="(i,index) in imgList.length"
           :class="{active: isActive(index)}"
           @click="pointerClick(index)"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Rotation",
    data(){
      return {
        currentIndex: 0,
        leftPosition: 0,
        timer: null
      }
    },
    computed: {
      // isActive(){
      //   return function(index){
      //     // console.log(index, this.currentIndex);
      //     let tmpIndex = this.currentIndex;
      //     if(tmpIndex === 4){
      //       tmpIndex = 0;
      //     }
      //     return index === tmpIndex;
      //   }
      // }
      isActive(){
        return function(index) {
          let tmpPosition = -parseInt(this.leftPosition);
          if(tmpPosition === 4 * document.body.clientWidth){
            tmpPosition = 0;
          }
          return tmpPosition === index * document.body.clientWidth;
        }
      }
    },
    props: {
      imgList: {
        type: Array,
        default(){
          return [];
        }
      }
    },
    created() {
      this.rotate();
    },
    methods: {
      rotate(){
        this.timer = setInterval(() => {
          if(this.currentIndex >= this.imgList.length){
            this.currentIndex = 0;
          }
          let end = this.currentIndex + 1;
          let start = this.currentIndex;
          this.slide(end, start, 30);
          this.currentIndex++;
        }, 2000)
      },
      slide(to, from, speed){
        let start = -from * document.body.clientWidth;
        let end = - to * document.body.clientWidth;
        let timer = setInterval(() => {
          start += -speed;
          this.leftPosition = start + 'px';
          if(start <= end){
            this.leftPosition = end + 'px';
            clearInterval(timer);
          }
        }, 50);
      },
      pointerClick(index){
        clearInterval(this.timer);
        this.leftPosition = -index * document.body.clientWidth + 'px';
        this.currentIndex = index;
        this.rotate();
      }
    }
  }
</script>

<style scoped>
  .rotation{
    position: relative;
  }
  .img-list{
    display: flex;
    overflow: hidden;
  }
  .img-list img{
    /*height: 195px;*/
    width: 100vw;
  }
  .pointer-wrapper{
    display: flex;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .pointer{
    width: 14px;
    height: 14px;
    background-color: #fff;
    border-radius: 50%;
    margin-right: 10px;
    /*flex: 1;*/
  }
  .active{
    background-color: red;
  }
</style>
