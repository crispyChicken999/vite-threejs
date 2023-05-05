<template>
  <el-button @click="$router.push('three')">Switch To ThreeJs Playground</el-button>
  <div class="msg">My message to the world is:{{ msg }}</div>
  <div class="count">Let's count:{{ count }}</div>
  <div class="headtitle">Headtitle is:{{ headTitle }}</div>
  <div class="input-area">
    <input
      class="inout"
      placeholder="please input msg"
      type="text"
      @input="change"
    />
    <button class="button" @click="increase">increase</button>
    <button class="button" @click="decrease">decrease</button>
  </div>
  <div class="progress">
    <span>Boxs wrapper max width is:</span>
    <input
      min="0"
      max="100"
      type="range"
      name="progress"
      id="my-progress"
      v-model="progress"
    />
    <div class="progress-value">{{ progress }}%</div>
  </div>
  <div
    class="dynamic-boxs"
    :style="{
      '--max-width': `${progress}%`,
    }"
  >
    <div class="box" v-for="item in count">{{ item }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

let msg = ref("Hello World!");
let count = ref(9);
let progress = ref(80);
let headTitle = computed(() => `${msg.value}~${count.value}`);

const change = (e) => {
  msg.value = e.target.value;
};

const increase = () => {
  count.value++;
};

const decrease = () => {
  count.value > 1 ? count.value-- : count.value;
};

useHead({
  title: headTitle,
  meta: [
    {
      hid: "description",
      name: "description",
      content: "My custom description",
    },
  ],
});
</script>

<style lang="scss" scoped>
.msg {
  color: red;
}
.count {
  color: blue;
}
.headtitle {
  color: green;
}
.input-area {
  gap: 10px;
  display: flex;
  margin-top: 10px;
  .input {
    width: 200px;
    height: 30px;
    display: block;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  .button {
    width: 100px;
    height: 30px;
    cursor: pointer;
    padding: 0 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    &:hover {
      color: #fff;
      border-color: #177bde;
      background-color: #1989fa;
    }
  }
}

.progress {
  gap: 20px;
  display: flex;
  margin-top: 20px;
  align-items: center;
}

.dynamic-boxs {
  display: grid;
  grid-gap: 20px;
  margin-top: 20px;
  max-width: var(--max-width);
  grid-template-columns: repeat(auto-fill, minmax(100px, 200px));

  .box {
    display: flex;
    height: 200px;
    font-size: 26px;
    font-weight: 700;
    color: #354e6b;
    border-radius: 5px;
    align-items: center;
    transition: all 0.3s;
    justify-content: center;
    background-color: #aed0ee;
    &:hover {
      color: #c67915;
      background-color: #fedc5e;
      transform: translate(5px, -5px);
      box-shadow: rgba(77, 143, 209, 0.4) -5px 5px,
        rgba(77, 143, 209, 0.3) -10px 10px, rgba(77, 143, 209, 0.2) -15px 15px,
        rgba(77, 143, 209, 0.1) -20px 20px, rgba(77, 143, 209, 0.05) -25px 25px;
    }
    &:nth-child(odd) {
      &:hover {
        transform: translate(0, 0);
        box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px,
          rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px,
          rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px;
      }
    }
    &:last-child {
      &:hover {
        transform: translate(40px, -40px);
        box-shadow: blue 0px 0px 0px 2px inset,
          rgb(255, 255, 255) -10px 10px 0px -3px, rgb(31, 193, 27) -10px 10px,
          rgb(255, 255, 255) -20px 20px 0px -3px, rgb(255, 217, 19) -20px 20px,
          rgb(255, 255, 255) -30px 30px 0px -3px, rgb(255, 156, 85) -30px 30px,
          rgb(255, 255, 255) -40px 40px 0px -3px, rgb(255, 85, 85) -40px 40px;
      }
    }
  }
}
</style>
