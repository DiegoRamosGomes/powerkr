import { InputWithLabel } from "../../InputWithLabel";
import { Button, Text, YStack } from "tamagui";
import EyeIcon from "../../../assets/icons/EyeIcon";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authFormSchema, authFormType } from "../../../models/auth-user.model";
import AuthContext from "../../../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { RootStackRoutes } from "../../../routes";

export const AuthForm = () => {
  const { loginUserWithEmail, loading } = useContext(AuthContext)
  const navigation = useNavigation<NativeStackNavigationProp<RootStackRoutes>>()
  
  const [passwordVisible, setPasswordVisible] = useState(false)
  
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<authFormType>({
    resolver: zodResolver(authFormSchema)
  })
  
  useEffect(() => {
    register('email')
    register('password')
  }, [register])
  
  const handleChangePasswordVisible = () => {
    setPasswordVisible(prevState => !prevState)
  }
  
  const onSubmit = async (data: authFormType) => {
    const hasLogged = await loginUserWithEmail(data.email, data.password)
    if (!hasLogged) {
      return alert('Usuario ou senha incorretos')
    }
    
    navigation.navigate('Home')
  }
  
  return (
    <YStack
      alignSelf={'auto'}
      p={'$5'}
      pb={'$7'}
      bg={'$brand_secondary_pure'}
      borderTopLeftRadius={'$9'}
      borderTopRightRadius={'$9'}
      gap={'$3.5'}
    >
      <InputWithLabel
        label={'Informações da conta'}
        type={'email-address'}
        placeholder="Insira seu email"
        onChangeText={text => setValue('email', text)}
        errorMessage={errors.email?.message}
      />
      
      <InputWithLabel
        label={'Senha'}
        placeholder={'Senha'}
        type={passwordVisible ? 'visible-password' : 'password'}
        rightIconComponent={<Button unstyled onPress={handleChangePasswordVisible}><EyeIcon/></Button>}
        onChangeText={text => setValue('password', text)}
        errorMessage={errors.password?.message}
      />
      <Text textAlign={'right'} color={'$brand_primary_pure'} fontSize={'$2'}>Esqueceu a senha?</Text>
      <Button
        disabled={loading}
        bg={loading? '$brand_primary_pure_disabled' : '$brand_primary_pure'}
        br={500}
        onPress={handleSubmit(onSubmit)}
      >Entrar</Button>
    </YStack>
  )
}
