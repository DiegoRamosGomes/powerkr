import { createContext, ReactNode, useState } from "react";
import { UserModel } from "../models/user.model";
import { AuthService } from "../services/auth.service";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { RootStackRoutes } from "../routes";

type AuthContextProps = {
  isLogged: boolean
  user: UserModel | null
  loading: boolean
  loginUserWithEmail(email: string, password: string): Promise<boolean>
  initiateUserLogged(): Promise<boolean>
  logout(): void
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const service = AuthService()
  const navigation = useNavigation<NativeStackNavigationProp<RootStackRoutes>>()
  
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
    navigation.navigate('Auth')
  }
  
  const initiateUserLogged = async () => {
    const token = await service.retrieveToken()
    if (token !== null) {
      const loggedUser = await service.me()
      setUser(loggedUser)
      return true
    }
    
    return false
  }
  
  return (
    <AuthContext.Provider value={{
      user,
      loading,
      isLogged: user === null,
      loginUserWithEmail,
      logout,
      initiateUserLogged
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext