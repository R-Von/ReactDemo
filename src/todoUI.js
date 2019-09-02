import React from 'react'
import 'antd/dist/antd.css'
import { Input , Button , List , Icon } from 'antd'

const TodoUI = (props)=>{
    return (
        <div className="app" style={{width:'300px',marginTop:'50px',marginLeft:'25px'}}>
            <div style={{width:'300px'}}>
                <Input 
                    placeholder = "write something" 
                    style = {{width:'230px'}}  
                    value = {props.inputValue}
                    onChange = {props.changeInputValue}
                />
                <Button 
                    type="primary" 
                    style={{width:'50px',marginLeft:'10px'}}
                    onClick = {props.addItem}
                >
                        add
                </Button>
            </div>
            <p>{props.inputValue}</p>
            <div style={{width:'300px',marginTop:'30px'}}>
                <List 
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index)=>{
                        return (
                            <List.Item 
                                key = {index}
                                actions={[
                                    <span>{item.stargazers_count}颗星</span>,
                                    <Icon 
                                    type="delete" 
                                    onClick={(e)=>{
                                        console.log(index)
                                        e.preventDefault()
                                        props.deleteItem(index)
                                    }}
                                    />
                                ]}
                            >
                                {item.name}
                               {/* <a href={item.url} title={item.name}> {item.name}</a> */}
                            </List.Item>
                        )
                    }}
                />            
            </div> 
        </div>
    )
}


export default TodoUI