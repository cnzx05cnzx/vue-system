import axios from 'axios'

export function request(config) {
    // 1.创建axios的实例
    const instance = axios.create({
        // fastmock 模拟数据
        // baseURL: 'https://www.fastmock.site/mock/336d81925cb2e6ab972245f040567650/react',
        baseURL: 'http://127.0.0.1:5000',
        timeout: 5000
    })

    // 2.axios的拦截器
    // 2.1.请求拦截的作用
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err);
    })

    // 2.2.响应拦截
    instance.interceptors.response.use(res => {
        console.log("response" + res.data);
        return res.data
    }, err => {
        console.log(err);
    })

    // 3.发送真正的网络请求
    return instance(config)
}