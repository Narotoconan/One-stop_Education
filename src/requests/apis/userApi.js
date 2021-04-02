import http from '../http'

export default {
    userLogin : (loginMessage,encryptKey) => http.passwordPost('/user/login',loginMessage,encryptKey),//用户登录
    userMessage: userId => http.get('/user/details/'+userId),//获取用户信息
    userBrowsed:'',//获取用户浏览历史
    userFavorite: message => http.get('/user/favorite/query',message),//获取用户收藏课程
    changeUserAvatar: avatar => http.avatarPost('/user/avatar/upload',avatar), //改变用户头像
    changeMessage: message => http.post('/user/details/alter',message), //修改信息
    toGetBrowsed: message => http.get('/user/history',message), //获取历史记录
    signUser: (message,encryptKey) => http.passwordPost('/user/register',message,encryptKey), //
    changUserPassword:(message,encryptKey) => http.passwordPost('/user/changePassword',message,encryptKey)
}
