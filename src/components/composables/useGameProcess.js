export default function useGameProcess(fields) {
  const selectField = (id) => {
    const index = fields.value.findIndex((field) => {
      return field.id === id;
    });

    if (index > -1) {
      fields.value[index].clicked = true;
    }
  }

  return {
    selectField
  }
}