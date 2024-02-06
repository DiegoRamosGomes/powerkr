import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Text, useTheme, YStack } from 'tamagui'
import { Dimensions } from "react-native";

type RoundedProgressBarProps = {
  value: number
  max: number
  title: string
  subtitle: string
}

export const RoundedProgressBar = ({ max, title, subtitle, value }: RoundedProgressBarProps) => {
  const theme = useTheme()
  const { width } = Dimensions.get('screen')
  
  const percentage = Math.floor((value / max) * 100)
  
  return (
    <YStack alignItems={'center'}>
      <AnimatedCircularProgress
        size={width / 3}
        width={10}
        rotation={220}
        fill={percentage}
        fillLineCap={'round'}
        lineCap={'round'}
        arcSweepAngle={280}
        tintColor={theme.system_success_mid.val}
        backgroundColor={theme.content_shape_secondary.val}
        children={() => {
          return (
            <YStack alignItems={'center'}>
              <Text textAlign={'center'} fontFamily={'$bold'} fontSize={'$3'}
                    color={'$content_text_primary'}>{title}</Text>
              <Text textAlign={'center'} fontSize={'$2'} color={'$content_text_tertiary'}>{subtitle}</Text>
            </YStack>
          )
        }}
      />
    </YStack>
  );
};
