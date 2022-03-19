<template>
  <div>
    <div style="overflow: hidden">
      <h2>:class與:style 樣式結構搭配條件渲染</h2>
      <button @click="change()">點我隱藏/顯示</button>
      <br />
      <div :class="a" v-if="flag"></div>
      <div :style="divStyle" v-show="flag"></div>
    </div>
    <div v-if="flag">
      <h2>列表渲染</h2>
      <ul v-for="(p, index) in persons" :key="p.id">
        <li>{{ index }} => 姓名{{ p.name }}，年齡{{ p.age }}</li>
      </ul>
      <hr />
    </div>
    <h2>收集表單</h2>
    <form @submit.prevent="demo">
      帳號：
      <input type="text" v-model.trim="userInfo.account" /> <br />
      密碼： <input type="password" v-model="userInfo.password" /> <br />
      年齡： <input type="number" v-model.number="userInfo.age" /> <br />
      性別： 男
      <input type="radio" name="sex" v-model="userInfo.sex" value="female" /> 女
      <input type="radio" name="sex" v-model="userInfo.sex" value="male" />
      <br />
      愛好： 學習
      <input type="checkbox" v-model="userInfo.hobby" value="study" /> 打遊戲
      <input type="checkbox" v-model="userInfo.hobby" value="game" /> 吃飯
      <input type="checkbox" v-model="userInfo.hobby" value="eat" />
      <br />
      所屬校區
      <select v-model="userInfo.city">
        <option value="">請選擇</option>
        <option value="north">台北</option>
        <option value="middle">台中</option>
        <option value="south">台南</option>
      </select>
      <br />
      其他信息<br />
      <textarea v-model.lazy="userInfo.other"></textarea><br />
      <input type="checkbox" v-model="userInfo.accept" /> 閱讀並接受
      <a href="#">用戶協議</a>
      <button>提交</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: "a",
      divStyle: {
        height: "100px",
        width: "100px",
        backgroundColor: "blue",
        float: "left",
      },
      flag: true,
      persons: [
        {
          id: 1,
          name: "張三",
          age: 18,
        },
        {
          id: 2,
          name: "李四",
          age: 19,
        },
        {
          id: 3,
          name: "王八",
          age: 20,
        },
      ],
      userInfo: {
        account: "",
        password: "",
        age: "",
        sex: "",
        hobby: [],
        city: "north",
        other: "",
        accept: "",
      },
    };
  },
  methods: {
    change() {
      this.flag = !this.flag;
    },
    demo() {
      console.log(JSON.stringify(this.userInfo));
    },
  },
};
</script>
<style scoped>
.a {
  float: left;
  height: 100px;
  width: 100px;
  background-color: pink;
}
</style>