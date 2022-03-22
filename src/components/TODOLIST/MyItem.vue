<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        type="text"
        v-show="todo.isEdit"
        :value="todo.title"
        @blur="handleBlur(todo, $event)"
        @keyup.enter="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">刪除</button>
    <button
      v-show="!todo.isEdit"
      class="btn btn-edit"
      @click="handleEdit(todo)"
    >
      編輯
    </button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  //聲明接收todo對象
  props: ["todo"],
  methods: {
    handleCheck(id) {
      this.eventBus.emit("checkTodo", id);
    },
    handleDelete(id) {
      if (confirm("確定刪除嗎？")) {
        // this.eventBus.emit("deleteTodo", id);
        pubsub.publish("deleteTodo", id);
      }
    },
    handleEdit(todo) {
      // vue2作法
      // this.$set(todo, 'isEdit', true);
      // vue3作法 https://stackoverflow.com/questions/69780482/how-do-i-do-vue-set-in-vue-3
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        todo["isEdit"] = true;
      }
      //等到下一次DOM完成後，才觸發
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (e.target.value.trim() === "") return;
      // vue3 好像只能傳一個參數，於是就用object的方式傳遞
      this.eventBus.emit("updateTodo", { id: todo.id, value: e.target.value });
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>