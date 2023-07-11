import Link from "next/link"
import { TextLinkProps } from "@/types"

const TextLink = ({ url, children, classes }: TextLinkProps) => {
  return (
    <Link href={url || "#"} className={`${classes || ""}`}>
      {children}
    </Link>
  )
}

export default TextLink
