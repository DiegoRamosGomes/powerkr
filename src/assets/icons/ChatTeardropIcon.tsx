import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ChatTeardropIcon(props: any) {
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
        d="M8.25 13.5H2.981a.475.475 0 01-.481-.481V7.75A5.75 5.75 0 018.25 2v0A5.75 5.75 0 0114 7.75v0a5.75 5.75 0 01-5.75 5.75v0z"
        stroke="#F7B519"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.25 8.75a.75.75 0 100-1.5.75.75 0 000 1.5zM5.25 8.75a.75.75 0 100-1.5.75.75 0 000 1.5zM11.25 8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
        fill="#F7B519"
      />
    </Svg>
  )
}

export default ChatTeardropIcon
