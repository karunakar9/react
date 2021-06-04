import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
 class ParentComponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              ParentName:'Name of Parent'
         }
         this.greetParent=this.greetParent.bind(this)
     }
     greetParent(){
        //  Method using this keyword so need to bind it
        // in below alert we have used backticket (right below ur ESC key)
          alert(`Hello  ${this.state.ParentName}`)
        //  console.log(this)
     }
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
