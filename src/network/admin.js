import {request} from "./request";


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


