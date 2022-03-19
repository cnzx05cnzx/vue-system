import {request} from "./request";


export function upform(tar,user) {
    return request({
        // url: '/home/multidata'
        method: 'post',
        url: '/spider/',
        params: {
            tar,
            user
        },
        // responseType: 'blob'
        responseType: 'arraybuffer',
    })
}

export function getcomment(tar,user) {
    return request({
        // url: '/home/multidata'
        method: 'post',
        url: '/spider/',
        params: {
            tar,
            user
        }
    })
}
