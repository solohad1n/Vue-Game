import { ref } from 'vue';

export default function useGameStart(init, fields, difficult, number) {
  let preview = ref(false);

  const start = () => {
    init();
    prepareGame();
  };

  const prepareGame = () => {
    preview.value = true;

    for (let i = 0; i < difficult.value; i++) {
      const index = rand(0, number - 1);
      if (fields.value[index].value !== 1) {
        fields.value[index].value = 1;
      } else {
        i--;
      }
    }

    setTimeout(() => {
      preview.value = false;
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