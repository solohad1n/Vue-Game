<template>
  <div class="board-wrapper">
    <div class="board">
      <BoardItem v-for="field in fields" :field="field" :key="'item-' + field.id" />
    </div>
    
    <p class="difficult">Сложность: <strong>{{ difficult }}</strong></p>
  
    <button class="btn" @click="start">Старт</button>
  </div>
</template>

<script>
import BoardItem from './BoardItem';
import { ref, onBeforeMount } from 'vue';

export default {
  name: 'Board',
  props: {},
  components: {
    BoardItem,
  },
  setup() {
    let difficult = ref(3);
    let fields = ref([]);
    const number = 25;
    
    const init = () => {
      fields.value = [];
      
      for (let i = 0; i < number; i++) {
        fields.value.push({
          id: i,
          clicked: false,
          value: 0,
        });
      }
    }
    
    onBeforeMount(init);
    
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
  
  .btn {
    background: #42b983cc;
    color: white;
    border: none;
    border-radius: 2px;
    padding: 10px 30px;
    margin: 10px 0;
    cursor: pointer;
    outline: none;
  }
  
  button:hover {
    background: #42b983;
  }
</style>