<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="item.id">{{ index }} {{ item.message }}</li>
    </ul>
    <hr />
    <h2>Id가 짝수 인것만</h2>
    <ul>
      <template v-for="item in items" :key="item.id">
        <li v-if="item.id % 2 === 0">({{ item.id }}) {{ item.message }}</li>
      </template>
    </ul>
    <hr />
    <h2>computed매서드 홀수인 것만</h2>
    <ul>
      <template v-for="item in evenItems" :key="item.id">
        <li>({{ item.id }}) {{ item.message }}</li>
      </template>
    </ul>
    <hr />
    <h2>객체 v-for</h2>
    <ul>
      <li v-for="(value, key, index) in myObject" :key="key">
        {{ key }} - {{ value }} - {{ index }}
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  setup() {
    const items = reactive([
      { id: 1, message: 'Java' },
      { id: 2, message: 'HTML' },
      { id: 3, message: 'CSS' },
      { id: 4, message: 'JavaScript' }
    ]);

    const evenItems = computed(() => items.filter((item) => item.id % 2 === 1));

    const myObject = reactive({
      title: '제목입니다.',
      author: '홍길동',
      publishedAt: '2016-04-10'
    });

    return {
      items,
      evenItems,
      myObject
    };
  }
};
</script>

<style lang="scss" scoped></style>
