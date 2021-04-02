import axios from "axios"
import {Message} from "element-ui";

axios.defaults.baseURL = '/api'
axios.defaults.withCredentials = true
axios.defaults.timeout = 1000 * 10
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8"

// 添加请求拦截器
// http request拦截器 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    //window.localStorage.getItem("accessToken") 获取token的value
    let token = window.localStorage.getItem("access_token")
    if (token) {
        //将token放到请求头发送给服务器,将tokenkey放在请求头中
        config.headers.common['Authorization'] = token;
        //也可以这种写法
        // config.headers['accessToken'] = Token;
        return config;

    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use((response) => {
    // 响应做些什么
    return response;

}, (err) => {
    // 状态码
    switch (err.response.status) {
        case 404:
            Message.error({message:'404 无法找到请求地址!'})
            break;
        case 400:
            Message({ type: 'error', message: '400 发出的请求有错误' })
            break;
        case 401:
            //Message({ type: 'error', message: '401' })
            window.location.href='/login'
            break;
        case 403:
            Message.error({message:'403 用户得到授权，但是访问是被禁止的!'})
            break;
        case 504:
            Message.error({message:'504 网关超时'})
            break;
        case 505:
        case 500:
            Message({ type: 'error', message: '500 服务器发生错误，请检查服务器'});
            break;
        default:
            Message.error({ message: '未知错误!'});
    }
})





function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}

function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, JSON.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            })
    });
}

function passwordPost(url, params,encryptKey) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url:url,
            data: JSON.stringify(params),
            headers:{
                "Encrypt-Key":encryptKey
            }
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err)
        });
    });
}

function avatarPost(url, params) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url:url,
            data: params,
            headers:{
                "content-type":'application/x-www-form-urlencoded;charset=utf-8'
            }
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err)
        });
    });
}

export default {
    get,
    post,
    passwordPost,
    avatarPost,
}
