<template>
  <div>
    <div :style="styleObject">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque est vitae aliquid fugiat
      molestias voluptas enim soluta nihil, quisquam, dolor repellat illo quis quia magni,
      voluptates libero. Neque, eveniet voluptates!
    </div>
    <button @click="fontSizes++">+</button>
    <button @click="fontSizes--">-</button>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
export default {
  setup() {
    // const styleObject = reactive({
    //   color: 'red',
    //   fontSize: '13px'
    // });
    const fontSizes = ref(13);

    const styleObject = computed(() => {
      return {
        color: 'red',
        fontSize: fontSizes.value + 'px'
      };
    });

    return {
      styleObject,
      fontSizes
    };
  }
};
</script>

<style lang="scss" scoped></style>
