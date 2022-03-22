<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader @addTodo="addTodo" />
      <MyList :todos="todos" />
      <MyFooter
        :todos="todos"
        @checkAllTodo="checkAllTodo"
        @clearAllTodo="clearAllTodo"
      />
    </div>
  </div>
</template>

<script>
// 引入組件
import pubsub from "pubsub-js";
import MyHeader from "./components/TODOLIST/MyHeader.vue";
import MyList from "./components/TODOLIST/MyList.vue";
import MyFooter from "./components/TODOLIST/MyFooter.vue";
export default {
  name: "App",
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
      pubId: "",
    };
  },
  components: {
    MyHeader,
    MyFooter,
    MyList,
  },
  methods: {
    //添加一個todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    //勾選或取消勾選一個todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    updateTodo(obj) {
      this.todos.forEach((todo) => {
        if (todo.id === obj.id) todo.title = obj.value;
      });
    },
    //刪除一個todo
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    //全選或全不選
    checkAllTodo(done) {
      this.todos.forEach((todoObj) => {
        todoObj.done = done;
      });
    },
    //清除所有已經完成的Todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    this.eventBus.on("checkTodo", this.checkTodo);
    this.eventBus.on("updateTodo", this.updateTodo);
    // this.eventBus.on("deleteTodo", this.deleteTodo);
    this.pubId = pubsub.subscribe("deleteTodo", (_, id) => {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    });
  },
  beforeUnmount() {
    this.eventBus.off("checkTodo");
    this.eventBus.off("updateTodo");
    // this.eventBus.off("deleteTodo");
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(103, 115, 180);
  margin-right: 5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>