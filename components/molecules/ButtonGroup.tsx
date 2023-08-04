import classNames from "classnames"
import { ButtonLink } from "../atoms"
import { ButtonGroupProps } from "@/types"

const ButtonGroup = ({
  className = "",
  children = <p>Add buttons here</p>,
}: ButtonGroupProps) => {
  return (
    <div className={classNames("flex items-center gap-4", className)}>
      {children}
      {/* {primaryBtnText !== "" && (
        <ButtonLink url={primaryBtnUrl} linkable secondaryBtnVariant={variant}>
          {primaryBtnText}
        </ButtonLink>
      )}

      {secondaryBtnText !== "" && (
        <ButtonLink
          url={secondaryBtnUrl}
          linkable
          variant={secondaryBtnVariant}
        >
          {secondaryBtnText}
        </ButtonLink> 
      )}*/}
    </div>
  )
}

export default ButtonGroup
