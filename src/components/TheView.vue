<template>
  <main class="container py-4">
    <div class="row g-3">
      <div class="col"><AppCard title="제목" contents="불라불라"></AppCard></div>
      <div class="col"><AppCard></AppCard></div>
      <div class="col"><AppCard></AppCard></div>
      <div class="col"><AppCard></AppCard></div>
      <div class="col"><AppCard></AppCard></div>
      <div class="col"><AppCard></AppCard></div>
    </div>
  </main>
</template>
<script>
import AppCard from './AppCard.vue';

export default {
  components: {
    AppCard
  },

  setup() {
    return {};
  }
};
</script>
