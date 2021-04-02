import apis from '../../requests/apis/userApi'
export default {
    state: {
    },
    mutations: {

    },
    actions: {
        getUserMg(context,payload) {
            return apis.userMessage(payload)
        },
            putUserAvatar(context,payload){
            return apis.changeUserAvatar(payload)
        },
        getUserFavorites(context,payload) {
            return apis.userFavorite(payload)
        },
        changeUserMessage(context,payload) {
            return apis.changeMessage(payload)
        },
        getUserBrowsed(context,payload) {
            return apis.toGetBrowsed(payload)
        },
    },
    getters: {
        getMessage(){
            let userMessage = localStorage.getItem('userMessage')
            return JSON.parse(userMessage)
        },
        getUser(){
            let userMessage = localStorage.getItem('user')
            return JSON.parse(userMessage)
        },

    },
}
