import classNames from "classnames"
import Link from "next/link"
import { ReactNode } from "react"

interface ButtonProps {
  variant: "btn-primary" | "btn-secondary" | "btn-inverted"
  size?: "btn-sm" | "btn-lrg"
  url: string
  className?: string
  children: ReactNode
  linkable?: boolean
  onClick?: () => void
  btnType?: "button" | "submit"
}

const ButtonLink = ({
  variant = "btn-primary",
  size = "btn-lrg",
  children,
  url = "#",
  className = "",
  linkable,
  onClick,
  btnType = "button",
  ...props
}: ButtonProps) => {
  return linkable ? (
    <Link
      href={url}
      className={classNames(
        "btn",
        `${variant}`,
        `${size}`,
        // variant === "primary" && "btn-primary",
        // variant === "inverted" && "btn-inverted",
        // variant === "inverted" && "btn-primary",
        // size === "sm" ? "btn-size-sm" : "",
        className,
        { ...props }
      )}
    >
      {children || <span>Linkable Button</span>}
    </Link>
  ) : (
    <button
      type={btnType}
      onClick={onClick}
      className={classNames(
        "btn",
        `${variant}`,
        `${size}`,
        // variant === "primary" ? "btn-primary" : "secondary",
        // size === "sm" ? "btn-size-sm" : "btn-size-lg",
        className,
        { ...props }
      )}
    >
      {children || <span>Button</span>}
    </button>
  )
}

export default ButtonLink
