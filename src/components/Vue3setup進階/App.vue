<template>
  <Demo @hello="showHelloMsg" msg="您好啊" school="owen">
    <template v-slot:qwe>
      <span>OWEN</span>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/Vue3setup進階/Demo.vue";
export default {
  name: "App",
  components: {
    Demo,
  },
  setup() {
    function showHelloMsg(value) {
      alert(`您好啊！您觸發了hello事件，我收到的參數是：${value}`);
    }

    // 返回一個對象
    return {
      showHelloMsg,
    };
  },
};
</script>

<style>
</style>