<template>
  <div class="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png">
    
    <h1 class="h1">Remember Me, Vue 3</h1>
    <p>Запомни и открой все зеленые клетки</p>
    
    <Board />
  </div>
</template>

<script>
import Board from './components/Board';

export default {
  name: 'App',
  components: {
    Board,
  }
}
</script>

<style scoped>
  .app {
    font-family: Helvetica, sans-serif;
    text-align: center;
    margin-top: 40px;
  }
  .logo {
    width: 100px;
  }
</style>
