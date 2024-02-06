import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AppointmentsIcon(props: any) {
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
        d="M21.5 3.75a.75.75 0 01-.75.75H4.25a.75.75 0 010-1.5h16.5a.75.75 0 01.75.75zM18.5 6h-3.75a1.5 1.5 0 00-1.5 1.5v9a1.5 1.5 0 001.5 1.5h3.75a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0018.5 6zm-8.25 0H6.5A1.5 1.5 0 005 7.5v12.75a1.5 1.5 0 001.5 1.5h3.75a1.5 1.5 0 001.5-1.5V7.5a1.5 1.5 0 00-1.5-1.5z"
        fill={props.color || "#fff"}
      />
    </Svg>
  )
}

export default AppointmentsIcon
