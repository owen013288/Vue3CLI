<template>
  <div class="container mt-3">
    <Banner />
    <div class="row">
      <div class="col-2">
        <div class="list-group">
          <!-- 原始作法 -->
          <!-- <a href="./about.html" class="list-group-item active">About</a>
          <a href="./home.html" class="list-group-item">home</a> -->

          <!-- 新作法 -->
          <router-link
            :replace="true"
            class="list-group-item"
            active-class="active"
            to="../components/路由/pages/home"
          >
            home
          </router-link>
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            :to="{ path: '/about' }"
          >
            About
          </router-link>
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <!-- 指定組件的呈現位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./components/路由/Banner.vue";
export default {
  name: "App",
  components: {
    Banner,
  },
};
</script>