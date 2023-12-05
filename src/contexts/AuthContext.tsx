

import { createContext, useContext, ReactNode, useState} from "react"
interface AuthContext {
    user: any
    setUser: any
}
interface Props {
    children?: ReactNode;
}
export const AuthContext = createContext({} as AuthContext)


export const AuthContextProvider = ({children} : Props) => {
 const [user, setUser] = useState()
    return (
        <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>
    )
}