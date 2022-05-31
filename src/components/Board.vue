<template>
  <div class="board-wrapper">
    <div class="board">
      <BoardItem v-for="field in fields" :field="field" :key="'item-' + field.id" />
    </div>
    
    <p class="difficult">Сложность: <strong>{{ difficult }}</strong></p>
  
    <button @click="start">Старт</button>
  </div>
</template>

<script>
import BoardItem from './BoardItem';
import useGameInit from './composables/useGameInit';

export default {
  name: 'Board',
  props: {},
  components: {
    BoardItem,
  },
  setup() {   
    const number = 25;

    const { difficult,fields,init } = useGameInit(number)
    

    return {
      number,
      difficult,
      fields,
      init
    }
  },
  
  methods: {
    start() {
      this.init();
      this.prepareGame();
    },
    
    prepareGame() {
      for (let i = 0; i < this.difficult; i++) {
        const index = this.rand(0, this.number - 1);
        
        if (this.fields[index].value !== 1) {
          this.fields[index].value = 1;
        } else {
          i--;
        }
      }
    },
  
    rand(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
  }
}
</script>

<style scoped>
  .board-wrapper {
    margin-bottom: 100px;
  }
  
  .board {
    width: 300px;
    background: #eee;
    margin: 0 auto;
  }
  
button{
    background: #42b983cc;
    color: white;
    border-radius: 2px;
    padding: 10px 50px;
    margin: 10px 0;
    cursor: pointer;
    outline: none;
    font-size: 20px;
}
button:hover{
  background: #266e4ecc;
  transition: background-color 0.5s, height 2s;
}
</style>