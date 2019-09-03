import React , { Component } from 'react'
import { Chart , Axis , Tooltip , Geom, Legend , Coord , Label } from 'bizcharts'
import DataSet from '@antv/data-set'


class Pie extends Component{
    render(){
        const { DataView } = DataSet
        const data = [
           {
               item:"Item1",
               count:18
           },
           {
                item:"Item2",
                count:36
            },
            {
                item:"Item3",
                count:11
            },
            {
                item:"Item4",
                count:26
            },
            {
                item:"Item5",
                count:9
            }
        ]
        const dv = new DataView()
        dv.source(data).transform({
            type:"percent",
            field:'count',
            dimension:'item',
            as:'percent'
        })

        console.log(dv)
        const cols = {
            percent:{
                formatter:val => {
                    val = `${val*100}%`
                    return val
                }
            }
        }
        return(
            <div>
                <Chart  
                    height={500} 
                    data={dv} 
                    scale={cols} 
                    forceFit
                >
                    <Coord type="theta" radius={0.75} />
                    <Axis name="percent"/>
                    <Legend />
                    <Tooltip 
                        showTitle={false}
                        itemTpl="<li>{name}:{value}</li>" 
                    />
                    <Geom 
                        type="intervalStack" 
                        position="percent" 
                        color="item"
                        tooltip={[
                        "item*percent",
                        (item, percent) => {
                            percent = percent * 100 + "%";
                            return {
                            name: item,
                            value: percent
                            };
                        }
                        ]}
                        style={{
                        lineWidth: 1,
                        stroke: "#fff"
                        }}
                    >
                        <Label content="percent" />
                    </Geom>
                </Chart>
            </div>
        )
    }
}

export default Pie