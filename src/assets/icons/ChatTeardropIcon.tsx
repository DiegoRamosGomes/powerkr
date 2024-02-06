import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ChatTeardropIcon(props: any) {
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
        d="M12.875 20.25H4.972a.712.712 0 01-.722-.722v-7.903A8.625 8.625 0 0112.875 3v0a8.624 8.624 0 018.625 8.625v0a8.625 8.625 0 01-8.625 8.625v0z"
        stroke={props.color || "#9AA4B2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.875 13.125a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM8.375 13.125a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM17.375 13.125a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
        fill={props.color || "#9AA4B2"}
      />
    </Svg>
  )
}

export default ChatTeardropIcon
