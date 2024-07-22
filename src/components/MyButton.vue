<template>
  <div class="p-3 bg-danger">
    <button type="button" class="btn btn-primary" v-bind="$attrs">my button</button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped></style>