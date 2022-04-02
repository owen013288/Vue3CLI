<template>
  <button @click="showDemo = !showDemo">關閉Demo組件</button>
  <Demo v-if="showDemo" />
</template>

<script>
import Demo from "./components/生命週期配合自定義hook/Demo.vue";

export default {
  name: "App",
  components: { Demo },
};
</script>