<template>
  <div>My message to the world is:{{ msg }}</div>
  <div>Let's count:{{ count }}</div>
  <div>headtitle is:{{ headTitle }}</div>
  <input placeholder="please input msg" type="text" @input="change" />
  <button @click="increase">increase</button>
  <button @click="decrease">decrease</button>
</template>

<script setup>
import { ref, computed } from "vue";

let msg = ref("Hello World!");
let count = ref(0);
let headTitle = computed(() => `${msg.value}~${count.value}`);

const change = (e) => {
  msg.value = e.target.value;
};

const increase = () => {
  count.value++;
};

const decrease = () => {
  count.value--;
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

<style lang="scss" scoped></style>
