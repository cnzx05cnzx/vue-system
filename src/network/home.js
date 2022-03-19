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

export function download(res,name) {
    const blob = new Blob([res])
    const link = document.createElement('a')
    link.download = name // a标签添加属性
    link.style.display = 'none'
    link.href = URL.createObjectURL(blob)
    document.body.appendChild(link)
    link.click() // 执行下载
    URL.revokeObjectURL(link.href)  // 释放 bolb 对象
    document.body.removeChild(link) // 下载完成移除元素
}

