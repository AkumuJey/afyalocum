
import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
interface AuthContext {
  user: User;
}
interface Props {
  children?: ReactNode;
}
export const AuthContext = createContext({} as AuthContext);

export const AuthContextProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>();

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
