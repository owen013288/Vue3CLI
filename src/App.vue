<template>
  <div class="demo">
    <h1>{{ msg }}</h1>
    <son-1 />
    <son-2 v-on:xxx="demo" />
  </div>
</template>

<script>
// 引入組件
import son1 from "./components/傳值教學/son1.vue";
import son2 from "./components/傳值教學/son2.vue";

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
  methods: {
    demo(value) {
      this.msg = value;
    },
  },
};
</script>

<style>
.demo {
  padding: 5px;
  background-color: gray;
}
</style>