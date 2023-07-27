import Link from "next/link"
import { ReactNode } from "react"
import { CheckIcon } from "./"

interface IconTextRowProps {
  icon?: ReactNode
  text: string
  textUrl?: string
  linkable?: boolean
}

const IconTextRow = ({
  icon = <CheckIcon />,
  text = "Link text",
  textUrl = "",
  linkable = false,
}: IconTextRowProps) => {
  return (
    <div className="flex items-center gap-4 justify-center flex-1 ">
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
