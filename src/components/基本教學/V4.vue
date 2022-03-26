<template>
  <div>
    <div v-show="isprops">
      <h2>props：父傳子拿到的不能改</h2>
      {{ name }} 是 {{ age }}歲，虛歲 {{ age2 }}
      <h3>硬要改的話，使用自己的data內的數值</h3>
      <label>{{ myName }}</label>
      <button @click="updateName">點選更改</button>
    </div>
    <h2>mixin</h2>
  </div>
</template>

<script>
//引入一個混合
import { mixin } from "../../assets/js/mixin";
export default {
  //簡單接收
  //props: ["name", "age"],

  //接收時定義類型
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      default: 99, // 不傳就默認
    },
    age2: {
      type: String,
      default: 99, // 不傳就默認
    },
    sex: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      myName: this.name,
      isprops: true,
    };
  },
  mixins: [mixin],
};
</script>

<style>
</style>