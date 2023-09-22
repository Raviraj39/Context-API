import React, { useState } from 'react'
import userContext from './userContext'

const UserContextProvider = ({children}) => {
	const [user ,setUser]=useState(null);
  return (
	<userContext.Provider value={{user,setUser}}>
		{/* pass the object using props */}
		{children}
	</userContext.Provider>
  )
}

export default UserContextProvider