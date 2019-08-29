import React, { Component } from 'react'
 
import './style.css'

class Boss extends Component {
    constructor(props){
        super(props)
        this.state = {
            isShow:true
        }
    }   
    render(){
        let str = `call\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0boss`
        return(
            <div>
                <p className={this.state.isShow?'show':'hide'}>This is Boss</p>
                <div>
                    <button onClick={this.toggleShow}>
                        {str}
                    </button>
                </div>

            </div>
        )
    }
    toggleShow=()=>{
        let isShow = this.state.isShow
        this.setState({
            isShow:!isShow
        })
    }
}


export default Boss