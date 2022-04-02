<template>
  <h1>一個人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年齡：{{ person.age }}</h2>
  <button @click="test()">測試觸發一下Demo組件的Hello事件</button>
  <h2>插槽</h2>
  <slot name="qwe" />
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  props: ["msg", "school"],
  emits: ["hello"],
  setup(props, context) {
    console.log("---setup---,props", props);
    console.log("---setup---,context", context);
    console.log("---setup---,context.attrs", context.attrs);
    console.log("---setup---,context.emit", context.emit);
    console.log("---setup---,context.slots", context.slots);
    let person = reactive({
      name: "owen",
      age: 18,
    });

    function test() {
      context.emit("hello", 666);
    }

    // 返回一個對象
    return {
      person,
      test,
    };
  },
};
</script>

<style>
</style>