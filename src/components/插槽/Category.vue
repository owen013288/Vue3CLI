<template>
  <div class="category">
    <h3>{{ title }}分類</h3>
    <!-- 定義一個插槽(等組件的使用者填坑) -->
    <slot>默認插槽：裡面放默認，當使用者沒有傳遞具體結構時出現</slot>
    <slot name="footer"
      >具名插槽：裡面放默認，當使用者沒有傳遞具體結構時出現</slot
    >
    <slot name="gamess" :gamess="gamess">作用域插槽</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      gamess: ["紅色警戒", "穿越火線", "勁舞團", "超級瑪莉"],
    };
  },
};
</script>

<style lang="css" scoped>
.category {
  background-color: pink;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>