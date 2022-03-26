// 該文件用於創建Vuex中最為核心的store

// 引入Vuex
import Vuex from 'vuex'
import countOptions from './countOptions'
import PersonOptions from './PersonOptions'

//#region 以改變成countOptions與PersonOptions的了喔~~;
// // 準備一個actions => 用於響應組件中的動作(業務邏輯寫這裡)
// const actions = {
//     // context上下文
//     // 這邊沒有業務邏輯，直接搬到count裡面做
//     // add(context, value) {
//     //     context.commit('ADD', value)
//     // },
//     // reduce(context, value) {
//     //     context.commit('REDUCE', value)
//     // },
//     addOdd(context, value) {
//         if (context.state.sum % 2) {
//             context.commit('ADD', value)
//         }
//     },
//     addWait(context, value) {
//         setTimeout(() => {
//             context.commit('ADD', value)
//         }, 500);
//     }
// }
// // 準備一個mutations => 用於操作數據
// const mutations = {
//     ADD(state, value) {
//         state.sum += value;
//     },
//     REDUCE(state, value) {
//         state.sum -= value;
//     },
// }
// // 準備一個state => 用於儲存數據
// const state = {
//     sum: 0, //當前的和
//     school: 'owen',
//     subject: 'Vue',
//     personList: [{
//         id: nanoid(),
//         name: 'owen'
//     }]
// }
// // 準備getters => 用於將state中的數據進行加工
// const getters = {
//     bigSum(state) {
//         return state.sum * 10;
//     }
// }
//#endregion

// 創建並暴露store
export default new Vuex.Store({
    // actions,
    // mutations,
    // state,
    // getters
    modules: {
        countOptions,
        PersonOptions
    }
})