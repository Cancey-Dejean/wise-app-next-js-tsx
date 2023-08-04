import classNames from "classnames"
import { ButtonLink } from "../atoms"
import { ButtonGroupProps } from "@/types"

const ButtonGroup = ({
  className = "",
  children = <p>Add buttons here</p>,
}: ButtonGroupProps) => {
  return <div className={classNames("", className)}>{children}</div>
}

export default ButtonGroup
