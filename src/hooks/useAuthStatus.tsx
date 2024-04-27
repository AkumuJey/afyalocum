import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"


const useAuthStatus = () => {
    const { currentUser } = useContext(AuthContext)
  return currentUser
}

export default useAuthStatus
