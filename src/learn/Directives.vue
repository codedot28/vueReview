<template>
  <div>
    <p>{{ msg }}</p>
    <hr />
    <h4>v-text를 반응형 데이터를 넣은 경우</h4>
    <p v-text="msg"></p>
    <hr />
    <h4>v-html을 반응형 데이터를 만들어 불러온 경우</h4>
    <p v-html="htmlStr"></p>
    <hr />
    <h4>v-text에 반응형 데이터(v-html)를 넣은 경우: 문자열로 인지</h4>
    <p v-text="htmlStr"></p>
    <hr />
    <h4>v-once디렉티브는 한번만 렌더링합니다.</h4>
    <p v-once>{{ msg }}</p>
    <hr />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const msg = ref('안녕하세요.');
    const htmlStr = ref(`<strong>안녕!!</strong>`);

    return { msg, htmlStr };
  }
};
</script>

<style lang="scss" scoped></style>
