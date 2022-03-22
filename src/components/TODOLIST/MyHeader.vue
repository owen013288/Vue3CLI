<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="請輸入你的任務名稱，按下Enter確認"
      v-model="title"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
//終端機輸入npm i nanoid // vue3好像自動有
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    add() {
      //驗證數據
      if (!this.title.trim()) return alert("輸入不得為空");
      const todoObj = {
        id: nanoid(), // npm i nanoid // vue3好像自動有
        title: this.title,
        done: false,
      };
      //通知APP組件添加數據
      this.$emit("addTodo", todoObj);
      //清空輸入
      this.title = "";
    },
  },
};
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>