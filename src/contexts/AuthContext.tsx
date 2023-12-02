import { ReactNode, createContext, useContext, useState } from "react"

interface Props{
    children: ReactNode
}
const AuthContext = createContext({currentUser: null})
export const useAuth = () => {
    return useContext(AuthContext)
}
export const AuthProvider = ({children} : Props) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = {
        currentUser
    }
 return (
    <AuthContext.Provider value={value}>
    {children}
    </AuthContext.Provider>
 )
}

