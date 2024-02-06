import * as React from "react"
import Svg, { Path } from "react-native-svg"

function QuestionIcon(props: any) {
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
        d="M10 17.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 14.844a.781.781 0 100-1.563.781.781 0 000 1.563z"
        fill="#fff"
      />
      <Path
        d="M10 11.25v-.625a2.187 2.187 0 10-2.188-2.188"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default QuestionIcon
