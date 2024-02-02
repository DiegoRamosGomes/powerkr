import { Image, Text, YStack, H2 } from "tamagui";
import { KeyboardAvoidingView } from "react-native";
import { AuthForm } from "../../components/Forms/AuthForm";

export const AuthPage = () => {
  const BackgroundImage = require('../../assets/images/auth-background.png')
  
  return (
    <KeyboardAvoidingView
      behavior={'padding'}
      style={{flex: 1}}
    >
    <YStack f={1} alignItems={'center'}>
      <Image
        source={BackgroundImage}
        position={'absolute'}
      />
        <YStack gap={'$6'} f={1} justifyContent={'flex-end'} alignSelf={'flex-start'} w={'100%'}>
          <YStack px={'$5'} gap={'$2'}>
            <H2 color={'$content_text_secondary'} fontFamily={'$bold'} fontSize={'$10'}>Bem-vindo de volta!</H2>
            <Text color={'$content_text_secondary'} fontSize={'$1'}>Preparado para mais uma jornada?</Text>
          </YStack>
          <AuthForm />
        </YStack>
      </YStack>
    </KeyboardAvoidingView>
  )
}
