<template>
  <div>
    <div id="modifiers">
      <div @click.capture="clickDiv">
        <!-- capture를 사용하면 가장 먼저 동작을 하는데, 캡처링이후 버블링이 되는 순서이기에 기존 콘솔의 내용은 sapn,p,div순으로 찍히게 된다. 하지만 캡처링을 하게되면 div, p, span순으로 변경된다. -->
        DIV 영역
        <p @click="clickP">
          P 영역
          <!-- <span @click.stop="clickSpan">span 영역</span> -->
          <span @click="clickSpan">span 영역</span>
        </p>
      </div>
    </div>
    <a href="https://naver.com" @click.prevent="clickA">a 영역</a>
    <button @click.once="clickDiv">once</button>
  </div>
</template>

<script>
export default {
  setup() {
    const clickDiv = () => {
      console.log('clickDiv');
    };
    const clickP = () => {
      console.log('clickP');
    };
    const clickSpan = () => {
      console.log('clickSpan');
      // e.stopPropagation();
      // 이벤트 버빌링으로 인해, span을 눌렀지만 p와 div까지 함께 출력이 되는데 이를 막기위한 메서드
      // 이런식으로 작성해도 되지만 .stop라는 것을 vue에서 제공해 주는데 template안에 작성하면 된다.  @click.stop 이런식으로
      // alert('좋아요');
    };
    const clickA = () => {
      // e.preventDefault();
      // 클릭이후 alert이 작동하고 이후에 페이지 이동을 하게 되는데 이를 막고 alert만 작동하게 하는 메서드
      // vue에서 제공하는 기능은 .prevent이다.
      console.log('clickA');
      // alert('A눌렀음');
    };

    return { clickDiv, clickP, clickSpan, clickA };
  }
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
  padding: 40px;
}
#modifiers div {
  background-color: #ccc;
}
#modifiers p {
  background-color: #999;
}
#modifiers span {
  background-color: #666;
  display: block;
}
</style>
