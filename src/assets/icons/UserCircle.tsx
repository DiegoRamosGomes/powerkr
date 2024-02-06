import * as React from "react"
import Svg, { Path } from "react-native-svg"

function UserCircle(props: any) {
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
        d="M10.5 17.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5 12.5a3.125 3.125 0 100-6.25 3.125 3.125 0 000 6.25zM5.484 15.578a5.625 5.625 0 0110.032 0"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default UserCircle
