import * as React from "react"
import Svg, { Path } from "react-native-svg"

function NotificationIcon(props: any) {
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
        d="M15.492 25.5h5M12.39 16.125a5.618 5.618 0 015.65-5.625c3.093.023 5.57 2.594 5.57 5.695v.555c0 2.797.585 4.422 1.1 5.313a.624.624 0 01-.538.937H11.828a.624.624 0 01-.539-.938c.516-.89 1.102-2.515 1.102-5.312v-.625z"
        stroke="#CDD5DF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default NotificationIcon
