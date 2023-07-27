import { HeroProps } from "@/types"

const Hero = ({ children }: HeroProps) => {
  return (
    <section className="pt-[96px] text-center pb-10">
      <div className="container">{children}</div>
    </section>
  )
}

export default Hero
