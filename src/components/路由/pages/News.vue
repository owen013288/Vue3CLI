<template>
  <div>
    <ul>
      <li :style="{ opacity }">歡迎學習Vue</li>
      <li>news001 <input type="text" /></li>
      <li>news002 <input type="text" /></li>
      <li>news003 <input type="text" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  activated() {
    this.timer = setInterval(() => {
      console.log("激活中");
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  deactivated() {
    console.log("失活中");
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>