import React, { Component } from 'react'
import ChildComponent2 from './ChildComponent2'
 class ParentComponent2 extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              ParentName:'Name of Parent'
         }
         this.greetParent=this.greetParent.bind(this)
     }
     greetParent(paramemeter){
        //  Method using this keyword so need to bind it
        // in below alert we have used backticket (right below ur ESC key)
         alert(`Hello  ${this.state.ParentName} from ${paramemeter}`)
     }
    render() {
        return (
            <div>
                <ChildComponent2 greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent2
