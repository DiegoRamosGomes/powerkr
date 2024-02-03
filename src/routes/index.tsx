import { createStackNavigator } from "@react-navigation/stack";
import { AuthPage } from "../pages/Auth";
import { HomePage } from "../pages/Home";
import { ProfilePage } from "../pages/Profile";
import { useContext, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";

export type RootStackRoutes = {
  Auth: undefined
  Home: undefined
  Profile: undefined
}

const RootStack = createStackNavigator<RootStackRoutes>()

export const Routes = () => {
  const {initiateUserLogged, isLogged} = useContext(AuthContext)
  
  useEffect(() => {
    initiateUserLogged().then()
  }, []);
  
  return (
    <RootStack.Navigator initialRouteName={isLogged ? 'Home' : 'Auth'} screenOptions={{
      headerShown: false
    }}>
      <RootStack.Screen name={'Auth'} component={AuthPage} />
      <RootStack.Screen name={'Home'} component={HomePage} />
      <RootStack.Screen name={'Profile'} component={ProfilePage} />
    </RootStack.Navigator>
  )
}