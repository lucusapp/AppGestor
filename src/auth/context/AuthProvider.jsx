import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

const initialState={
    logged:false
}

export const AuthProvider = ({children}) => {



  const [authState,dispach] = useReducer(authReducer,initialState)
 
  const login = (name='Fernando herrera')=>{
    const action ={
      type: types.login,
      payload: {
        id: 'ABC',
        name:name
      }
    }

    dispach(action)
  }
 
 
 
  return (
    <AuthContext.Provider value={{
      ... authState,
      login:login
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
