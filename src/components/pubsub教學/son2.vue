<template>
  <div class="son2">
    <h2>兒子2名稱：{{ name }}</h2>
    <h2>兒子2年齡：{{ age }}</h2>
    <button @click="sendSon2Name">把SON2Name給App</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "son2",
  data() {
    return {
      name: "bear",
      age: 16,
    };
  },
  methods: {
    sendSon2Name() {
      pubsub.publish("hello", 666);
    },
  },
};
</script>

<style>
.son2 {
  margin-top: 50px;
  padding: 5px;
  background-color: pink;
}
</style>