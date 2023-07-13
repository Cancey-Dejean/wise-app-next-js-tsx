import classNames from "classnames"
import { ReactNode } from "react"

interface ButtonGroupProps {
  children: ReactNode
  className?: string
}

const ButtonGroup = ({ children, className }: ButtonGroupProps) => {
  return (
    <div className={classNames("flex items-center gap-4", className || "")}>
      {children || <p>Add a "ButtonLink" component.</p>}
    </div>
  )
}

export default ButtonGroup
