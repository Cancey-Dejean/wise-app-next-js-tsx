import { ReactNode } from "react"

interface TrustedProps {
  children: ReactNode
}

const Trusted = ({ children }: TrustedProps) => {
  return (
    <section className="bg-color-interactive-accent pt-[96px]">
      <div className="container">{children}</div>
    </section>
  )
}

export default Trusted
