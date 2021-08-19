import React from 'react'

const UserContext = React.createContext()
//const UserContext = React.createContext("ReactDefaultName")

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer 

export {UserProvider,UserConsumer}