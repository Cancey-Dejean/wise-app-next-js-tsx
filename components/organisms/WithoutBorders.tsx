import { ReactNode } from "react"
import { CardReview } from "../molecules"
import { CardSection } from "./"
import { ButtonLink, SectionTitle, SubTitle } from "../atoms"
import Image from "next/image"

const WithoutBorders = () => {
  return (
    <section className="">
      <div className="container">
        <h2 className="section-title-alt">Meet money without borders</h2>

        <div className="">
          <div className="">
            <p className="">
              Our dream is for people to live and work anywhere seamlessly. That
              means money without borders: moving it instantly, transparently,
              conveniently, and — eventually — for free.
            </p>
          </div>
        </div>

        <CardSection
          imgSrc="/images/mission.jpg"
          imgAlt="Image in hand"
          className=""
        >
          <div className="">
            <div className="">
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

        <div className="container">
          <div className="">
            <Image
              src="/images/mission-section-2.jpg"
              alt="Two people smiling"
              width={614}
              height={687}
            />
          </div>

          <div className="">
            <SectionTitle className="">
              Believe in an open
              <br />
              world
            </SectionTitle>

            <SubTitle className="">
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
