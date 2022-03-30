export const map1 = {
    title: {
        text: "评论属性得分",
        left: "center"
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        left: "left",
        data: ['评测商品']
    },

    radar: {
        // shape: 'circle',
        center: ['50%', '55%'],
        indicator: [
            {name: '音效', max: 5},
            {name: '电池', max: 5},
            {name: '系统', max: 5},
            {name: '速度', max: 5},
            {name: '屏幕', max: 5},
        ]
    },
    series: [
        {
            name: 'Budget vs spending',
            type: 'radar',
            areaStyle: {},
            color: ['#FFAB76'],
            data: [
                {
                    value: [3.0, 3.0, 3.2, 3.4, 3.4],
                    name: '评测商品'
                }
            ]
        }
    ]
}

export const map2 = {
    title: {
        text: "市场综合属性评分",
        left: "center"
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        left: "left",
        data: ['评测商品', '平均水准']
    },

    radar: {
        // shape: 'circle',
        center: ['50%', '55%'],
        indicator: [
            {name: '游戏', max: 5},
            {name: '电池', max: 5},
            {name: '屏幕', max: 5},
            {name: '速度', max: 5},
        ]
    },
    series: [
        {
            name: 'Budget vs spending',
            type: 'radar',
            areaStyle: {},
            color: [
                '#FFE162',
                '#84DFFF',
                '#61a0a8',
            ],
            data: [
                {
                    value: [2.6, 3.0, 3.4, 3.4],
                    name: '评测商品'
                },
                {
                    value: [2.5, 2.7, 2.4, 3.0],
                    name: '平均水准'
                }
            ]
        }
    ]
}

export const map3 = {
    //timeline基本配置都写在baseoption 中
    baseOption: {
        timeline: {
            //loop: false,
            axisType: 'category',
            show: true,
            autoPlay: true,
            playInterval: 3000,
            data: ['音效', '电池', '系统', '速度', '屏幕']
        },
        grid: {containLabel: true},
        xAxis: [
            {
                type: 'category',
                data: ['好评', '差评']
            }
        ],
        yAxis: {type: 'value', name: '条'},
        series: [
            {
                type: 'bar',
                barWidth: 100,
                label: {
                    show: true,
                    position: 'inside'
                },
            },
        ],
        title: {
            text: '评论分布'
        }
    },
    //变量则写在options中
    options: [
        {
            series: [
                {
                    data: [{
                        value: 100,
                        itemStyle: {
                            color: '#FF6363'
                        }
                    }, {
                        value: 20,
                        itemStyle: {
                            color: '#BAFFB4'
                        }
                    }]
                },
            ]
        },
        {
            series: [
                {
                    data: [{
                        value: 340,
                        itemStyle: {
                            color: '#FF6363'
                        }
                    }, {
                        value: 20,
                        itemStyle: {
                            color: '#BAFFB4'
                        }
                    }]
                },
            ]
        },
        {
            series: [
                {
                    data: [{
                        value: 30,
                        itemStyle: {
                            color: '#FF6363'
                        }
                    }, {
                        value: 7,
                        itemStyle: {
                            color: '#BAFFB4'
                        }
                    }]
                },

            ]
        }, {
            series: [
                {
                    data: [{
                        value: 450,
                        itemStyle: {
                            color: '#FF6363'
                        }
                    }, {
                        value: 35,
                        itemStyle: {
                            color: '#BAFFB4'
                        }
                    }]
                },

            ]
        }, {
            series: [
                {
                    data: [{
                        value: 50,
                        itemStyle: {
                            color: '#FF6363'
                        }
                    }, {
                        value: 3,
                        itemStyle: {
                            color: '#BAFFB4'
                        }
                    }]
                },

            ]
        },
    ]
}