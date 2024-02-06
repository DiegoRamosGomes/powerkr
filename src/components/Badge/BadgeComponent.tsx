import { XStack } from "tamagui";
import ArrowUp from "../../assets/icons/ArrowUp";
import { BadgeText } from "./BadgeText";
import MinusIcon from "../../assets/icons/MinusIcon";

export const BadgeComponent = BadgeText.styleable((props, ref) => {
  const getIconByPriority = () => {
    switch (props.priority) {
      case 'High':
        return <ArrowUp/>
      case 'Medium':
        return <MinusIcon/>
      default:
        return <ArrowUp/>
    }
  }
  
  return (
    <XStack
      px={'$2'}
      py={'$1'}
      borderRadius={'$6'}
      bc={'$system_success_light'}
      alignItems={'center'}
      gap={'$1.5'}
    >
      {getIconByPriority()}
      <BadgeText ref={ref} {...props} />
    </XStack>
  )
})
