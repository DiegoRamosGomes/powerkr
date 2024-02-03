import { Stack, Text, useTheme, XStack, YStack } from "tamagui";
import { ReactNode } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { View } from "react-native";

type NavigationHeaderProps = {
  title?: string
} & Partial<BottomTabHeaderProps>

export const NavigationHeader = ({ title, ...rest }: NavigationHeaderProps) => {
  const { top } = useSafeAreaInsets()
  
  const HeaderLeft = rest.options?.headerLeft
  const HeaderRight = rest.options?.headerRight
  
  return (
    <XStack jc={'space-between'} ai={'center'} bg={'$content_background_screen'} pt={top + 32} px={'$5'}>
      {HeaderLeft ? <HeaderLeft/> : <Stack w={36} h={36}/>}
      {title ? <Text fontFamily={'$medium'} fontSize={'$5'} color={'$content_text_secondary'}>{title}</Text> : null}
      {HeaderRight ? <HeaderRight/> : <Stack w={36} h={36}/>}
    </XStack>
  )
}
