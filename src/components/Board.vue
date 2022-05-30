<template>
<div class="wrapper">
    <div class="wrapper__board">
    <BoardItem v-for="i in 25" :key="i"/>
  </div>
  <div class="wrapper__control">
    <p>Сложность: <strong>4</strong></p>
    <button>Start</button>
  </div>
</div>
</template>

<script>
import BoardItem from './BoardItem.vue';
export default {
    components: { BoardItem }
}
</script>

<style>
.wrapper__board{
  width: 300px;
  background: #eee;
  margin: 0 auto;
}
.wrapper{
  margin-bottom: 100px;
}
button{
    background: #42b983cc;
    color: white;
    border-radius: 2px;
    padding: 10px 50px;
    margin: 10px 0;
    cursor: pointer;
    outline: none;
    
}
button:hover{
  background: #266e4ecc;
  transition: background-color 0.5s, height 2s;
}
.wrapper__control{
  margin-top: 30px;
}
</style>