<template>
  <h1>一個人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年齡：{{ age }}</h2>
  <button @click="SayHello()">說話(Vue3)</button>
</template>

<script>
// import { h } from "vue";
export default {
  name: "App",
  setup() {
    let name = "owen";
    let age = 18;

    function SayHello() {
      alert(`我叫${name},今年${age}歲`);
    }

    // 返回一個對象
    return {
      name,
      age,
      SayHello,
    };
    // 返回一個渲染函數(了解)
    // return () => h('h1','owen');
  },
};
</script>

<style>
</style>