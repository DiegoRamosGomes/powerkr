import { config } from '@tamagui/config/v2-native'

import { createTamagui } from 'tamagui'

const tamaguiConfig = createTamagui({
  ...config,
  tokens: {
    ...config.tokens,
    space: {
      ...config.tokens.space,
      2: 8,
      3: 10,
      4: 12,
      6: 16,
    },
    size: {
      ...config.tokens.size,
      10: 100
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
        1: 12,
        2: 14,
        3: 16,
        5: 20
      }
    },
    bold: {
      family: 'InterBold',
      size: {
        2: 14,
        3: 16,
        10: 30
      }
    },
  },
  themes: {
    dark: {
      brand_secondary_mid: '#112439',
      brand_secondary_pure: '#182E43',
      brand_primary_pure: '#F7B519',
      brand_primary_pure_disabled: '#866619',
      content_text_primary: '#FFFFFF',
      content_text_secondary: '#CDD5DF',
      content_text_tertiary: '#9AA4B2',
      content_background_screen: '#121926',
      content_shape_primary: '#202939',
      content_shape_secondary: '#364152',
      content_shape_tertiary: '#4B5565',
      content_error: '#dc2222',
      system_success_light: '#F1FEEB',
      system_success_dark: '#1D8935',
      system_success_mid: '#44CB4B',
      system_warning_dark: '#907F0A',
    }
  }
})

type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  
  interface TamaguiCustomConfig extends Conf {
  }
  
}
export default tamaguiConfig
