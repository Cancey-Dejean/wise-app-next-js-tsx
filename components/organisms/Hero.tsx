import { HeroProps } from "@/types"
import { SectionTitle, SubTitle } from "../atoms"

const Hero = ({
  title = "Hero Title",
  subTitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  children,
}: HeroProps) => {
  return (
    <section className="pt-[96px] text-center pb-10">
      <div className="container">
        <SectionTitle className="font-title !text-[126px] !leading-[107px] tracking-[0] text-color-content-primary uppercase mb-8">
          {title}
        </SectionTitle>

        <div className="max-w-[580px] w-full mx-auto text-color-content-secondary mb-6">
          <SubTitle>{subTitle}</SubTitle>
        </div>

        {children}
      </div>
    </section>
  )
}

export default Hero
