<template>
  <div>{{ mgs }}</div>
  {{ message }}
  <input v-model="message" type="text" />
  <button @click="sayHello">버튼</button>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const mgs = 'Hello test';
const message = ref('');
const sayHello = () => {
  alert('function test');
};

// const response = await axios('https://dummy.restapiexample.com/api/v1/employees');
// console.log('response', response);
async function callApi() {
  const response = await axios('https://dummy.restapiexample.com/api/v1/employees');
  console.log(response);
}
callApi();
</script>

<style lang="scss" scoped></style>
