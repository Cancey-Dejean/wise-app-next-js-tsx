import classNames from "classnames"
import { ReactNode } from "react"

interface SubTitleProps {
  children: ReactNode
  className?: string
  tag?: "p" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export default function Subtitle({ children, tag, className }: SubTitleProps) {
  const TagName = tag || "p"

  return (
    <TagName className={classNames("text-xl", className || "")}>
      {children}
    </TagName>
  )
}
