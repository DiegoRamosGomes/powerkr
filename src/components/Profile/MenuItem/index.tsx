import { TouchableOpacity } from "react-native";
import { ReactNode } from "react";
import { Text, XStack } from "tamagui";

type MenuItemProps = {
  title: string
  rightComponent: ReactNode
}

export const MenuItem = ({rightComponent, title}: MenuItemProps) => {
  return (
    <TouchableOpacity>
      <XStack justifyContent={'space-between'} alignItems={'center'}>
        <Text color={'$content_text_secondary'} fontSize={'$2'}>{title}</Text>
        {rightComponent}
      </XStack>
    </TouchableOpacity>
  )
}