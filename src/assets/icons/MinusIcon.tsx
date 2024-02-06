import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MinusIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={7}
      height={12}
      viewBox="0 0 7 12"
      fill="none"
      {...props}
    >
      <Path
        d="M10.125 6.313h-8.25a.312.312 0 110-.625h8.25a.313.313 0 110 .625z"
        fill="#907F0A"
        stroke="#907F0A"
        strokeWidth={0.125}
      />
    </Svg>
  )
}

export default MinusIcon
