import { ReactNode } from "react"

export interface PageWrapper {
  classes?: string
  children: ReactNode
}

export interface TextLinkProps {
  children: ReactNode
  url: string
  classes?: string
}
