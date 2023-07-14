import classNames from "classnames"
import { ReactNode } from "react"

interface SectionTitleProps {
  children: ReactNode
  classes?: string
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export default function SectionTitle({
  children,
  tag,
  classes,
}: SectionTitleProps) {
  const TagName = tag || "h1"

  return (
    <TagName
      className={classNames(
        "text-[45px] leading-[54px] font-semibold",
        classes || ""
      )}
    >
      {children}
    </TagName>
  )
}
