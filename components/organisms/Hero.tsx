import { ButtonGroup, ButtonLink } from "../atoms"

interface HeroProps {
  title: string
  desc?: string
  primaryBtnText?: string
  primaryBtnUrl?: string
  secondaryBtnText?: string
  secondaryBtnUrl?: string
}

const Hero = ({
  title,
  desc,
  primaryBtnText,
  primaryBtnUrl,
  secondaryBtnText,
  secondaryBtnUrl,
}: HeroProps) => {
  return (
    <section className="pt-[96px] text-center pb-10">
      <div className="container">
        <h1 className="font-title text-[75px] leading-[86px] text-color-content-primary uppercase mb-4">
          {title || "Hero Title"}
        </h1>

        <div className="max-w-[580px] w-full mx-auto text-color-content-secondary mb-6">
          <p className="text-xl">
            {desc || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          </p>
        </div>

        {primaryBtnText || secondaryBtnText !== "" ? (
          <ButtonGroup className="justify-center">
            {primaryBtnText !== "" && (
              <ButtonLink url={primaryBtnUrl || "#"} linkable variant="primary">
                {primaryBtnText || "Button"}
              </ButtonLink>
            )}

            {secondaryBtnText !== "" && (
              <ButtonLink
                url={secondaryBtnUrl || "#"}
                linkable
                variant="secondary"
              >
                {secondaryBtnText || "Button"}
              </ButtonLink>
            )}
          </ButtonGroup>
        ) : null}
      </div>
    </section>
  )
}

export default Hero
