<template>
  <div>
    <div :class="{ active: isActive, 'text-danger': hasError }">텍스트 입니다.</div>
    <div :class="classObject">바인딩의 또 다른 예시</div>
    <button @click="toggle">toggle</button>
    <button @click="hasError = !hasError">toggleDanger</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const isActive = ref(true);
    const hasError = ref(false);

    // const classObject = reactive({
    //   active: true,
    //   'text-danger': true
    // });

    const classObject = computed(() => {
      return {
        active: true,
        'text-danger': true
      };
    });
    const toggle = () => {
      isActive.value = !isActive.value;
    };

    return {
      isActive,
      toggle,
      hasError,
      classObject
    };
  }
};
</script>

<style scoped>
.active {
  font-weight: 900;
}

.text-danger {
  color: brown;
  font-weight: 600;
}
</style>
