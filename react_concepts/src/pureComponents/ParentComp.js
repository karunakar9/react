import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComp extends Component {
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
                <RegularComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
