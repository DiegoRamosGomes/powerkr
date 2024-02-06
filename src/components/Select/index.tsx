import { Text, XStack } from "tamagui";
import ArrowDown from "../../assets/icons/ArrowDown";

export const Select = () => {
  return (
    <XStack
      alignItems={'center'}
      borderColor={'$content_shape_tertiary'}
      borderRadius={50}
      bw={1}
      px={'$3'}
      py={'$2'}
      gap={'$4'}
    >
      <Text
        fontFamily={'$medium'}
        color={'$content_text_secondary'}>Todos</Text>
      <ArrowDown/>
    </XStack>
  )
}
