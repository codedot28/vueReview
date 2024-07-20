<template>
  <div class="card">
    <div class="card-body">
      <span class="badge text-bg-secondary">{{ typeName }}</span>
      <h5 class="card-title mt-2">{{ title }}</h5>
      <p class="card-text">
        {{ contents }}
      </p>
      <a href="#" class="btn" :class="isLikeClass">좋아요</a>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  name: 'AppCard',
  props: {
    type: {
      type: String,
      default: 'news'
    },
    title: {
      type: String,
      required: true
    },
    contents: {
      type: String,
      required: true
    },
    isLike: {
      type: Boolean,
      default: false
    },
    obj: {
      type: Object,
      default: () => { }
    }
  },
  setup(props) {
    console.log('props.title:', props.title);
    const isLikeClass = computed(() => props.isLike ? 'btn-danger' : 'btn-outline-danger');
    const typeName = computed(() => props.type === 'news' ? '뉴스' : '공지사항'
    )
    return { isLikeClass, typeName };
  }
};
</script>

<style lang="scss" scoped></style>
