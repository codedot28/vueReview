<template>
  <div>
    <p>author: {{ author }}</p>
    <p>title: {{ title }}</p>
    <p>year: {{ year }}</p>
  </div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue';

export default {
  setup() {
    const book = reactive({
      author: 'Vue Team',
      year: '2020',
      title: 'Vue 3 Guide',
      description: '당신은 지금 바로 이 책을 읽습니다  ;)',
      price: '무료'
    });

    // let { author, title } =book; // 이 상태로 불러오면 반응형을 잃게 되는데,
    let { author, title } = toRefs(book); // toRefs를 사용하면 반응형을 유지 할 수 있다.

    // 만약 하나씩 가져 오고 싶다면
    const year = toRef(book, 'year');

    return {
      author,
      title,
      year,
      book
    };
  }
};
</script>
