import {
  ScrollView,
  SizableText,
  Tabs,
  Text,
  XStack,
  YStack
} from "tamagui";
import { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import { Select } from "../../components/Select";
import ChartPieIcon from "../../assets/icons/ChartPieIcon";
import { PersonalTab } from "../../components/Home/PersonalTab";
import UserCircleIcon from "../../assets/icons/UserCircleIcon";

export const HomePage = () => {
  const { user } = useContext(AuthContext)
  const [activeTab, setActiveTab] = useState('tab1')
  
  return (
    <ScrollView bg={'$content_background_screen'} pt={'$3.5'}>
      <YStack gap={'$5'}>
        <XStack gap={'$2'} alignItems={'center'} px={'$5'}>
          <Text color={'$content_text_secondary'} f={1}>Olá, {user?.username}</Text>
          <Select/>
        </XStack>
        
        <Tabs defaultValue="tab1" onValueChange={value => setActiveTab(value)}>
          <YStack f={1}>
            <Tabs.List justifyContent={'space-between'} gap={'$6'} marginBottom={'$5'} px={'$5'}>
              <Tabs.Tab
                value="tab1"
                f={1}
                bc={activeTab === 'tab1' ? '$content_shape_primary' : 'transparent'}
                borderColor={activeTab === 'tab1' ? '$content_shape_tertiary' : 'transparent'}
                borderWidth={1}
                borderRadius={50}
                gap={'$2'}
              >
                <UserCircleIcon size={20} color={'white'}/>
                <SizableText color={'white'} textAlign={'center'}>Pessoal</SizableText>
              </Tabs.Tab>
              <Tabs.Tab
                value="tab2"
                f={1}
                bc={activeTab === 'tab1' ? 'transparent' : '$content_shape_primary'}
                borderColor={activeTab === 'tab1' ? 'transparent' : '$content_shape_tertiary'}
                borderWidth={1}
                borderRadius={50}
                gap={'$2'}
              >
                <ChartPieIcon/>
                <SizableText color={'white'} textAlign={'center'}>Geral</SizableText>
              </Tabs.Tab>
            </Tabs.List>
            
            <Tabs.Content value="tab1">
              <PersonalTab/>
            </Tabs.Content>
            <Tabs.Content value="tab2">
              <PersonalTab/>
            </Tabs.Content>
          </YStack>
        </Tabs>
      </YStack>
    </ScrollView>
  )
}
