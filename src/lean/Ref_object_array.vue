<!-- ref(object,array) -->
<template>
  <div></div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup() {
    // ref -> Object(반응형 상태를 객체에 넣을 때는 .value가 붙지 않고)
    const count = ref(0);
    const state = reactive({
      count
    });
    count.value++; // 1
    count.value++; // 2
    console.log(count.value);
    console.log('state.count :', state.count);

    // ref -> Array(반응형 상태를 배열에 넣을 때는 value를 붙여야 한다.)
    const message = ref('hello');
    const arr = reactive([message]);
    console.log('arr[0] :', arr[0].value);

    return {
      count,
      state
    };
  }
};
</script>
