import classNames from "classnames"
import { ReactNode } from "react"

interface SubTitleProps {
  children: ReactNode
  classes?: string
  tag?: "p" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export default function Subtitle({ children, tag, classes }: SubTitleProps) {
  const TagName = tag || "p"

  return (
    <TagName className={classNames("text-xl", classes || "")}>
      {children}
    </TagName>
  )
}
