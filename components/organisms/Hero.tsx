import { ButtonGroupProps, HeroProps } from "@/types"
import { SubTitle } from "../atoms"
import { ButtonGroup } from "../molecules"

interface HeroPropsWithButtonGroupProps extends HeroProps, ButtonGroupProps {}

const Hero = ({
  title,
  desc,
  primaryBtnText,
  primaryBtnUrl,
  secondaryBtnText,
  secondaryBtnUrl,
}: HeroPropsWithButtonGroupProps) => {
  return (
    <section className="pt-[96px] text-center pb-10">
      <div className="container">
        <h1 className="font-title text-[75px] leading-[86px] text-color-content-primary uppercase mb-4">
          {title || "Hero Title"}
        </h1>

        <div className="max-w-[580px] w-full mx-auto text-color-content-secondary mb-6">
          <SubTitle>
            {desc || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          </SubTitle>
        </div>

        <ButtonGroup
          className="justify-center"
          primaryBtnText={primaryBtnText}
          primaryBtnUrl={primaryBtnUrl}
          secondaryBtnText={secondaryBtnText}
          secondaryBtnUrl={secondaryBtnUrl}
        />
      </div>
    </section>
  )
}

export default Hero
