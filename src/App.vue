<template>
  <div v-show="false">
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
    <hr />
  </div>
  <h2>當前求和為：{{ sum }}</h2>
  <button @click="sum++">點我+1</button>
  <hr />
  <h2>當前信息為：{{ msg }}</h2>
  <button @click="msg += '!'">改變信息</button>
  <hr />
  <h2>當前姓名為：{{ person.name }}</h2>
  <h2>當前年齡為：{{ person.age }}</h2>
  <h2>person.job.a.b.c：{{ person.job.a.b.c }}K</h2>
  <button @click="person.name += '!'">修改姓名</button>
  <button @click="person.age++">增長年齡</button>
  <button @click="person.job.a.b.c++">增長person.job.a.b.c</button>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";
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
    let sum = ref(0);
    let msg = ref("您好啊!");

    //#region 方法
    function changeInfo() {
      person.name = "李四";
      person.age = 48;
      person.job.type = "後端工程師";
      person.job.salary = "50K";
      person.job.a.b.c = 999;
      person.hobby[0] = "吃飯";
    }
    function SayHello() {
      alert(`我叫${person.name},今年${person.age}歲`);
    }
    //#endregion

    //#region 計算屬性
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
    //#endregion

    //#region 監視屬性
    //情況一：監視ref所定義的一個響應式數據
    // watch(sum, (newValue, oldValue) => {
    //   console.log("sum被改變了", newValue, oldValue);
    // });

    //情況二：監視ref所定義的多個響應式數據
    // watch(
    //   [sum, msg],
    //   (newValue, oldValue) => {
    //     console.log("sum或msg被改變了", newValue, oldValue);
    //   },
    //   { immediate: true }
    // );

    //情況三：監視reactive所定義的多個響應式數據
    //此處oldValue也是新的
    //強制開啟深度監視
    // watch(person, (newValue, oldValue) => {
    //   console.log("person變化了", newValue, oldValue);
    // });

    //情況四：監視reactive所定義的一個響應式數據中的某個屬性
    //這邊的oldValue才是舊的
    // watch(
    //   () => person.age,
    //   (newValue, oldValue) => {
    //     console.log("person.age變化了", newValue, oldValue);
    //   }
    // );

    //情況五：監視reactive所定義的一個響應式數據中的某些屬性
    // watch([() => person.name, () => person.age], (newValue, oldValue) => {
    //   console.log("person.name或  person.age變化了", newValue, oldValue);
    // });

    //特殊情況
    // watch(
    //   () => person.job,
    //   (newValue, oldValue) => {
    //     console.log("person.job變化了", newValue, oldValue);
    //   },
    //   { deep: true } //此處由於是監視reactive對象中的某個屬性，所以deep配置有效
    // );
    //#endregion

    //#region watchEffect
    //watchEffect所指定的回調中用到的數據，只要發生變化，則直接重新執行回調
    watchEffect(() => {
      //配置了，所以sum與person.job.a.b.c改變都能監視到
      const x1 = sum.value;
      const x2 = person.job.a.b.c;
      console.log("watchEffect");
    });
    //#endregion
    // 返回一個對象
    return {
      person,
      SayHello,
      changeInfo,
      sum,
      msg,
    };
  },
};
</script>