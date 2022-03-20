<template>
  <V1 />
  <hr />
  <V2 />
  <hr />
  <V3 />
</template>

<script>
import V1 from "./components/V1";
import V2 from "./components/V2";
import V3 from "./components/V3";

export default {
  name: "App",
  components: {
    V1,
    V2,
    V3,
  },
};
</script>

<style>
</style>
