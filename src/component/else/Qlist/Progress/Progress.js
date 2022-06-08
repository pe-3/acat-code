import React, { Component } from 'react';
import './Progress.css'
class Progress extends Component {
    pieOption = {
        tooltip: {
            trigger: 'item',
        },
        title: {
            text: '全部 95/244',
            textStyle: {
                fontSize: '12'
            },
        },
        series: [
            {
                name: '完成度',
                type: 'pie',
                top: '15%',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                },
                data: [
                    { value: 67, name: '简单已完成', itemStyle: { color: '#67C23A', }, },
                    { value: 24, name: '中等已完成', itemStyle: { color: '#E6A23C', }, },
                    { value: 14, name: '困难已完成', itemStyle: { color: '#F56C6C', }, },
                    { value: 50, name: '简单未完成', itemStyle: { color: '#909399', }, },
                    { value: 50, name: '中等未完成', itemStyle: { color: '#909399', }, },
                    { value: 50, name: '困难未完成', itemStyle: { color: '#909399', }, },
                ],
            },
        ]
    }
    radarOption = {
        title: {
            text: '完成对比',
            textStyle:{
                fontSize:'12',
            }
        },
        tooltip: {
            trigger: 'item'
        },
        radar: {
            shape: 'circle',
            indicator: [
                { name: '简单', max: 100 },
                { name: '中等', max: 100 },
                { name: '困难', max: 100 },
                { name: '总共', max: 300 },
            ],
            axisName:{
                // show:false,
                padding:[10,10,10,10],
            },
        },
        series: [
            {
                name: 'Budget vs spending',
                type: 'radar',
                top:'15%',
                data: [
                    {
                        value: [64, 24, 14, 92],
                        name: '已完成',
                        itemStyle:{
                            color:"#67C23A",
                        }
                    },
                    {
                        value: [36, 76, 86, 208],
                        name: '未完成',
                        itemStyle:{
                            color:"#E6A23C",
                        }
                    },
                    {
                        value: [100, 100, 100, 300],
                        name: '总共',
                        itemStyle:{
                            color:"#909399",
                        }
                    }
                ],
            }
        ]
    }
    pieRoot = React.createRef()
    barRoot = React.createRef()
    componentDidMount() {
        //设置饼状图
        const pieChart = this.echarts.init(this.pieRoot.current);
        pieChart.setOption(this.pieOption);
        //设置柱状图
        const barChart = this.echarts.init(this.barRoot.current);
        barChart.setOption(this.radarOption);
    }
    render() {
        return (
            <div className='Progress shadow-level1 dark:shadow-dark-level1 bg-layer-1 dark:bg-dark-layer-1 rounded-lg py-2'>
                <p className='Title'>当前进度</p>
                <div className="chart">
                    <div id="progresspieRoot" ref={this.pieRoot}></div>
                    <div id="barChart" ref={this.barRoot}></div>
                </div>
            </div>
        );
    }
}

export default Progress;
