//人員相關配置
import { nanoid } from 'nanoid'
import axios from 'axios'
export default {
    // 讓使用者知道分類名打開
    namespaced: true,
    actions: {
        addPersonServer(context) {
            axios.get('https://www.travel.taipei/open-api/swagger/docs/V1').then(
                response => {
                    context.commit('ADD_PERSON',
                        {
                            id: nanoid,
                            name: response.data.tags[Math.floor(Math.random() * 6)].description
                        });
                },
                error => {
                    alert(error.message);
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            console.log(value)
            state.personList.unshift(value);
        }
    },
    state: {
        personList: [{
            id: nanoid(),
            name: 'owen'
        }]
    },
    getters: {},
}