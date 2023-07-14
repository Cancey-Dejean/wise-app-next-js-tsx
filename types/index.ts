import { ReactNode } from "react"

// export interface PageWrapper {
//   classes?: string
//   children: ReactNode
// }

// export interface TextLinkProps {
//   children: ReactNode
//   url: string
//   classes?: string
// }

export interface HeroProps {
  title: string
  desc?: string
}

export interface UseMoneyProps {
  title?: string
}

export interface ButtonGroupProps {
  className?: string
  primaryBtnText?: string
  primaryBtnUrl?: string
  secondaryBtnText?: string
  secondaryBtnUrl?: string
}
