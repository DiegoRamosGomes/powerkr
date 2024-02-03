import { createStackNavigator } from "@react-navigation/stack";
import { AuthPage } from "../pages/Auth";
import { useContext, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";
import { AppRoutes } from "./app.routes";

export type RootStackRoutes = {
  Auth: undefined
  AppRoutes: undefined
}

const RootStack = createStackNavigator<RootStackRoutes>()

export const Routes = () => {
  const {initiateUserLogged, isLogged} = useContext(AuthContext)
  
  useEffect(() => {
    initiateUserLogged().then()
  }, []);
  
  return (
    <RootStack.Navigator initialRouteName={isLogged ? 'AppRoutes' : 'Auth'} screenOptions={{
      headerShown: false,
    }}>
      <RootStack.Screen name={'Auth'} component={AuthPage} />
      <RootStack.Screen name={'AppRoutes'} component={AppRoutes} />
    </RootStack.Navigator>
  )
}