import { HomePage } from "../pages/Home";
import { ProfilePage } from "../pages/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "tamagui";
import HamburgerMenuIcon from "../assets/icons/HamburgerMenuIcon";
import NotificationIcon from "../assets/icons/NotificationIcon";
import { StatusBar } from "react-native";
import { NavigationHeader } from "../components/NavigationHeader";

export type AppTabsRoutes = {
  Home: undefined
  Profile: undefined
}


const Tab = createBottomTabNavigator<AppTabsRoutes>();

export const AppRoutes = () => {
  const theme = useTheme()
  
  
  return (
    <Tab.Navigator screenOptions={({ navigation, route }) => {
      const headerTitles = {
        Home: '',
        Profile: 'Perfil'
      }
      return {
        headerStyle: {
          backgroundColor: theme.content_error.val,
          shadowOffset: { width: 0, height: 0 },
        },
        header: (props) => <NavigationHeader
          title={headerTitles[route.name]}
          {...props}
        />
      }
    }}>
      <Tab.Screen
        name={'Home'}
        component={HomePage}
        options={{
          title: 'Home',
          headerRight: NotificationIcon,
          headerLeft: HamburgerMenuIcon
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={ProfilePage}
        options={{
          title: 'Perfil',
          headerLeft: HamburgerMenuIcon
        }}
      />
    </Tab.Navigator>
  )
}
