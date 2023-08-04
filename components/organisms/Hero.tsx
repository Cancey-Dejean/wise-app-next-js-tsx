import { HeroProps } from "@/types"

const Hero = ({ children }: HeroProps) => {
  return (
    <section className="">
      <div className="">{children}</div>
    </section>
  )
}

export default Hero
