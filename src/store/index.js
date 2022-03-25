// 該文件用於創建Vuex中最為核心的store

// 引入Vuex
import Vuex from 'vuex'

// 準備一個actions => 用於響應組件中的動作
const actions = {}
// 準備一個mutations => 用於操作數據
const mutations = {}
// 準備一個state => 用於儲存數據
const state = {}

// 創建並暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})