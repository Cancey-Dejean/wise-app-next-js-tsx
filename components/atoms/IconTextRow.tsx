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
    <div
      className={classNames(
        "flex  gap-4  flex-1 ",
        stacked ? " flex-col gap-4 items-start" : "items-center justify-center"
      )}
    >
      <div className="p-3 bg-color-neutral rounded-full h-14 w-14 flex items-center justify-center">
        {icon}
      </div>

      {linkable ? (
        <Link
          href={textUrl}
          className="font-semibold underline underline-offset-[4.8px]"
        >
          {text}
        </Link>
      ) : (
        <p className="font-semibold">{text}</p>
      )}
    </div>
  )
}

export default IconTextRow
