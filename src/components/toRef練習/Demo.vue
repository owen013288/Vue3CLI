<template>
  <h1>原本數據：{{ person }}</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年齡：{{ age }}</h2>
  <h2>薪資：{{ salary }}K</h2>
  <button @click="name += '~'">更改姓名</button>
  <button @click="age++">更改年齡</button>
  <button @click="salary++">更改薪資</button>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";
export default {
  name: "Demo",
  setup() {
    let person = reactive({
      name: "owen",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    // 返回一個對象
    return {
      person,
      // name: toRef(person, "name"),
      // age: toRef(person, "age"),
      salary: toRef(person.job.j1, "salary"),
      ...toRefs(person),
    };
  },
};
</script>

<style>
</style>