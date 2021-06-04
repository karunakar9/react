import React, { Component } from 'react'
import MemoComp from './MemoComp'

class ParentComps extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'karu'
        }
    }
    componentDidMount(){
        console.log('componentDidMount')
        setInterval(()=>{
            this.setState({name:'karu'})
        },2000)
        // Render method will be called for every 2secs we can track in console
    }
    
    render() {
        console.log('**********Parent Component************')
        return (
            <div>
                Parent Component
                <MemoComp/>
            </div>
        )
    }
}

export default ParentComps
