<template>
  <div>
    <h1>當前求和為: {{ sum }}</h1>
    <h1>放大十倍的當前求和為: {{ bigSum }}</h1>
    <h1>我在: {{ school }}，學習: {{ subject }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increament(n)">+</button>
    <button @click="decreament(n)">-</button>
    <button @click="increamentOdd(n)">當前求和為奇數再加</button>
    <button @click="increamentWait(n)">等一等再加</button>
    <h3 class="text-danger">下方組件的總人數是： {{ personList.length }}</h3>
  </div>
</template>

<script>
// 映射State
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用戶選擇的數字初始為1
    };
  },
  computed: {
    // 對象寫法
    // ...mapState({ sum: "sum", school: "school", subject: "subject" }),
    // 數組寫法
    ...mapState("countOptions", ["sum", "school", "subject"]),
    ...mapState("PersonOptions", ["personList"]),

    ...mapGetters("countOptions", ["bigSum"]),
  },
  methods: {
    // increament() {
    //   this.$store.commit("ADD", this.n);
    // },
    // decreament() {
    //   this.$store.commit("REDUCE", this.n);
    // },
    // 以上變成以下，但要記得使用increament及decreament時要丟參數
    // 然後因為不同名，所以不用數組寫法
    ...mapMutations("countOptions", {
      increament: "ADD",
      decreament: "REDUCE",
    }),

    // increamentOdd() {
    //   this.$store.dispatch("addOdd", this.n);
    // },
    // increamentWait() {
    //   this.$store.dispatch("addWait", this.n);
    // },
    // 以上變成以下，但要記得使用increamentOdd及increamentWait時要丟參數
    // 然後因為不同名，所以不用數組寫法
    ...mapActions("countOptions", {
      increamentOdd: "addOdd",
      increamentWait: "addWait",
    }),
  },
};
</script>

<style>
button {
  margin: 10px;
}
</style>