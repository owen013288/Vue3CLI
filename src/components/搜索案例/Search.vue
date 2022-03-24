<template>
  <div>
    <section class="jumbotron">
      <h3 class="jubotron-heading">搜尋使用者</h3>
      <div>
        <input type="text" v-model="keyWord" placeholder="請輸入姓名" />&nbsp;
        <button @click="SearchUsers" class="btn btn-success">搜尋</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    SearchUsers() {
      //請求前先更新List的數據
      this.eventBus.emit("updateListData", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      axios.get("https://api.github.com/search/users?q=" + this.keyWord).then(
        (response) => {
          console.log(response.data.items);
          this.eventBus.emit("updateListData", {
            isLoading: false,
            errMsg: "",
            users: response.data.items,
          });
        },
        (error) => {
          this.eventBus.emit("updateListData", {
            isLoading: false,
            errMsg: error.message,
            users: [],
          });
        }
      );
    },
  },
};
</script>

<style>
</style>