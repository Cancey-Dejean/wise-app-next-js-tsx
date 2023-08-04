import { ReactNode } from "react"
import { CardReview } from "../molecules"
import { CardSection } from "./"
import { ButtonLink, SectionTitle, SubTitle } from "../atoms"
import Image from "next/image"

const WithoutBorders = ({ children }: WithoutBordersProps) => {
  return (
    <section className="py-[154px] bg-color-interactive-primary text-color-light-grey-2">
      <div className="container">
        <h2 className="font-title text-[126px] text-color-interactive-accent leading-[107px] mb-[92px]">
          Meet money without borders
        </h2>

        <div className="mb-[32px]">
          <div className="max-w-[656px] ml-auto">
            <p className="text-[26px] leading-[32px] tracking-[-0.39px] font-semibold">
              Our dream is for people to live and work anywhere seamlessly. That
              means money without borders: moving it instantly, transparently,
              conveniently, and — eventually — for free.
            </p>
          </div>
        </div>

        <CardSection
          imgSrc="/images/mission.jpg"
          imgAlt="Image in hand"
          className="!p-0"
        >
          <div className="flex items-center justify-between gap-[20px]">
            <div className="flex flex-col max-w-[769px] mt-5">
              <SubTitle>
                The Wise account is the universal way for you to manage money
                internationally. It's made for the world. And it's built to save
                your money and time, so you can do more of the things you love.
              </SubTitle>
            </div>

            <ButtonLink url="/" variant="btn-primary">
              Learn about our mission
            </ButtonLink>
          </div>
        </CardSection>

        <div className="container flex items-center mt-[88px]">
          <div className="max-w-[614px] w-full">
            <Image
              src="/images/mission-section-2.jpg"
              alt="Two people smiling"
              width={614}
              height={687}
            />
          </div>

          <div className="max-w-[566px] w-full ml-[100px] mr-auto flex flex-col items-start gap-10">
            <SectionTitle className="text-color-interactive-accent">
              Believe in an open
              <br />
              world
            </SectionTitle>

            <SubTitle className="max-w-[542px] w-full">
              The world is richer when money has no borders. Your ideas fuel the
              Mission Roadmap that's getting us there — tell us what you want to
              see.
            </SubTitle>

            <ButtonLink url="/" variant="btn-primary">
              Check our Mission Roadmap
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WithoutBorders
