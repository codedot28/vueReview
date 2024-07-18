<!-- 프리미티브 타입을 리액티브 함수로 선언 (ref)-->
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="addMessage">Add Message</button>
  </div>
  <div>
    <p>{{ message2.value }}</p>
    <button @click="addMessage2">Add Message2</button>
  </div>
  <div>
    <p>{{ message3 }}</p>
    <button @click="addMessage3">Add Message Ref</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup() {
    let message = reactive('Hello');
    //반응형으로 동작하지 않는데, reactive함수는 객체나 배열과 같이 레퍼런스 타입의 반응형 상태, 반응형 객체를 선언하는 함수이기 때문이다.
    const addMessage = () => {
      message = message + '!';
    };

    console.log('message :', message); //Hello
    console.log('message type :', typeof message); // string

    // 사용이 가능하게 하려면
    let message2 = reactive({
      value: 'Hello2'
    });

    const addMessage2 = () => {
      message2.value = message2.value + '!';
    };

    // ref함수 사용
    let message3 = ref('Hello ref');
    const addMessage3 = () => {
      message3.value = message3.value + '!';
    };

    return {
      message,
      addMessage,
      message2,
      addMessage2,
      message3,
      addMessage3
    };
  }
};
</script>

<style lang="scss" scoped></style>
