import React from 'react'

const withCounter2 =(OrginalComponent,incrementNum)=>{
    class withCounter2 extends React.Component{
        constructor(props) {
            super(props)
    
            this.state = {
                count: 0
            }
        }
        clickHandler = () => {
            this.setState(
                (prevState)=>{
                  return {count: prevState.count+incrementNum}
                }
            )
        }
    
        render(){
            console.log(this)
            return <OrginalComponent counter={this.state.count} handler={this.clickHandler} {...this.props}/>
        }
    }
    return withCounter2

}

export default withCounter2