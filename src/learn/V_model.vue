<template>
  <div>
    <h2>input Value</h2>
    <input type="text" v-model.lazy="inputValue" />
    <!-- 동기화가 되지 않다가 포커스가 떨어졌을때 동기화가 됨 .lazy -->
    <div>{{ inputValue }}</div>
    <h2>textarea Value</h2>
    <textarea v-model="textareaValue"></textarea>
    <div>{{ textareaValue }}</div>
    <h2>checkbox Value</h2>
    <label for="checkbox">{{ checkboxValue }}</label>
    <input
      type="checkbox"
      id="checkbox"
      v-model="checkboxValue"
      true-value="YES"
      false-value="No"
    />
    <h2>radio Value</h2>
    <label>
      <input type="radio" name="type" value="O" v-model="radioValue" />
      O형
    </label>
    <label>
      <input type="radio" name="type" value="A" v-model="radioValue" />
      A형
    </label>
    <label>
      <input type="radio" name="type" value="B" v-model="radioValue" />
      B형
    </label>
    <label>
      <input type="radio" name="type" value="AB" v-model="radioValue" />
      AB형
    </label>
    <div>{{ radioValue }}</div>
    <h2>selectValue</h2>
    <select v-model="selectValue">
      <option value="html">HTML 수업</option>
      <option value="css">CSS 수업</option>
      <option value="javascript">JavaScript 수업</option>
    </select>
    <div>{{ selectValue }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const inputValue = ref('');
    const textareaValue = ref('');
    const checkboxValue = ref('YES');
    const radioValue = ref('O');
    const selectValue = ref('html');

    return { inputValue, textareaValue, checkboxValue, radioValue, selectValue };
  }
};
</script>

<style lang="scss" scoped></style>
