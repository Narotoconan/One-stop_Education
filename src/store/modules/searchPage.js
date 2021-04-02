import apis from '../../requests/apis/curriculumApi'
//搜索页面
export default {
    state: {
        searchList: null
    },
    mutations: {
        toSearchList(state, payload) {
            state.searchList = payload
        }
    },
    actions: {
        getSearchList(context,payload) {
            return apis.getCurriculum(payload)
        }
    }
}
