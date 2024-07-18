<template>
  <div>
    <input type="text" @keyup="addTodo" />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const todos = reactive([]);
    const addTodo = (e) => {
      if (e.key === 'Enter') {
        // 엔터를 칠 경우에만 추가 될 수 있도록 조건 설정
        todos.push(e.target.value);
      }
    };
    return { todos, addTodo };
  }
};
</script>

<style lang="scss" scoped></style>
