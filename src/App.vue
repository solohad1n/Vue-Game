<template>
<header class="hero">
  <div class="header">
    <div class="header__title">
        <h1>Vue-Game</h1>
    </div>
    <div class="header__sub-title">
        <p>Запомни и открой все зеленые клетки</p>
    </div>
  </div>
    <div class="main">
        <Board/>
    </div>
</header>
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
.hero{
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  text-align: center;
}
header h1,p{
  margin: 0;
  padding: 0;
}
.header{
  margin: 30px 0;
}
</style>
