import { InputWithLabel } from "../../InputWithLabel";
import { Button, Text, YStack } from "tamagui";
import EyeIcon from "../../../assets/icons/EyeIcon";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const AuthForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  
  const authFormSchema = z.object({
    email: z.string().email('Email inválido'),
    password: z.string().min(3, 'A senha deve possuir no minimo 3 caracteres')
  })
  
  type authFormType = z.infer<typeof authFormSchema>
  
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
  
  const onSubmit = (data: authFormType) => {
    console.log('logn', data)
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
      <Button bg={'$brand_primary_pure'} br={500} onPress={handleSubmit(onSubmit)}>Entrar</Button>
    </YStack>
  )
}
