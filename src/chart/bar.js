import React , { Component } from 'react'
import { Chart,Geom,Axis,Tooltip } from 'bizcharts'
// 引入图表所需要的组件
// 用组件 组装成需要的图表

// 渲染图表
class Bar extends Component{
    render(){
        // 定义数据源
        // const data = [
        //     {
        //         year: "1951 年",
        //         sales: 38
        //       },
        //       {
        //         year: "1952 年",
        //         sales: 52
        //       },
        //       {
        //         year: "1956 年",
        //         sales: 61
        //       },
        //       {
        //         year: "1957 年",
        //         sales: 145
        //       },
        //       {
        //         year: "1958 年",
        //         sales: 48
        //       },
        //       {
        //         year: "1959 年",
        //         sales: 38
        //       },
        //       {
        //         year: "1960 年",
        //         sales: 38
        //       },
        //       {
        //         year: "1962 年",
        //         sales: 38
        //       }
        // ]
        const data = [
            { genre: 'Sports', sold: 275, income: 2300 },
            { genre: 'Strategy', sold: 115, income: 667 },
            { genre: 'Action', sold: 120, income: 982 },
            { genre: 'Shooter', sold: 350, income: 5271 },
            { genre: 'Other', sold: 150, income: 3710 }
        ]
        //定义度量
        // const cols = {
        //     sales: {
        //         tickInterval: 20
        //     }
        // }
        const cols = {
            sold:{alias:"sales"},
            genre:{alias:"genre"}
        }
        return(
            <div>
                <Chart height={500} data={data} scale={cols} forceFit>
                    <Axis name="genre" title />
                    <Axis name="sold" title />
                    <Tooltip
                        crosshairs={{
                        type: "y"
                        }}
                    />
                    <Geom type="interval" position="genre*sold" color="genre" />
                </Chart>
            </div>
        )
    }
}

export default Bar