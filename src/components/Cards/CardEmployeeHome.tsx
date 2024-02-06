import { Avatar, Text, XStack, YStack } from "tamagui";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export const CardEmployeeHome = () => {
  const {user} = useContext(AuthContext)
 
  return (
    <XStack gap={'$3.5'}>
      <Avatar circular size={'$10'}>
        <Avatar.Image
          source={{
            uri: user?.avatar_url
          }}
        />
        <Avatar.Fallback backgroundColor={'$content_shape_tertiary'}/>
      </Avatar>
      <YStack justifyContent={'center'} gap={'$1.5'} f={1}>
        <Text fontFamily={'$medium'} fontSize={'$3'} color={'$content_text_primary'}>{user?.username}</Text>
        <Text fontSize={'$1'} color={'$content_text_tertiary'}>{user?.business_name}</Text>
      </YStack>
    </XStack>
  )
}
