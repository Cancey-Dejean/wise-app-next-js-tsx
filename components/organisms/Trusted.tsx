import { ReactNode } from "react"

interface TrustedProps {
  children: ReactNode
}

const Trusted = ({ children }: TrustedProps) => {
  return (
    <section className="">
      <div className="">{children}</div>
    </section>
  )
}

export default Trusted
