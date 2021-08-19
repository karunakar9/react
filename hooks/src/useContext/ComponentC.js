import React from 'react'
import { UserContext, ChannelContext } from '../App'

function ComponentC() {
    return (
        <div>
            {/* <UserContext.Consumer>
            {
                user=>{
                    return <div>UserName:{user}</div>
                }
            }
            </UserContext.Consumer> */}
            <UserContext.Consumer>
                {
                    user => {

                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return (<div>{user} and {channel}</div>)
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentC
