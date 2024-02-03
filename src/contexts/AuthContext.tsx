import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { UserModel } from "../models/user.model";
import { AuthService } from "../services/auth.service";

type AuthContextProps = {
  isLogged: boolean
  user: UserModel | null
  loading: boolean
  loginUserWithEmail(email: string, password: string): Promise<boolean>
  logout(): void
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const service = AuthService()
  
  const [user, setUser] = useState<UserModel | null>(null)
  const [loading, setLoading] = useState(false)
  
  const loginUserWithEmail = async (email: string, password: string) => {
    setLoading(true)
    const data = await service.loginWithEmail(email, password)
    if (data.success && data.user) {
      const loggedUser = data.user
      setUser(loggedUser)
      setLoading(false)
      return true
    }
    
    setLoading(false)
    return false
  }
  
  const logout = () => {
    setUser(null)
    
  }
  
  return (
    <AuthContext.Provider value={{
      user,
      loading,
      isLogged: user === null,
      loginUserWithEmail,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext