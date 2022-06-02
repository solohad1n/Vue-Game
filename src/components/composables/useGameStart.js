import { ref } from 'vue';
import { FIELD, GAME_STATUS } from '@/constantas'

export default function useGameStart(init, fields, difficult, number, gameStatus) {
  let preview = ref(false);

  const start = () => {
    init();
    prepareGame();
  };

  const prepareGame = () => {
    preview.value = true;
    gameStatus.value = GAME_STATUS.PREVIEW

    for (let i = 0; i < difficult.value; i++) {
      const index = rand(0, number - 1);
      if (fields.value[index].value !== FIELD.FILLED) {
        fields.value[index].value = FIELD.FILLED;
      } else {
        i--;
      }
    }

    setTimeout(() => {
      preview.value = false;
      gameStatus.value = GAME_STATUS.STARTED;
    }, 2000);
  };

  const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  return {
    start,
    preview,
  }
}