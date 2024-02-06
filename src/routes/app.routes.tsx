import { HomePage } from "../pages/Home";
import { ProfilePage } from "../pages/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "tamagui";
import HamburgerMenuIcon from "../assets/icons/HamburgerMenuIcon";
import NotificationIcon from "../assets/icons/NotificationIcon";
import { NavigationHeader } from "../components/NavigationHeader";
import HouseIcon from "../assets/icons/HouseIcon";
import ChatTeardropIcon from "../assets/icons/ChatTeardropIcon";
import AppointmentsIcon from "../assets/icons/AppointmentsIcon";
import UserCircleIcon from "../assets/icons/UserCircleIcon";
import { AppointmentsPage } from "../pages/Appointments";
import { CommitteesPage } from "../pages/Committees";

export type AppTabsRoutes = {
  Home: undefined
  Profile: undefined,
  Appointments: undefined
  Committees: undefined
}


const Tab = createBottomTabNavigator<AppTabsRoutes>();

export const AppRoutes = () => {
  const theme = useTheme()
  
  
  return (
    <Tab.Navigator screenOptions={({ route }) => {
      const headerTitles = {
        Home: '',
        Profile: 'Perfil',
        Appointments: '',
        Committees: ''
      }
      return {
        headerStyle: {
          shadowOffset: { width: 0, height: 0 },
        },
        header: (props) => (<NavigationHeader
          title={headerTitles[route.name]}
          {...props}
        />),
        tabBarStyle: {
          borderTopRadius: 24,
          borderBottomRadius: 12,
          backgroundColor: theme.brand_secondary_mid.val,
          position: 'absolute',
          overflow: 'hidden',
          left: 0,
          bottom: 0,
          right: 0,
          padding: 5,
          borderTopWidth: 0
        },
        tabBarActiveTintColor: theme.content_text_primary.val,
        tabBarInactiveTintColor: theme.content_text_tertiary.val
      }
    }}>
      <Tab.Screen
        name={'Home'}
        component={HomePage}
        options={{
          headerRight: NotificationIcon,
          headerLeft: HamburgerMenuIcon,
          tabBarIcon: ({ color }) => (<HouseIcon color={color}/>)
        }}
      />
      <Tab.Screen
        name={'Appointments'}
        component={AppointmentsPage}
        options={{
          headerRight: NotificationIcon,
          headerLeft: HamburgerMenuIcon,
          tabBarIcon: ({ color }) => (<AppointmentsIcon color={color}/>)
        }}
      />
      <Tab.Screen
        name={'Committees'}
        component={CommitteesPage}
        options={{
          headerRight: NotificationIcon,
          headerLeft: HamburgerMenuIcon,
          tabBarIcon: ({ color, size }) => (<ChatTeardropIcon color={color} size={size}/>)
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={ProfilePage}
        options={{
          headerLeft: HamburgerMenuIcon,
          tabBarIcon: ({ color }) => (<UserCircleIcon color={color}/>)
        }}
      />
    </Tab.Navigator>
  )
}
