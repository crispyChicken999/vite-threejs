<template>
  <el-button @click="$router.push('/')">Return to homepage</el-button>
  <div class="btn-demo-2" @click="handleClick">
    <button class="one"></button>
    <button class="two"></button>
    <button class="three"></button>
    <button class="four"></button>
    <button class="center">
      <el-icon><Setting /></el-icon>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
useHead({
  title: "Button Demo - 2",
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
    message: `Button Clicked: ${e.target.classList[0].toUpperCase()}`,
    type: "success",
  });
}
onMounted(() => {});
</script>

<style lang="scss" scoped>
.btn-demo-2 {
  position: relative;
  width: 500px;
  height: 500px;
  background: #021224;
  border-radius: 50%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    background-color: #021224;
    top: 50%;
    left: 50%;
    width: 370px;
    height: 370px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  button {
    width: 100%;
    height: 100%;
    background: #103653;
    color: #fff;
    border: none;
    position: relative;
    text-align: center;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.3s;
    &:hover {
      background-color: #15466b;
      cursor: pointer;
    }
    &:first-of-type {
      border-top-left-radius: 250px;
      &:hover {
        background-image: url("@/assets/svg/home_imge_lt.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-color: transparent;
      }
      &::after {
        content: "";
        position: absolute;
        width: 50px;
        height: 80px;
        background-color: #021224;
        z-index: 99;
        top: 0;
        right: -25px;
        pointer-events: none;
        // 箭头向右
        clip-path: polygon(60% 0, 93% 43%, 56% 84%, 7% 85%, 42% 40%, 10% -1%);
      }
    }
    &:nth-of-type(2) {
      border-top-right-radius: 250px;
      &:hover {
        background-image: url("@/assets/svg/home_imge_rt.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-color: transparent;
      }
      &::after {
        content: "";
        position: absolute;
        width: 80px;
        height: 50px;
        background-color: #021224;
        z-index: 99;
        bottom: -25px;
        right: 0px;
        pointer-events: none;
        // 箭头向上
        cursor: initial;
        clip-path: polygon(56% 11%, 109% 50%, 107% 99%, 58% 60%, 14% 101%, 15% 50%);
      }
    }
    &:nth-of-type(3) {
      border-bottom-left-radius: 250px;
      &:hover {
        background-image: url("@/assets/svg/home_imge_lb.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-color: transparent;
      }
      &::before {
        content: "";
        position: absolute;
        width: 50px;
        height: 80px;
        background-color: #021224;
        z-index: 99;
        bottom: 0;
        right: -25px;
        pointer-events: none;
        // 箭头向右
        clip-path: polygon(59% 17%, 98% 56%, 67% 100%, -1% 125%, 45% 56%, 7% 14%);
      }
      &::after {
        content: "";
        position: absolute;
        width: 80px;
        height: 50px;
        background-color: #021224;
        z-index: 99;
        top: -25px;
        left: 0px;
        pointer-events: none;
        // 箭头向上
        clip-path: polygon(43% -1%, 83% 37%, 84% 90%, 41% 50%, -18% 101%, -27% 50%);
      }
    }
    &:nth-of-type(4) {
      border-bottom-right-radius: 250px;
      &:hover {
        background-image: url("@/assets/svg/home_imge_rb.svg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-color: transparent;
      }
    }
    &:last-of-type {
      position: absolute;
      width: 160px;
      height: 160px;
      z-index: 999;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      color: #fff;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translate(-50%, -50%);
      font-size: 48px;
      transition: all 0.3s;
      background-color: #152a3b;
      box-shadow: inset 0 0 10px 2px #06b4c9;
      &:hover {
        color: #06b4c9;
        box-shadow: inset 0px 0px 18px 7px #01e9ff;
      }
    }
  }
}
</style>
