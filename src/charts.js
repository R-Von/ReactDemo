import React , { Component } from 'react'
import Bar from './chart/bar'
import Line from './chart/line'
import Pie from './chart/pie'
import KChart from './chart/k'

import 'antd/dist/antd.css'
import { Row , Col } from 'antd'

class Chart extends Component {
    render(){
        return (
           <div>
               <Row>
                   <Col span={12}>
                       <Bar />
                   </Col>
                   <Col span={12}>
                       <Line />
                   </Col>
               </Row>
               <Row>
                   <Col span={12}>
                       <Pie />
                   </Col>
                   <Col span={12}>col-8</Col>
               </Row>
               <Row>
                   <Col span={24}>
                        <KChart />
                   </Col>
               </Row>
           </div>
        )
    }
}

export default Chart