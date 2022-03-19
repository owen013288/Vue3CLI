<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>學習單向數據綁定：v-bind</h2>
    可以寫成v-bind:value，也可改成:value或:href，也可以在url後面加上JS表達式url.toUpperCase()
    <br />
    <input type="text" v-bind:value="url.toUpperCase()" /> <br />
    <a :href="url">google</a>
    <hr />
    <h2>學習雙向數據綁定：v-model，只能用在有value的</h2>
    <input type="text" v-model="url" /> <br />
    <hr />
    <h2>事件處理：v-on:click => @click</h2>
    <button v-on:click="alertMsg">點我提示信息</button>
    <hr />
    <h2>事件修飾符：</h2>
    1.prevent(默認行為刪除掉) <br />
    未刪除=>
    <a href="http://google.com" @click="alertMsg">點我提示信息</a>
    已刪除=>
    <a href="http://google.com" @click.prevent="alertMsg">點我提示信息</a>
    <br />
    2.stop(阻止事件冒泡)<br />
    未阻止：<br />
    <div class="demo1" @click="alertMsg">
      <button @click="alertMsg">點我</button>
    </div>
    <br />
    已阻止：<br />
    <div class="demo1" @click="alertMsg">
      <button @click.stop="alertMsg">點我</button>
    </div>
  </div>
  <br />
  3.once(只觸發一次)
  <button @click.once="alertMsg">點我</button>
  <br />
  4.capture(捕獲模式)：加誰身上，誰先執行
  <div class="box1" @click.capture="alertSomething(1)">
    div1
    <div class="box2" @click="alertSomething(2)">div2</div>
  </div>
  <hr />
  5.self(e.target是自己才執行自己)：
  <div class="box1" @click.self="alertMsg">
    div1
    <button @click="alertMsg">點我提示信息</button>
  </div>
  <hr />
  <h2>鍵盤事件keyup keydown keypress</h2>
  回車 => enter , 刪除 => delete , 退出 => esc , 空格 => space , <br />
  換行 =>tab , 上下左右 up down left right <br />
  tab要使用@keydown才能出現效果 <br />
  <input type="text" placeholder="按下鍵盤提示輸入鍵代號" @keyup="showInfo" />
  <hr />
  <h2>計算屬性</h2>
  名.slice(0, 3)，只取三碼 <br />
  姓：<input type="text" v-model="firstName" />
  <br />
  名：<input type="text" v-model="lastName" /> 全名：
  <span>{{ fullName }}</span>
  <hr />
  <h2>深度監視</h2>
  <h3>a的值是：{{ numbers.a }}</h3>
  <button @click="numbers.a++">點我讓a+1</button>
  <h3>b的值是：{{ numbers.b }}</h3>
  <button @click="numbers.b++">點我讓b+1</button>
</template>

<script>
export default {
  name: "V1",
  data() {
    return {
      title: "第一堂課",
      url: "http://google.com",
      firstName: "owen",
      lastName: "lee",
      numbers: {
        a: 1,
        b: 2,
      },
    };
  },
  computed: {
    fullName() {
      return this.lastName.slice(0, 3) + "-" + this.firstName;
    },
  },
  methods: {
    alertMsg(e) {
      alert(e.target.innerHTML);
    },
    alertSomething(num) {
      alert(num);
    },
    showInfo(e) {
      alert(e.keyCode);
    },
  },
  watch: {
    firstName(nV, oV) {
      alert(`改變前${oV}` + `改變後${nV}`);
    },
    // 這樣只有a
    // "numbers.a": {
    //   handler() {
    //     alert("a改變了");
    //   },
    // },
    // 深度監視
    numbers: {
      // immediate: true, //立即執行
      deep: true,
      handler() {
        alert("numbers改變了");
      },
    },
  },
};
</script>
<style scoped>
* {
  margin-top: 10px;
}
.demo1 {
  width: 200px;
  height: 50px;
  background-color: pink;
}
.box1 {
  height: 50px;
  background-color: pink;
}
.box2 {
  padding: 5px;
  background-color: skyblue;
}
</style>