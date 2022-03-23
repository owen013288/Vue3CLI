<template>
  <div class="demo">
    <h1>{{ msg }}</h1>
    <son-1 />
    <son-2 />
  </div>
</template>

<script>
import son1 from "./components/pubsub教學/son1";
import son2 from "./components/pubsub教學/son2";
export default {
  name: "App",
  data() {
    return {
      msg: "您好啊！",
    };
  },
  components: {
    son1,
    son2,
  },
};
</script>

<style>
.demo {
  padding: 5px;
  background-color: gray;
}
</style>