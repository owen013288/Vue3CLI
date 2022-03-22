<template>
  <div class="son2">
    <h2>兒子2名稱：{{ name }}</h2>
    <h2>兒子2年齡：{{ age }}</h2>
    <button @click="sendSon2Name">把SON2Name給App</button>
  </div>
</template>

<script>
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
      //   觸發xxx事件，並給予數據
      this.$emit("xxx", this.name);
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