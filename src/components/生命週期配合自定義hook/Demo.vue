<template>
  <hr />
  <h2>當前點擊時鼠標的座標為：x={{ point.x }},y={{ point.y }}</h2>
</template>

<script>
import usePoint from "../../hooks/usePoint";
export default {
  name: "Demo",
  setup() {
    let point = usePoint();
    return {
      point,
    };
  },
};
</script>