//登录页面
import apis from '../../requests/apis/userApi'
import CryptoJS from 'crypto-js'
import JSEncrypt from 'jsencrypt/bin/jsencrypt.min'
import jwtDecode from "jwt-decode";
import {Message} from "element-ui";
import router from "../../router";
import VueCookie from 'vue-cookie'

export default {
    state: {
        isLogin: false,
        userPassword: null,
        userMessage: null,
        RandomKey: null,
        aesQuestData: null,
        RsaRandomKey: null,
        publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCf5PqLyg9c70PVyEYqQqyr0AYq
ylQzh2dre46iEM/5wrVC2pAhtlUh4l4iIZQeN6CznLdilKpLVwr71Cgl+5zGV7NW
95auPgFGwLpSE3aDQ2VlpIkY+9yMhmT6SYdalHDlmqYXh7pE0zHKeI02zWej5JRi
LjOrx7KoW0KlL2xx9wIDAQAB
-----END PUBLIC KEY-----
`
    },
    mutations: {
        getRamNumber(state) {
            let result = '';
            for (let i = 0; i < 16; i++) {
                result += Math.floor(Math.random() * 16).toString(16);//获取0-15并通过toString转16进制
            }
            //默认字母小写，手动转大写
            state.RandomKey = result.toLowerCase();//另toLowerCase()转小写
        },
        toAes(state) {
            //AES加密
            //let aesText
            let cryptKey = CryptoJS.enc.Utf8.parse(state.RandomKey);

            state.aesQuestData = CryptoJS.AES.encrypt(state.userPassword, cryptKey, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7,
                iv: ''
            }).toString();
            //base64转化
            //state.aesQuestData = CryptoJS.enc.Utf8.parse(a);
            //state.aesQuestData = CryptoJS.enc.Base64.stringify(b);
        },
        toRsa(state) {
            let encrypt = new JSEncrypt();
            //设置公钥
            encrypt.setPublicKey(state.publicKey);
            //RSA加密
            state.RsaRandomKey = encrypt.encrypt(state.RandomKey).toString();
        },
        exitUserLogin(state, payload) {
            localStorage.removeItem('access_token')
            localStorage.removeItem('userMessage')
            localStorage.removeItem('user')
            VueCookie.delete('access_token')
            VueCookie.delete('JSESSIONID')
            if (payload) return
            window.location.href = '/home'
        },
        goBack(state, payload) {

            setTimeout(function () {
                if (window.history.length === 0) {
                    window.location.href = '/home'
                } else {
                    router.go(payload) //返回上一个页面
                }
            }, 1000);
        }
    },
    actions: {
        toLogin(context, payload) {
            context.state.userPassword = payload.userPassword
            context.state.userMessage = payload.userMessage
            //加密信息
            context.commit('getRamNumber');
            context.commit('toAes')
            context.commit('toRsa')
            apis.userLogin({//发送信息
                "loginName": context.state.userMessage,
                "password": context.state.aesQuestData
            }, context.state.RsaRandomKey)
                .then((res) => {
                    if (res.resultCode !== 1110) { //判断业务状态码
                        Message.warning(res.resultCode + ' ' + res.message + ' ' + res.reason)
                        return
                    }
                    localStorage.setItem("access_token", res.data.token); //存放token
                    let userMessage = jwtDecode(res.data.token)//解析token信息
                    localStorage.setItem("userMessage", JSON.stringify(userMessage)); //存放用户信息
                    Message.success('登录成功')
                    context.commit('goBack', -1)
                }).catch(err => {
                Message.error('登录失败')
                console.log(err)
            })
        },
        toSignAccount(context, payload) {
            context.state.userPassword = payload.password
            context.commit('getRamNumber');
            context.commit('toAes')
            context.commit('toRsa')
            payload.password = context.state.aesQuestData
            apis.signUser(payload, context.state.RsaRandomKey)
                .then(res => {
                    if (res.resultCode !== 1130) { //判断业务状态码
                        Message.warning(res.resultCode + ' ' + res.message + ' ' + res.reason)
                        return
                    }
                    Message.success('注册成功')
                    context.commit('goBack', -1)
                }).catch(err => {
                Message.error('注册失败')
                console.log(err)
            })
        },
        updatePassword(context, payload) {
            let oldPassword = payload.oldPwd
            let newPassword = payload.newPwd

            context.commit('getRamNumber')
            //加密旧密码
            context.state.userPassword = oldPassword
            context.commit('toAes')
            oldPassword = context.state.aesQuestData
            //加密新密码
            context.state.userPassword = newPassword
            context.commit('toAes')
            newPassword = context.state.aesQuestData

            payload.oldPwd = oldPassword
            payload.newPwd = newPassword

            context.commit('toRsa')

            apis.changUserPassword(payload, context.state.RsaRandomKey)
                .then(res => {
                    if (res.resultCode !== 1180) { //判断业务状态码
                        Message.warning(res.resultCode + ' ' + res.message + ' ' + res.reason)
                        return
                    }
                    Message.success('修改成功')
                    context.commit('goBack', 0)
                }).catch(err => {
                Message.error('修改失败')
                console.log(err)
            })
        }
    },
    getters: {
        checkLogin() { //检查是否登录
            let token = localStorage.getItem('access_token')
            if (token === null) return 0  //如果没有则没有登录
            token = jwtDecode(token) //获取token
            let expTime = token.exp //过期时间
            let nowTime = Math.round(new Date() / 1000);//现在时间
            return (nowTime < expTime) ? 1 : 0
        },
    }
}
