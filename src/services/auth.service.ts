import { postLoginUser } from "../mocks/auth_login";
import { getAuthMe } from "../mocks/auth_me";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthService = () => {
  const loginWithEmail = async (email: string, password: string) => {
    try {
      const { data } = await postLoginUser(email, password)
      await saveToken(data.token)
      return {
        success: true,
        user: await me()
      }
    } catch (e: any) {
      return {
        success: false,
        message: e.message
      }
    }
  }
  
  const me = async () => {
    const data = await getAuthMe()
    return data.data
  }
  
  const saveToken = async (token: string) => {
    await AsyncStorage.setItem('@powerkr:auth_token', token)
  }
  
  const retrieveToken = async () => {
    await AsyncStorage.getItem('@powerkr:auth_token')
  }
  
  const deleteToken = async () => {
    await AsyncStorage.removeItem('@powerkr:auth_token')
  }
  
  return {
    loginWithEmail,
    deleteToken,
    retrieveToken,
    me
  }
}