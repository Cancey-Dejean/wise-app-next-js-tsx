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
  children: ReactNode
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

export interface CircleFlagProps {
  imgSrc: string
  imgAlt: string
  className?: string
}

export interface CardSectionProps {
  children: ReactNode
  imgSrc: string
  imgAlt: string
  flipped?: boolean
  showCardImage?: boolean
  className?: string
}
