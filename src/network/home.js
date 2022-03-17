import {request} from "./request";

export function getHomeMultidata() {
    return request({
        // url: '/home/multidata'
        method: 'get',
        url: '/wwee/',
        params: {
            "qq": 1
        }
    })
}

export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}

