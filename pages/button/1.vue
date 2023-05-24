<template>
  <el-button @click="$router.push('/')">Return to homepage</el-button>
  <div class="btn-demo" @click="handleClick">
    <div class="btn one">1</div>
    <div class="btn two">2</div>
    <div class="btn center">Center</div>
    <div class="btn three">3</div>
    <div class="btn four">4</div>
  </div>
  <div class="test"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
useHead({
  title: "Button Demo - 1",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Button Demo",
    },
  ],
});
function handleClick(e) {
  ElMessage({
    message: `Button Clicked: ${e.target.classList[1].toUpperCase()}`,
    type: "success",
  });
}
</script>

<style lang="scss" scoped>
.btn-demo {
  padding: 60px;
  display: grid;
  grid-template-columns: repeat(3, minmax(50px, 80px));
  grid-template-rows: repeat(3, minmax(50px, 80px));
  grid-template-areas:
    "A B B"
    "A D E"
    "C C E";
  gap: 30px;
  .btn {
    display: inline-flex;
    background-color: #007bff;
    color: #fff;
    border: none;
    text-align: center;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
    &.one {
      grid-area: A;
      clip-path: polygon(100% 25%, 100% 100%, 50% 75%, 0 100%, 0 25%, 50% 0);
      transform: rotate(45deg);
    }
    &.two {
      grid-area: B;
      transform: rotate(45deg);
      clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
    }
    &.center {
      grid-area: D;
      border-radius: 16px;
      color: #585858;
      background-color: #fff200;
    }
    &.three {
      grid-area: C;
      transform: rotate(45deg);
      clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
    }
    &.four {
      grid-area: E;
      transform: rotate(45deg);
      clip-path: polygon(100% 0, 100% 75%, 50% 100%, 0 75%, 0 0, 50% 25%);
    }
  }
}
</style>
