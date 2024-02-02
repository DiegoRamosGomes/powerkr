import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EyeIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <Path
        d="M8 3.5C3 3.5 1 8 1 8s2 4.5 7 4.5S15 8 15 8s-2-4.5-7-4.5z"
        stroke="#CDD5DF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        stroke="#CDD5DF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default EyeIcon