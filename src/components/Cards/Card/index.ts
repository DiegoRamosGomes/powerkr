import { Stack, styled } from "tamagui";

export const Card = styled(Stack, {
  bc: '$content_shape_primary',
  borderRadius: '$9',
  variants: {
    size: {
      small: {
        padding: '$3.5'
      },
      big: {
        padding: '$5'
      }
    },
  },
  defaultVariants: {
    size: 'small'
  }
})