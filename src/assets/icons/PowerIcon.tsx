import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PowerIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      {...props}
    >
      <Path
        d="M10.5 3.75v5.938M14.25 4.234a6.875 6.875 0 11-7.5 0"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default PowerIcon
