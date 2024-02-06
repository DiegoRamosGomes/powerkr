import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ChartPieIcon(props: any) {
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
        d="M10 10V2.5M16.492 6.25l-12.984 7.5M2.625 11.375A7.257 7.257 0 012.5 10a7.492 7.492 0 015-7.07v5.625l-4.875 2.82zM10 2.5a7.5 7.5 0 11-6.469 11.297"
        stroke="#CDD5DF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ChartPieIcon
