<template>
  <div>
    <button @click="printEventInfo('hello', $event)">printEventInfo</button>
    <hr />
    <input type="text" @keyup="onKeyUpHandler" />
  </div>
</template>

<script>
export default {
  setup() {
    const printEventInfo = (message, evnet) => {
      console.log('message', message);
      console.log('message target', event.target);
      console.log('message target tagName', evnet.target.tagName);
    };

    const onKeyUpHandler = (evnet) => {
      console.log('evnet.key', evnet.key);
    };

    return { printEventInfo, onKeyUpHandler };
  }
};
</script>

<style lang="scss" scoped></style>
