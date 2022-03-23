<template>
  <div>
    <button @click="isShow = !isShow">顯示/隱藏</button>
    <transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__fadeIn"
      leave-active-class="animate__backOutDown"
    >
      <h2 v-show="isShow">animate__animated animate__bounce</h2>
    </transition>
  </div>
</template>

<script>
import "animate.css";
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h2 {
  background-color: pink;
}
</style>