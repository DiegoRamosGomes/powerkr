import { styled, Text } from "tamagui";

export const BadgeText = styled(Text, {
  fontFamily: '$medium',
  fontSize: '$1',
  variants: {
    priority: {
      High: {
        color: '$system_success_dark'
      },
      Medium: {
        color: '$system_warning_dark'
      },
      Low: {
        color: '$system_success_light'
      }
    }
  }
})