<!--App.vue가 root component로 생각하면 됨 -->
<template>
  <div>
    <h1>반응형 메시지</h1>
    <p>{{ reactiveMessge }}</p>
    <button v-on:click="addReactiveMessage">Add Message</button>
    <h1>일반 메시지</h1>
    <p>{{ normalMessage }}</p>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, ref } from 'vue'

export default {
  setup() {
    console.log('setup')
    const reactiveMessge = ref('Hello Reactive Message')
    const addReactiveMessage = () => {
      reactiveMessge.value = reactiveMessge.value + '!'
    }
    const normalMessage = 'Hello Nomal Message'

    //  라이프사이클 훅
    onMounted(() => {
      console.log('onMounted')
    })
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })

    return {
      reactiveMessge,
      normalMessage,
      addReactiveMessage
    }
  }
}
</script>

<style></style>

<!-- 반응형 API인 ref사용으로 클릭으로 !느낌표가 늘어나는 것을 확인 할 수 있다. -->
