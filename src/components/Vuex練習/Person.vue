<template>
  <div>
    <h1>人員列表</h1>
    <input type="text" placeholder="請輸入名字" v-model="name" />
    <button @click="addPerson" @keydown.enter="addPerson">添加</button>
    <button @click="addPersonfromServer">添加一個伺服器來的人</button>
    <ul>
      <li v-for="p in personList" :key="p.id">名字： {{ p.name }}</li>
    </ul>
    <h3 class="text-danger">上面組件的總數為： {{ sum }}</h3>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    addPerson() {
      this.personList.push({ id: nanoid(), name: this.name });
      this.name = "";
    },
    ...mapActions("PersonOptions", {
      addPersonfromServer: "addPersonServer",
    }),
  },
  computed: {
    ...mapState("countOptions", ["sum"]),
    ...mapState("PersonOptions", ["personList"]),
  },
};
</script>

<style>
</style>