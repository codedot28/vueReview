<template>
  <main></main>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';

export default {
  setup() {
    const message = ref('');
    // console.log('setup');
    // onBeforeMount(() => {
    //   console.log('onBeforeMount');
    // });
    // onMounted(() => {
    //   console.log('onMounted');
    // });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });

    return { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, message };
  }
  // vue2 에서 사용함,  vue3에서는 setup함수 안에서 사용함
  // // 컴포넌트가 초기화 될때 사용하는 Hook;
  // beforeCreate() {
  //   console.log('beforeCreate');
  //   console.log(this);
  // },
  // created() {
  //   console.log('created');
  // }
};
</script>

<style lang="scss" scoped></style>
