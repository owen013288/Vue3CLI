<template>
  <h1>一個人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年齡：{{ person.age }}</h2>
  <h2>工作種類：{{ person.job.type }}</h2>
  <h2>工作薪水：{{ person.job.salary }}</h2>
  <h2>測試數據c： {{ person.job.a.b.c }}</h2>
  <h2>嗜好： {{ person.hobby }}</h2>
  <button @click="SayHello()">說話(Vue3)</button>
  <button @click="changeInfo()">修改內容(Vue3)</button>
  <hr />
  姓：<input type="text" v-model="person.firstName" />
  <br />
  名：<input type="text" v-model="person.lastName" />
  <br />
  全名：<input type="text" v-model="person.fullName" />
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "App",
  setup() {
    let person = reactive({
      name: "owen",
      age: 18,
      job: {
        type: "前端工程師",
        salary: "30K",
        a: {
          b: {
            c: 666,
          },
        },
      },
      a: {
        b: {
          c: 666,
        },
      },
      hobby: ["抽菸", "喝酒", "吃飯"],
      firstName: "張",
      lastName: "三",
    });

    function SayHello() {
      alert(`我叫${person.name},今年${person.age}歲`);
    }

    // 計算屬性-簡寫
    // person.fullName = computed(() => {
    //   return person.firstName + "-" + person.lastName;
    // });

    // 計算屬性-完整
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(val) {
        const nameArr = val.split("-");
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      },
    });

    function changeInfo() {
      person.name = "李四";
      person.age = 48;
      person.job.type = "後端工程師";
      person.job.salary = "50K";
      person.job.a.b.c = 999;
      person.hobby[0] = "吃飯";
    }

    // 返回一個對象
    return {
      person,
      SayHello,
      changeInfo,
    };
  },
};
</script>

<style>
</style>