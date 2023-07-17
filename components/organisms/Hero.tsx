import { HeroProps } from "@/types"
import { SectionTitle, SubTitle } from "../atoms"

const Hero = ({ title, subTitle, children }: HeroProps) => {
  return (
    <section className="pt-[96px] text-center pb-10">
      <div className="container">
        <SectionTitle classes="font-title text-[75px] leading-[86px] text-color-content-primary uppercase mb-4">
          {title || "Hero Title"}
        </SectionTitle>

        <div className="max-w-[580px] w-full mx-auto text-color-content-secondary mb-6">
          <SubTitle>
            {subTitle ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          </SubTitle>
        </div>

        {children}
      </div>
    </section>
  )
}

export default Hero
