import {
  AnimatedVideo,
  ButtonLink,
  PageWrapper,
  SectionTitle,
  SubTitle,
} from "@/components/atoms"
import { AppStoreButtonGroup, ButtonGroup } from "@/components/molecules"
import {
  CardSection,
  FlagRow,
  GoingPlaces,
  Hero,
  Perks,
  SendCalculator,
  Trusted,
  UseMoney,
  WithoutBorders,
} from "@/components/organisms"
import Image from "next/image"

export default function Home() {
  return (
    <PageWrapper>
      <Hero>
        <SectionTitle className="section-title-alt">
          Money for here, there and everywhere
        </SectionTitle>

        <div className="">
          <SubTitle>
            160 countries. 40 currencies. Get the account built to save you
            money round the world.
          </SubTitle>
        </div>

        <ButtonGroup className="">
          <ButtonLink linkable variant="btn-primary" url="#open-account">
            Open an account
          </ButtonLink>

          <ButtonLink linkable variant="btn-secondary" url="#send-money">
            Send money now
          </ButtonLink>
        </ButtonGroup>
      </Hero>

      <AnimatedVideo
        className=""
        videoUrl="/videos/3d-globe-mp4.mp4"
        videoFallbackImage="/images/globe-poster.jpg"
      />

      <UseMoney
        bigImage="/images/useMoney-big.jpg"
        bigImageAlt="Person sitting with back to camera, their phone is showing the Wise app"
        smallerImage="/images/useMoneyPhone.webp"
        smallerImageAlt="Person sitting with back to camera, their phone is showing the Wise app"
      >
        <SectionTitle>
          Use money, save
          <br />
          money, get Wise
        </SectionTitle>

        <SubTitle>
          Save up to 2x when you send, spend and withdraw 40 currencies, all in
          one account.
        </SubTitle>

        <ButtonGroup className="">
          <ButtonLink linkable variant="btn-primary" url="#open-account">
            Open an account
          </ButtonLink>

          <ButtonLink linkable variant="btn-secondary" url="#compare-savings">
            Compare savings
          </ButtonLink>
        </ButtonGroup>

        <AppStoreButtonGroup
          className=""
          LogoOne="/images/app-store.svg"
          LogoOneUrl="#"
          LogoOneAlt="Download from the Apple App Store"
          LogoTwo="/images/play-store.svg"
          LogoTwoUrl="#"
          LogoTwoAlt="Download from the Google Play Store"
        />
      </UseMoney>

      <SendCalculator>
        <SectionTitle>Save up to 3x when sending money abroad</SectionTitle>

        <SubTitle className="">
          Sending money shouldn't cost the earth, so we built Wise to save you
          money when you transfer and exchange internationally. We charge as
          little as possible: right now a tiny fee, eventually free.
        </SubTitle>
      </SendCalculator>

      <CardSection imgSrc="/images/card.jpg" imgAlt="Card in pocket">
        <div className="">
          <div className="">
            <SectionTitle>
              The card that's always got the right currency
            </SectionTitle>

            <SubTitle>
              Save as you spend and withdraw over 40 currencies at the live rate
              automatically.
            </SubTitle>

            <ButtonGroup>
              <ButtonLink linkable variant="btn-primary" url="#open-card">
                Open your card
              </ButtonLink>

              <ButtonLink linkable variant="btn-secondary" url="#learn-more">
                Learn more
              </ButtonLink>
            </ButtonGroup>
          </div>
        </div>
      </CardSection>

      <FlagRow />

      <CardSection
        imgSrc="/images/cover.jpg"
        imgAlt="flower wall smiling"
        flipped
        showCardImage
      >
        <div className="">
          <div className="">
            <SectionTitle>
              Boost your balance with our interest feature
            </SectionTitle>

            <SubTitle className="">
              Receive 4.13% APY on your USD balance when you opt-in to our
              interest feature. Instant access, so your money is available to
              you when you need it.
            </SubTitle>

            <ButtonLink
              linkable
              variant="btn-primary"
              url="#discover-interest"
              className=""
            >
              Discover interest feature
            </ButtonLink>
          </div>
        </div>
      </CardSection>

      <Perks />

      <Trusted>
        <SectionTitle className="section-title-alt">
          Trusted by businesses small and large
        </SectionTitle>

        <div className="">
          <div className="">
            <Image
              src="/images/cards-green.webp"
              alt="Green cards"
              width={769}
              height={528}
              className=""
            />
          </div>

          <div className="">
            <SubTitle>
              Go global with the international business account. Pay employees,
              get paid and manage your cash flow in multiple currencies. Join
              over 300,000 businesses thriving with Wise.
            </SubTitle>

            <ButtonGroup className="">
              <ButtonLink
                linkable
                variant="btn-inverted"
                url="#open-business-account"
                className=""
              >
                Open a Business account
              </ButtonLink>

              <ButtonLink
                linkable
                variant="btn-secondary"
                url="#learn-more"
                className=""
              >
                Learn more
              </ButtonLink>
            </ButtonGroup>
          </div>
        </div>
      </Trusted>

      <GoingPlaces />

      <WithoutBorders />
    </PageWrapper>
  )
}
