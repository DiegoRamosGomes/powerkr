import { Avatar, Button, H1, Switch, Text, XStack, YStack } from "tamagui";
import { useContext, useState } from "react";
import { MenuItem } from "../../components/Profile/MenuItem";
import AuthContext from "../../contexts/AuthContext";
import ArrowRight from "../../assets/icons/ArrowRight";
import QuestionIcon from "../../assets/icons/QuestionIcon";
import PowerIcon from "../../assets/icons/PowerIcon";

export const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext)
  
  const [allowNotification, setAllowNotifications] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  
  const handleToggleAllowNotifications = () => {
    setAllowNotifications(prevState => !prevState)
  }
  
  const handleToggleDarkMode = () => {
    setDarkMode(prevState => !prevState)
  }
  
  return (
    <YStack f={1} bg={'$content_background_screen'} p={'$5'} gap={'$6'}>
      <YStack alignItems={'center'} mb={'$6'}>
        <Avatar circular size={'$13'}>
          <Avatar.Image source={{ uri: user?.avatar_url }}/>
        </Avatar>
        <H1 fontFamily={'$medium'} fontSize={'$5'} color={'$content_text_primary'} mt={'$5'}>{user?.name}</H1>
        <Text color={'$content_text_tertiary'} mt={'$2'}>{user?.department_name}</Text>
      </YStack>
      
      <MenuItem
        title={'Nome'}
        rightComponent={<XStack alignItems={'center'} gap={'$3.5'}>
          <Text color={'$content_text_tertiary'}>{user?.name}</Text>
          <ArrowRight/>
        </XStack>}/>
      <MenuItem
        title={'E-mail'}
        rightComponent={<XStack alignItems={'center'} gap={'$3.5'}>
          <Text color={'$content_text_tertiary'}>{user?.email}</Text>
          <ArrowRight/>
        </XStack>}/>
      <MenuItem title={'Alterar Senha'} rightComponent={<ArrowRight/>}/>
      <MenuItem
        title={'Notificações'}
        rightComponent={<Switch
          size={'$1.5'}
          checked={allowNotification}
          backgroundColor={'$brand_primary_pure'}
          onCheckedChange={handleToggleAllowNotifications}
        >
          <Switch.Thumb backgroundColor={'$content_text_primary'} animation="bouncy"/>
        </Switch>}
      />
      <MenuItem
        title={'Modo Noturno'}
        rightComponent={<Switch
          size={'$1.5'}
          checked={darkMode}
          backgroundColor={'$brand_primary_pure'}
          onCheckedChange={handleToggleDarkMode}
        >
          <Switch.Thumb backgroundColor={'$content_text_primary'} animation="bouncy"/>
        </Switch>}
      />
      
      <YStack gap={'$3.5'}>
        <Button
          backgroundColor={'$content_shape_primary'}
          borderColor={'$content_shape_tertiary'}
          borderWidth={'1'}
          borderRadius={50}
        >
          <QuestionIcon />
          <Text fontFamily={'$bold'} fontSize={'$2'} color={'$content_text_primary'}>Ajuda</Text>
        </Button>
        <Button
          backgroundColor={'$content_shape_primary'}
          borderColor={'$content_shape_tertiary'}
          borderWidth={'1'}
          borderRadius={50}
          onPress={() => logout()}
        >
          <PowerIcon />
          <Text fontFamily={'$bold'} fontSize={'$2'} color={'$content_text_primary'}>Sair</Text>
        </Button>
      </YStack>
    </YStack>
  )
}
