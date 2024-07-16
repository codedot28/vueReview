<template>
  <div>
    <h2>보간법</h2>
    <p>{{ message }}</p>
    <p v-once>{{ message }}</p>
    <button @click="message = message + '!'">click</button>
    <hr />
    <h2>V-html</h2>
    <p>{{ rawHtml }}</p>
    <p v-html="rawHtml"></p>
    <hr />
    <h2>속성 바인딩</h2>
    <div :title="dynamicTitle">마우스를 올려보세요</div>
    <h2>Input 속성 바인딩</h2>
    <input type="text" value="홍길동" v-bind:disabled="isInput" />
    <input v-bind="attrs" />
    <hr />
    <h2>자바스크립트 표현식 사용법</h2>
    {{ message.split('').reverse().join('') }}
    <br />
    {{ isInput ? "인풋이 true면 '예'" : "인풋이 false면 '아니오'" }}
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const message = ref('안녕하세요!')
    const rawHtml = ref('<strong>안녕하세요!</strong>')
    const dynamicTitle = ref('안녕하세요!!!')
    const isInput = ref(true) //false를 넣으면 input내용 변경가능
    const attrs = ref({
      type: 'text',
      value: '12345',
      disalbed: false
    })

    return {
      message,
      rawHtml,
      dynamicTitle,
      isInput,
      attrs
    }
  }
}
</script>

<style lang="scss" scoped></style>
