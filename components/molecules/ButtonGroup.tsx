import classNames from "classnames"
import { ButtonLink } from "../atoms"
import { ButtonGroupProps } from "@/types"

const ButtonGroup = ({
  className,
  primaryBtnText,
  primaryBtnUrl,
  secondaryBtnText,
  secondaryBtnUrl,
}: ButtonGroupProps) => {
  return (
    <div className={classNames("flex items-center gap-4", className || "")}>
      {primaryBtnText !== "" && (
        <ButtonLink url={primaryBtnUrl || "#"} linkable variant="primary">
          {primaryBtnText || "Button"}
        </ButtonLink>
      )}

      {secondaryBtnText !== "" && (
        <ButtonLink url={secondaryBtnUrl || "#"} linkable variant="secondary">
          {secondaryBtnText || "Button"}
        </ButtonLink>
      )}
    </div>
  )
}

export default ButtonGroup