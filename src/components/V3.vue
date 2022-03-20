<template>
  <div>
    <div v-if="notshow">
      <h2>時間過濾教學</h2>
      <h3>透過計算屬性獲取現在是：{{ ctime }}</h3>
      <!-- 但在vue3.x已經放棄過濾器，使用上面方法 -->
      <!-- <h3>透過過濾獲取現在是：{{ time | formatDate }}</h3> -->
      <h3>透過方法獲取現在是：{{ timeFormater(Date.now()) }}</h3>
      <hr />
      <h2>v-text v-html v-cloak v-pre</h2>
      <div v-text="textStr"></div>
      <div v-html="htmlStr"></div>
      怕頁面產生{{}} 這樣的場景，這時候要用v-cloak，Vue一接管就刪除
      <h3 v-cloak>{{ name }}</h3>
      v-pre不解析
      <h3 v-pre>{{ name }}</h3>
      <hr />
      <h2>自定義指令</h2>
      <h3>當前的n值是 <span v-text="n"></span></h3>
      <h3>放大10倍的n值是 <span v-big-number="n"></span></h3>
      <button @click="n++">點我n+1</button>
      <br /><br /><br />
      <input type="text" v-fbind:value="n" />
    </div>
    <h2>生命週期</h2>
  </div>
</template>

<script>
import moment from "moment"; //引入moment

export default {
  data() {
    return {
      time: Date.now(), //時間戳
      textStr: "<h3>哈哈</h3>",
      htmlStr: "<h3>哈哈</h3>",
      name: "測試v-cloak",
      n: 1,
      notshow: false,
    };
  },
  computed: {
    ctime() {
      return moment(this.time).format("YYYY-MM-DD HH:mm:ss");
    },
  },
  methods: {
    timeFormater(time) {
      return moment(time).format("YYYY-MM-DD HH:mm:ss");
    },
  },
  directives: {
    bigNumber(element, binding) {
      element.innerText = binding.value * 10;
    },
    fbind: {
      // 以下是3.x版本，以前是bind inserted update
      //https://v3.cn.vuejs.org/guide/custom-directive.html#%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0
      //在绑定元素的父组件被挂载前调用。
      mounted(e, b) {
        e.value = b.value;
      },
      //在绑定元素的 attribute 或事件监听器被应用之前调用。
      //在指令需要附加在普通的 v-on 事件监听器调用前的事件监听器中时，
      //这很有用。
      created(e) {
        e.focus();
      },
      //在更新包含组件的 VNode 之前调用
      beforeUpdate(e, b) {
        e.value = b.value;
        e.focus();
      },
    },
  },
};
</script>
<style scoped>
[v-cloak] {
  display: none;
}
</style>