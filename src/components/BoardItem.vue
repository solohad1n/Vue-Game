<template>
  <span :class="'item ' + ((field.value === 1 && preview) ? 'item-active' : '')"></span>
</template>

<script>
export default {
  name: 'BoardItem',
  props: {
    field: {
      type: Object,
      required: true,
    },
    preview: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
}
</script>

<style scoped>
  .item {
    position: relative;
    width: 50px;
    height: 50px;
    background: #ccc;
    margin: 5px;
    display: inline-block;
    cursor: pointer;
    transition: .4s;
    transform-style: preserve-3d;
    margin-bottom:0px ;
  }
  
  .item-active {
    background: #42b983cc;
    transform: rotateX(180deg);
  }
</style>