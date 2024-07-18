<template>
  <div></div>
</template>

<script>
import { ref, watch, reactive } from 'vue';

export default {
  setup() {
    const x = ref(0);
    const y = ref(0);

    // // single ref
    // watch(x, (newX) => {
    //   console.log(`x is ${newX}`);
    // });

    // // getter
    // watch(
    //   () => x.value + y.value,
    //   (sum) => {
    //     console.log(`sum of x + y is: ${sum}`);
    //   }
    // );

    // // array of multiple sources
    // watch([x, () => y.value], ([newX, newY]) => {
    //   console.log(`x is ${newX} and y is ${newY}`);
    // });

    const person = reactive({
      name: '홍길동',
      age: 30,
      hobby: '운동',
      obj: {
        count: 0
      }
    });

    watch(person, (newValue) => {
      console.log('newValue: ', newValue);
    });
    return { x, y, person };
  }
};
</script>

<style lang="scss" scoped></style>
