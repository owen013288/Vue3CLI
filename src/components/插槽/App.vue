<template>
  <div class="container">
    <Category :title="'美食'">
      <!-- 哪邊解析，哪邊調整樣式 -->
      <img src="./assets/logo.png" alt="" />
      <template v-slot:footer>
        <a href="http://google.com">前往美食</a>
      </template>
    </Category>
    <Category :title="'遊戲'">
      <!-- 哪邊解析，哪邊調整樣式 -->
      <ul>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
      <template v-slot:footer>
        <div class="container">
          <a href="http://google.com">單機遊戲</a>
          <a href="http://google.com">網路遊戲</a>
        </div>
      </template>
      <template v-slot:gamess="props">
        <ul>
          <li v-for="(item, index) in props.gamess" :key="index">
            {{ item }}
          </li>
        </ul>
      </template>
    </Category>
    <Category :title="'電影'">
      <!-- 哪邊解析，哪邊調整樣式 -->
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <template v-slot:footer>
        <div class="container">
          <a href="http://google.com">經典</a>
          <a href="http://google.com">熱門</a>
          <a href="http://google.com">推薦</a>
        </div>
        <h4 style="text-align: center">歡迎來到影院觀看</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/插槽/Category.vue";
export default {
  name: "App",
  data() {
    return {
      foods: ["火鍋", "燒烤", "龍蝦", "牛排"],
      games: ["紅色警戒", "穿越火線", "勁舞團", "超級瑪莉"],
      films: ["《教父》", "《拆彈專家》", "《記憶拼圖》", "《布局》"],
    };
  },
  components: {
    Category,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.container {
  display: flex;
  /* 主軸對齊 */
  justify-content: space-around;
}

video {
  width: 100%;
}
img {
  width: 100%;
}
</style>