<template>
  <main>
    <div class="container py-4">
      <MyButton @click="sayHello"></MyButton>
      <hr />
      <h2>slot</h2>
      <FancyButton>click</FancyButton>
    </div>
  </main>
</template>

<script>
import MyButton from './MyButton.vue';
import FancyButton from './FancyButton.vue';

export default {
  components: {
    MyButton,
    FancyButton,
  },
  setup() {
    const sayHello = () => {
      alert('hello');
    }

    return { sayHello }
  }
}
</script>

<style lang="scss" scoped></style>