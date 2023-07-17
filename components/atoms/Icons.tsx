import { AngleIconProps } from "@/types"
import classNames from "classnames"

const AngleIcon = ({ className, angleDown }: AngleIconProps) => {
  return (
    <span
      className={classNames(
        "transform",
        angleDown ? "rotate-180" : "rotate-0",
        className || ""
      )}
    >
      <svg
        width="16"
        height="16"
        fill="currentColor"
        focusable="false"
        viewBox="0 0 24 24"
      >
        <path d="M12.771 7.115a.829.829 0 0 0-1.2 0L3 15.686l1.2 1.2 7.971-7.971 7.972 7.971 1.2-1.2-8.572-8.571Z"></path>
      </svg>
    </span>
  )
}

export { AngleIcon }
