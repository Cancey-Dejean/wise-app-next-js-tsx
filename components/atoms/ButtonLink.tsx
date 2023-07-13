import classNames from "classnames"
import Link from "next/link"
import { ReactNode } from "react"

interface ButtonProps {
  variant?: "primary" | "secondary"
  size?: "sm" | "lg"
  url: string
  className?: string
  children: ReactNode
  linkable?: boolean
  onClick?: () => void
  btnType?: "button" | "submit"
}

const ButtonLink = ({
  variant,
  size,
  children,
  url,
  className,
  linkable,
  onClick,
  btnType,
}: ButtonProps) => {
  return linkable ? (
    <Link
      href={url || "#"}
      className={classNames(
        "btn",
        variant === "primary" ? "btn-primary" : "btn-secondary",
        size === "sm" ? "btn-size-sm" : "",
        className || ""
      )}
    >
      {children || <span>Linkable Button</span>}
    </Link>
  ) : (
    <button
      type={btnType || "button"}
      onClick={onClick}
      className={classNames(
        "btn",
        variant === "primary" ? "btn-primary" : "secondary",
        size === "sm" ? "btn-size-sm" : "btn-size-lg",
        className || ""
      )}
    >
      {children || <span>Button</span>}
    </button>
  )
}

export default ButtonLink
