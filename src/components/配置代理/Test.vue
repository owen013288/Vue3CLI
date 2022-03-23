<template>
  <button @click="getWeather">獲取天氣信息</button>
</template>

<script>
import axios from "axios";
export default {
  name: "Test",
  data() {
    return {};
  },
  methods: {
    getWeather() {
      axios.get("http://localhost:8081/api/weatherforecast").then(
        (response) => {
          // response 響應對象，資料在response.data
          console.log("成功", response.data);
        },
        (error) => {
          console.log("失敗", error.message);
        }
      );
    },
  },
};
</script>

<style>
</style>