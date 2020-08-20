<template>
  <div class="tab-bar-item" @click="itemClick">
    <div class="item-icon" v-if="!isActive"><slot name="item-icon"></slot></div>
    <div class="item-icon-active" v-else><slot name="item-icon-active"></slot></div>
    <div class="item-text" :style="{color: finalColor}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    computed: {
      finalColor(){
        return this.isActive ? this.activeColor : '';
      },
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1;
      }
    },
    props: {
      activeColor: {
        type: String,
        default(){
          return 'red';
        }
      },
      path: String
    },
    methods: {
      itemClick(){
        this.$router.push(this.path);
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
  }
  .item-icon, .item-icon-active{

  }
  .item-icon img, .item-icon-active img{
    width: 24px;
    height: 24px;
    position: relative;
    top: 3px
  }
</style>
