<template>
  <div class="board-wrapper">
    <div class="board">
      <BoardItem :preview="preview" v-for="field in fields" :field="field" :key="'item-' + field.id" />
    </div>

    {{gameStatus}}
    
    <p class="difficult">Сложность: <strong>{{ difficult }}</strong></p>
  
    <button @click="start">Старт</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import BoardItem from './BoardItem';
import useGameInit from './composables/useGameInit';
import useGameStart from './composables/useGameStart';
import { GAME_STATUS } from '@/constantas'

export default {
  name: 'Board',
  props: {},
  components: {
    BoardItem,
  },
  setup() {   
    const number = 25;

    const gameStatus = ref(GAME_STATUS.NONE)


    const { difficult,fields,init } = useGameInit(number)

    const {start,preview} = useGameStart(init,fields,difficult,number,gameStatus)
    

    return {
      number,
      difficult,
      fields,
      init,
      start,
      preview,
      gameStatus,
    }
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