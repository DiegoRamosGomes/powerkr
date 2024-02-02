import { Input, Stack, Text, XStack, YStack } from "tamagui";
import { ReactNode } from "react";
import { KeyboardTypeOptions, TextInputProps } from "react-native";

type InputWithLabelProps = Partial<Omit<TextInputProps, 'placeholderTextColor'>> & {
  label: string
  placeholder: string
  type?: KeyboardTypeOptions | 'password'
  errorMessage?: string
  rightIconComponent?: ReactNode
}

export const InputWithLabel = ({ label, placeholder, type, rightIconComponent, errorMessage, ...rest }: InputWithLabelProps) => {
  const hasRightIcon = !!rightIconComponent
  if (!type) {
    type = 'default'
  }
  
  return (
    <YStack gap={'$1.5'}>
      <Text color={'$content_text_secondary'} fontSize={'$1'} fontFamily={'$medium'}>{label}</Text>
      <XStack>
        <Input
          flex={1}
          size="$4"
          secureTextEntry={type === 'password'}
          keyboardType={type === 'password' ? 'visible-password' : type}
          borderWidth={2}
          borderColor={'$content_shape_tertiary'}
          borderTopRightRadius={hasRightIcon ? 0 : 8}
          borderBottomRightRadius={hasRightIcon ? 0 : 8}
          borderRightWidth={hasRightIcon ? 0 : 2}
          bg={'$content_shape_secondary'}
          placeholder={placeholder}
          placeholderTextColor={'$content_text_tertiary'}
          color={'$content_text_secondary'}
          {...rest}
        />
        {hasRightIcon ? (
          <Stack
            backgroundColor={'$content_shape_secondary'}
            borderTopRightRadius={8}
            borderBottomRightRadius={8}
            borderLeftWidth={0}
            borderWidth={2}
            borderColor={'$content_shape_tertiary'}
            justifyContent={'center'}
            paddingHorizontal={12}
          >
            {rightIconComponent}
          </Stack>
        ) : null}
      </XStack>
      {errorMessage ?
        <Text fontSize={'$1'} color={'$content_error'}>{errorMessage}</Text> : null
      }
    </YStack>
  )
}