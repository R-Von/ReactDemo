import React , { Component } from 'react'
import { Chart , Axis , Geom , Tooltip } from 'bizcharts'


class Line extends Component{
  
    render(){
        const data = [
            { genre: "Sports", sold: 275, income: 2300},
            { genre: 'Strategy', sold: 115, income: 667 },
            { genre: 'Action', sold: 120, income: 982 },
            { genre: 'Shooter', sold: 350, income: 5271 },
            { genre: 'Other', sold: 150, income: 3710 }
        ]
        const cols = {
            sold:{alias:"sales"},
            genre:{alias:"genre"}
        }
        return (
            <div>
                <Chart height={500} data={data} scale={cols} forceFit>
                    <Axis name="genre" title />
                    <Axis name="sold" title />
                    <Tooltip />
                    <Geom type="line" position="genre*sold" size={2} />
                    <Geom type="point" position="genre*sold" shape={'circle'} size={4} />
                </Chart>
            </div>
        )
    }
}

export default Line