import { onAuthStateChanged } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
interface AuthContext {
  user: any;
  setUser: any;
}
interface Props {
  children?: ReactNode;
}
export const AuthContext = createContext({} as AuthContext);

export const AuthContextProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState();

  const value = {
    currentUser,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user)
      })
      return unsubscribe()
  }, [])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
