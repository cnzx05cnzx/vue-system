import {request} from "./request";


export function login(param) {
    return request({
        url: '/login',
        method: 'post',
        data: {
            username: param.username,
            password: param.password,

        }
    })
}

export function reg(param) {
    return request({
        url: '/register',
        method: 'post',
        data: {
            username: param.username,
            password: param.password,
        }
    })
}


