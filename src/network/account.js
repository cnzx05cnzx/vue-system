import {requset} from "../network/request";


export function login(param) {
    return requset({
        url: '/login',
        method: 'post',
        data: {
            username: param.username,
            password: param.password,
            atype: param.atype
        }
    })
}

export function reg(param) {
    return requset({
        url: '/register',
        method: 'post',
        data: {
            username: param.username,
            password: param.password,
            phone:param.phone,
            email:param.email,
            address:param.address,
            atype: param.atype
        }
    })
}


