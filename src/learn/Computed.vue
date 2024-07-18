<template>
  <div>
    <h2>{{ teacher.name }}</h2>
    <h3>강의가 있나요?</h3>
    <!-- <p>{{ teacher.lectures.length > 0 ? '예' : '아니오' }}</p> -->
    <p>{{ hasLecture }}</p>
    <p>{{ existLecture() }}</p>
    <button v-on:click="counter++">counter: {{ counter }}</button>
    <h3>이름</h3>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';
export default {
  setup() {
    const teacher = reactive({
      name: 'learn',
      lectures: ['HTML/CSS', 'JavaScript', 'Vue3', 'TypeScript']
    });

    const hasLecture = computed(() => {
      console.log('computed'); //computed의 경우 캐시를 하기 때문에 성능면에서 좋음
      return teacher.lectures.length ? '있음 🙂' : '없음 🥲';
    });

    const existLecture = () => {
      console.log('method'); // method의 경우 실행될 경우 지속적으로 찍히는 문제
      return teacher.lectures.length ? '있음 🙂' : '없음 🥲';
    };

    const counter = ref(0);

    console.log('Console 출력: ', hasLecture.value);
    // hasLecture.value = '값';

    const firstName = ref('홍');
    const lastName = ref('길동');

    const fullName = computed({
      get() {
        return firstName.value + ' ' + lastName.value;
      },
      set(value) {
        console.log('value: ', value);
        [firstName.value, lastName.value] = value.split(' ');
      }
    });

    fullName.value = 'code dot';

    return { teacher, hasLecture, existLecture, counter, fullName };
  }
};
</script>
