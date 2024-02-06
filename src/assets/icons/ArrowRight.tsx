import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowRight(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M9 4.5l7.5 7.5L9 19.5"
        stroke="#9AA4B2"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ArrowRight
