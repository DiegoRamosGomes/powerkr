import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowUp(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      {...props}
    >
      <Path
        d="M2.25 7.5L6 3.75 9.75 7.5"
        stroke="#1D8935"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ArrowUp
