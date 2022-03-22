<template>
  <div class="son1">
    <h2>兒子1名稱：{{ name }}</h2>
    <h2>兒子1年齡：{{ age }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "son1",
  data() {
    return {
      name: "owne",
      age: 18,
      pubId: "",
    };
  },
  mounted() {
    this.pubId = pubsub.subscribe("hello", (functionName, value) => {
      console.log(this);
      console.log("有人發布了hello消息，hello回調執行", value);
    });
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style>
.son1 {
  margin-top: 50px;
  padding: 5px;
  background-color: skyblue;
}
</style>