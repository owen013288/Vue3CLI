<template>
  <div class="row">
    <div class="col-offset-2 col-8">
      <div class="mt-4 p-5">
        <h2>{{ showInfo }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      showInfo: "Vue Router 學習",
    };
  },
};
</script>

<style>
</style>