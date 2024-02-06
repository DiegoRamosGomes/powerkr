import { styled } from "tamagui";
import { BadgeComponent } from "./BadgeComponent";

export const Badge = styled(BadgeComponent, {
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