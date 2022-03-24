<template>
  <div>
    <!-- 展示用戶列表 -->
    <div
      class="card"
      v-show="info.users.length"
      v-for="u in info.users"
      :key="u.id"
    >
      <a :href="u.html_url" target="_blank">
        <img :src="u.avatar_url" style="width: 100px" alt="" />
      </a>
      <p class="card-text">{{ u.login }}</p>
    </div>
    <!-- 展示歡迎詞 -->
    <div v-show="info.isFirst">
      <h1>歡迎使用！</h1>
    </div>
    <!-- 展示加載中 -->
    <div v-show="info.isLoading">
      <h1>加載中...</h1>
    </div>
    <!-- 展示錯誤訊息 -->
    <div v-show="info.errMsg">
      <h1>{{ info.errMsg }}</h1>
    </div>
    <!-- 展示請求成功但無資料 -->
    <div
      v-show="
        !info.errMsg && !info.users.length && !info.isFirst && !info.isLoading
      "
    >
      <h1>無資料</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        errMsg: "",
        users: [],
      },
    };
  },
  mounted() {
    this.eventBus.on("updateListData", (result) => {
      // 這樣我的isFirst就會不見，因為result沒有
      // this.info = result;
      // 所以使用下列方式操作：通過自變量的形式去合併自變量
      this.info = { ...this.info, ...result };
    });
  },
};
</script>

<style lang="css" scoped>
.album {
  min-height: 50rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}
.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}
.card-text {
  font-size: 85%;
}
</style>