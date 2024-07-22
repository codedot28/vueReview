<template>
  <div class="row" g-3>
    <!-- emit 전달 방식 -->
    <!-- <button class="btn btn-primary" @click="$emit('createPost', 1, 2, 3)">버튼</button> -->
    <div class="col col-2">

      <select v-model="type" class="form-select" aria-label="Default select example">
        <option value="news">뉴스</option>
        <option value="notice">공지사항</option>

      </select>
    </div>
    <div class="col col-8"> <input v-model="title" type="text" class="form-control" /></div>
    <div class="col col-2 d-grid">
      <!--setup 함수에서 context emit전달 방식 -->
      <button class="btn btn-primary" @click="createPostContext">추가</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup(props, { emit }) {
    const type = ref('news');
    const title = ref('');
    const createPostContext = () => {
      const newPost = {
        type: type.value,
        title: title.value
      }
      emit('createPost', newPost);
      type.value = 'news';
      title.value = '';
    }

    return { createPostContext, title, type }
  }
}
</script>

<style lang="scss" scoped></style>