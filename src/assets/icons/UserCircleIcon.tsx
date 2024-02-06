import * as React from "react"
import Svg, { Path } from "react-native-svg"

function UserCircleIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 25}
      height={props.size || 24}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <Path
        d="M12.5 21a9 9 0 100-18 9 9 0 000 18z"
        stroke={props.color || "#9AA4B2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5 15a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM6.481 18.694a6.75 6.75 0 0112.038 0"
        stroke={props.color || "#9AA4B2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default UserCircleIcon
