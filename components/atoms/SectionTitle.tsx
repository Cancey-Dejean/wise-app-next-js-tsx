import classNames from "classnames"
import { ReactNode } from "react"

interface SectionTitleProps {
  children: ReactNode
  className?: string
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export default function SectionTitle({
  children,
  tag,
  className,
}: SectionTitleProps) {
  const TagName = tag || "h1"

  return (
    <TagName
      className={classNames(
        "text-[53px] leading-[57px]  tracking-[-1.59px] font-semibold",
        className || ""
      )}
    >
      {children}
    </TagName>
  )
}
