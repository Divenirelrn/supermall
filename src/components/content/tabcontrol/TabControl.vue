<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, index) in titleList">
      <span class=tab-control-text
            :class="{active: index === currentIndex}"
            @click="textClick(index)">
            {{item}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return{
        titleList: ['流行','新款','精选'],
        currentIndex: 0,
        isActive: true
      }
    },
    methods: {
      textClick(index){
        this.currentIndex = index;
        this.$emit('itemClick', index);
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    display: flex;
    text-align: center;
    background-color: #fff;
    position: sticky;
    top: 44px;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-text{
    padding: 5px;
  }
  .active{
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-high-text);
  }
</style>
