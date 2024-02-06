import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowDown(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Path
        d="M16.25 7.5L10 13.75 3.75 7.5"
        stroke="#CDD5DF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ArrowDown
