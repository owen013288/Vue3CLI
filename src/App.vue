<template>
  <h1>一個人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年齡：{{ age }}</h2>
  <h2>工作種類：{{ job.type }}</h2>
  <h2>工作薪水：{{ job.salary }}</h2>
  <button @click="SayHello()">說話(Vue3)</button>
  <button @click="changeInfo()">修改內容(Vue3)</button>
</template>

<script>
// import { h } from "vue";
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    let name = ref("owen");
    let age = ref(18);
    let job = ref({
      type: "前端工程師",
      salary: "30K",
    });

    function SayHello() {
      alert(`我叫${name},今年${age}歲`);
    }

    function changeInfo() {
      name.value = "李四";
      age.value = 48;
      job.value.type = "後端工程師";
      job.value.salary = "50K";
      console.log(name, age);
    }

    // 返回一個對象
    return {
      name,
      age,
      SayHello,
      changeInfo,
      job,
    };
    // 返回一個渲染函數(了解)
    // return () => h('h1','owen');
  },
};
</script>

<style>
</style>