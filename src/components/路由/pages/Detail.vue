<template>
  <ul>
    <li>消息編碼：{{ id }}</li>
    <li>消息標題：{{ title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props: ["id", "title"],
};
</script>

<style>
</style>