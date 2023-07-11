import Link from "next/link"
import { ReactNode } from "react"

interface ButtonProps {
  label: string
  url: string
  classes: string
  icon?: ReactNode
}

const ButtonSmall = ({ label, url, classes, icon }: ButtonProps) => {
  return (
    <Link
      href={url || "#"}
      className={`place-content-center flex h-10 bg-button-gradient ${
        classes || ""
      }`}
    >
      {label || "Button Small"}
      {icon && <span className="ml-2">{icon}</span>}
    </Link>
  )
}

export { ButtonSmall }
