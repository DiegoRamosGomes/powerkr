import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HamburgerMenuIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <Path
        d="M11.125 17.438h13.75a.562.562 0 110 1.125h-13.75a.562.562 0 110-1.125zM24.875 13.563h-13.75a.562.562 0 110-1.126h13.75a.562.562 0 110 1.126z"
        fill="#CDD5DF"
        stroke="#CDD5DF"
        strokeWidth={0.125}
      />
      <Path
        d="M24.875 22.375h-13.75a.624.624 0 100 1.25h13.75a.624.624 0 100-1.25z"
        fill="#CDD5DF"
      />
    </Svg>
  )
}

export default HamburgerMenuIcon
