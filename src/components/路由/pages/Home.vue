<template>
  <div>
    <h2>HOME組件內容</h2>
    <ul class="nav">
      <li>
        <router-link
          replace
          class="list-group-item"
          active-class="active"
          to="/Home/News"
        >
          News
        </router-link>
      </li>
      <li>
        <router-link
          replace
          class="list-group-item"
          active-class="active"
          to="/Home/Message"
        >
          Message
        </router-link>
      </li>
    </ul>
    <!-- 讓裡面的不被銷毀，沒輸入include就全部保存 -->
    <router-view v-slot="{ Component }">
      <keep-alive include="News">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>