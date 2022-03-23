<template>
  <div>
    動畫部分
    <button @click="isShow = !isShow">顯示/隱藏</button>
    <transition>
      <h2 v-show="isShow">您好啊!</h2>
    </transition>
    <transition name="owen" appear>
      <h2 v-show="isShow">name為名稱,appear出現就執行!</h2>
    </transition>
    <hr />
    過度部分
    <button @click="isShow2 = !isShow2">顯示/隱藏</button>
    <transition name="a" appear>
      <h3 v-show="isShow2">
        name為名稱,Vue3過度appear不能直接執行，但不加就沒有進場動畫
      </h3>
    </transition>
    <transition-group name="b" appear>
      <h3 key="b1" v-show="isShow2">transition-group多個元素</h3>
      <h3 key="b2" v-show="!isShow2">transition-group多個元素</h3>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      isShow2: true,
    };
  },
};
</script>

<style scoped>
h2 {
  background-color: pink;
}

/* 動畫 */
.v-enter-active {
  animation: owen 0.5s linear;
}

.v-leave-active {
  animation: owen 0.5s linear reverse;
}

.owen-enter-active {
  animation: owen 2s linear;
}

.owen-leave-active {
  animation: owen 2s linear reverse;
}

@keyframes owen {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}

/* 過度 */
h3 {
  background-color: pink;
}
/* 進入的起點 */
/* 離開的終點 */
/* .a-enter, 這個被砍掉了 */
.a-enter-from,
.a-leave-to {
  transform: translateX(-100%);
}

/* 進入的終點 */
/* 離開的起點 */
.a-enter-to,
/* .a-leave被砍掉了 */
.a-leave-from {
  transform: translateX(0);
}
.a-enter-active,
.a-leave-active {
  transition: 0.5s linear;
}

/* 多個元素 */

/* 進入的起點 */
/* 離開的終點 */
/* .a-enter, 這個被砍掉了 */
.b-enter-from,
.b-leave-to {
  transform: translateX(-100%);
}

/* 進入的終點 */
/* 離開的起點 */
.b-enter-to,
/* .a-leave被砍掉了 */
.b-leave-from {
  transform: translateX(0);
}
.b-enter-active,
.b-leave-active {
  transition: 0.5s linear;
}
</style>