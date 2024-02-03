import { config } from '@tamagui/config/v2-native'

import { createTamagui } from 'tamagui'

const tamaguiConfig = createTamagui({
  ...config,
  tokens: {
    ...config.tokens,
    space: {
      ...config.tokens.space,
      2: 8
    }
  },
  defaultFont: 'regular',
  fonts: {
    ...config.fonts,
    regular: {
      family: 'Inter',
      size: {
        1: 12,
        2: 14
      }
    },
    medium: {
      family: 'InterMedium',
      size: {
        2: 14
      }
    },
    bold: {
      family: 'InterBold',
      size: {
        2: 14,
        10: 30
      }
    },
  },
  themes: {
    dark: {
      brand_secondary_pure: '#182E43',
      brand_primary_pure: '#F7B519',
      brand_primary_pure_disabled: '#866619',
      content_text_secondary: '#FFFFFF',
      content_text_tertiary: '#9AA4B2',
      content_shape_secondary: '#364152',
      content_shape_tertiary: '#4B5565',
      content_error: '#dc2222'
    }
  }
})

type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  
  interface TamaguiCustomConfig extends Conf {
  }
  
}
export default tamaguiConfig
