import 'react-native-gesture-handler';

import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";
import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "./tamagui.config";
import { useFonts } from "expo-font";
import { AuthProvider } from "./src/contexts/AuthContext";


export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Regular.otf"),
    InterMedium: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  
  if (!loaded) {
    return null
  }
  
  return (
    <TamaguiProvider defaultTheme={'dark'} config={tamaguiConfig}>
      <NavigationContainer>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
      </NavigationContainer>
    </TamaguiProvider>
  );
}