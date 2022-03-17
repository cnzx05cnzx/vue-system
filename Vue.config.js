module.exports = {
    // publicPath: './',
    configureWebpack: {
        resolve:{
            extensions:[],
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views'
            }
        }
    },

    // dev: {
    //     proxyTable: {
    //         '/api': {
    //             target: 'https://www.baidu.com/',//后端接口地址
    //             ngeOrigin: true,//是否允许跨越
    //             pathRewrite: {
    //                 '^/api': '',//重写,
    //             }
    //         }
    //     }
    // }
}