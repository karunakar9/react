import React from 'react'

const withCounter =(OrginalComponent)=>{
    class withCounter extends React.Component{
        constructor(props) {
            super(props)
    
            this.state = {
                count: 0
            }
        }
        clickHandler = () => {
            this.setState(
                (prevState)=>{
                  return {count: prevState.count+1}
                }
            )
        }
    
        render(){
            console.log(this)
            return <OrginalComponent counter={this.state.count} handler={this.clickHandler}/>
        }
    }
    return withCounter

}

export default withCounter