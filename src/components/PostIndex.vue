<template>
  <main>
    <div class="container py-4">
      <PostCreate @create-post="createPost"></PostCreate>
      <hr class="my-4" />
      <div class="row g-3">
        <div v-for="post in posts" :key="post.id" class="col col-4">

          <AppCard :title="post.title" :contents="post.contents" :type="post.type" :isLike="post.isLike"
            @toggle-like="post.isLike = !post.isLike"></AppCard>

        </div>
      </div>
      <hr class="my-4" />
      <LabelInput v-model="userName" label="이름"></LabelInput>
    </div>
  </main>
</template>
<script>
import AppCard from '@/components/AppCard.vue';
import LabelInput from './LabelInput.vue';
import PostCreate from './PostCreate.vue';
import { reactive, ref } from "vue";
export default {
  components: {
    AppCard,
    PostCreate,
    LabelInput,

  },
  setup() {
    const post = reactive({
      title: '제목2',
      contents: '내용2'
    })

    const posts = reactive([
      { id: 1, title: '제목1', contents: '내용1', isLike: true, type: 'news' },
      { id: 2, title: '제목2', contents: '내용2', isLike: true, type: 'news' },
      { id: 3, title: '제목3', contents: '내용3', isLike: true, type: 'news' },
      { id: 4, title: '제목4', contents: '내용4', isLike: true, type: 'news' },
      { id: 5, title: '제목5', contents: '내용5', isLike: false, type: 'notice' },
      { id: 6, title: '제목6', contents: '내용6', isLike: false, type: 'notice' },
    ])

    const createPost = (newPost) => {
      posts.push(newPost);
      console.log('createPost');
      console.log('newTitle :', newPost);
    }

    const userName = ref('');
    const firstname = ref('');
    const lastname = ref('');

    return {
      post,
      posts,
      createPost,
      userName,
      firstname,
      lastname

    };
  }
};
</script>
