<template>
  <div class="son1">
    <h2>兒子1名稱：{{ name }}</h2>
    <h2>兒子1年齡：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "son1",
  data() {
    return {
      name: "owne",
      age: 18,
    };
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