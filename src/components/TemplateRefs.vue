<template>
  <div class="container py-4">
    <input ref="input" type="text" />
    <p>{{ input }}</p>
    <p>{{ input.value }}, {{ $refs.input }}, {{ $refs.input === input }}</p>
    <hr />
    <ul>
      <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  setup() {
    const input = ref('');
    console.log('setup', input.value);
    onMounted(() => {
      input.value.value = 'test';
      console.log('onMounted', input.value);

      itemRefs.value.forEach((item) => console.log('item:', item.textContent));
    });

    const fruits = ref(['사과', '포도', '수박']);
    const itemRefs = ref([]);
    return { input, fruits, itemRefs };
  }
};
</script>

<style lang="scss" scoped></style>
