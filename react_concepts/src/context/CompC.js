import React, { Component } from 'react'
import {UserConsumer} from './userContext'

class CompC extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {
                        (userName)=>{
                            return <div>Hello {userName}</div>
                        }
                    }
                </UserConsumer>
            </div>
        )
    }
}

export default CompC
