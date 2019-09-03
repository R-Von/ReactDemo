import React , { Component } from 'react'
import Bar from './chart/bar'
import Line from './chart/line'
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
                   <Col span={8}>col-8</Col>
                   <Col span={8}>col-8</Col>
                   <Col span={8}>col-8</Col>
               </Row>
           </div>
        )
    }
}

export default Chart