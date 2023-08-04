import Link from "next/link"
import { ReactNode } from "react"
import { CheckIcon } from "./"
import classNames from "classnames"

interface IconTextRowProps {
  icon?: ReactNode
  text: string
  textUrl?: string
  linkable?: boolean
  stacked?: boolean
}

const IconTextRow = ({
  icon = <CheckIcon />,
  text = "Link text",
  textUrl = "",
  linkable = false,
  stacked = false,
}: IconTextRowProps) => {
  return (
    <div className={classNames("", stacked ? " " : "")}>
      <div className="">{icon}</div>

      {linkable ? (
        <Link href={textUrl} className="">
          {text}
        </Link>
      ) : (
        <p className="">{text}</p>
      )}
    </div>
  )
}

export default IconTextRow
