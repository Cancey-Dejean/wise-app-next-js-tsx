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

export interface HeroProps {
  children: ReactNode
  title: string
  subTitle: string
}

export interface UseMoneyProps {
  children: ReactNode
  bigImage: string
  bigImageAlt: string
  smallerImage: string
  smallerImageAlt: string
}

export interface SendCalculatorProps {
  children: ReactNode
}

export interface ButtonGroupProps {
  className?: string
  primaryBtnText?: string
  primaryBtnUrl?: string
  secondaryBtnText?: string
  secondaryBtnUrl?: string
}
export interface AppStoreButtonGroupProps {
  className?: string
  LogoOne: string
  LogoOneUrl: string
  LogoOneAlt: string
  LogoTwo?: string
  LogoTwoUrl?: string
  LogoTwoAlt?: string
}

export interface AngleIconProps {
  className?: string
  angleDown?: boolean
}
