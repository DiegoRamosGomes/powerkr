import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HouseIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <Path
        d="M14.75 19.5V15a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v4.5a.75.75 0 01-.75.75H5a.75.75 0 01-.75-.75v-8.672a.778.778 0 01.244-.553l7.5-6.816a.75.75 0 011.012 0l7.5 6.816a.777.777 0 01.244.553V19.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75z"
        stroke={props.color || "#9AA4B2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default HouseIcon
