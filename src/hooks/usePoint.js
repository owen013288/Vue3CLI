import { reactive, onMounted, onBeforeUnmount } from "vue";
export default function () {
    //實現鼠標打點相關的數據
    let point = reactive({
        x: 0,
        y: 0,
    });

    //實現鼠標打點相關的方法
    function savePoint(event) {
        point.x = event.pageX;
        point.y = event.pageY;
        console.log(event.pageX, event.pageY);
    }

    //實現鼠標打點相關的生命週期鉤子
    onMounted(() => {
        window.addEventListener("click", savePoint);
    });

    onBeforeUnmount(() => {
        window.removeEventListener("click", savePoint);
    });

    return point;
}
