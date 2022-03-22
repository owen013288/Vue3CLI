<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" v-model="IsAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> /全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任務</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  data() {
    return {};
  },
  props: ["todos"],
  computed: {
    total() {
      return this.todos.length;
    },
    doneTotal() {
      // 第一種
      // let num = 0;
      // this.todos.forEach(obj => {
      //     if(obj.done) num++
      // });
      // return num;

      // 第二種reduce統計 => pre 前一次的總結(預設為最後一個0), todo  對象, return 為最後一次總結
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
    IsAll: {
      get() {
        return this.total === this.doneTotal && this.total > 0;
      },
      set(value) {
        this.$emit("checkAllTodo", value);
      },
    },
  },
  methods: {
    clearAll() {
      confirm("是否清除已完成？") ? this.$emit("clearAllTodo") : "";
    },
  },
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>