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
        <SectionTitle className="section-title-alt text-color-content-primary mb-8">
          Money for here, there and everywhere
        </SectionTitle>

        <div className="max-w-[580px] w-full mx-auto text-color-content-secondary mb-6">
          <SubTitle>
            160 countries. 40 currencies. Get the account built to save you
            money round the world.
          </SubTitle>
        </div>

        <ButtonGroup className="justify-center">
          <ButtonLink linkable variant="btn-primary" url="#open-account">
            Open an account
          </ButtonLink>

          <ButtonLink linkable variant="btn-secondary" url="#send-money">
            Send money now
          </ButtonLink>
        </ButtonGroup>
      </Hero>

      <AnimatedVideo
        className="max-w-[897px] w-full mx-auto "
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

        <ButtonGroup className="justify-start">
          <ButtonLink linkable variant="btn-primary" url="#open-account">
            Open an account
          </ButtonLink>

          <ButtonLink linkable variant="btn-secondary" url="#compare-savings">
            Compare savings
          </ButtonLink>
        </ButtonGroup>

        <AppStoreButtonGroup
          className="mt-2"
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

        <SubTitle className="max-w-[423px] w-full">
          Sending money shouldn’t cost the earth, so we built Wise to save you
          money when you transfer and exchange internationally. We charge as
          little as possible: right now a tiny fee, eventually free.
        </SubTitle>
      </SendCalculator>

      <CardSection imgSrc="/images/card.jpg" imgAlt="Card in pocket">
        <div className="max-w-[1133px] w-full mx-0">
          <div className="max-w-[566px] w-full flex flex-col gap-8 ml-[8%]">
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
        <div className="ml-[17%]">
          <div className="max-w-[816px] w-full flex flex-col gap-8 items-start">
            <SectionTitle>
              Boost your balance with our interest feature
            </SectionTitle>

            <SubTitle className="max-w-[562px] w-full">
              Receive 4.13% APY on your USD balance when you opt-in to our
              interest feature. Instant access, so your money is available to
              you when you need it.
            </SubTitle>

            <ButtonLink
              linkable
              variant="btn-primary"
              url="#discover-interest"
              className="items-start mb-10"
            >
              Discover interest feature
            </ButtonLink>
          </div>
        </div>
      </CardSection>

      <Perks />

      <Trusted>
        <SectionTitle className="section-title-alt mb-10">
          Trusted by businesses small and large
        </SectionTitle>

        <div className="flex items-start gap-6">
          <div className="max-w-[769px] w-full justify-self-end">
            <Image
              src="/images/cards-green.webp"
              alt="Green cards"
              width={769}
              height={528}
              className="mt-[150px]"
            />
          </div>

          <div className="flex-1 py-10 self-stretch">
            <SubTitle>
              Go global with the international business account. Pay employees,
              get paid and manage your cash flow in multiple currencies. Join
              over 300,000 businesses thriving with Wise.
            </SubTitle>

            <ButtonGroup className="mt-6">
              <ButtonLink
                linkable
                variant="btn-inverted"
                url="#open-business-account"
                className="flex-1"
              >
                Open a Business account
              </ButtonLink>

              <ButtonLink
                linkable
                variant="btn-secondary"
                url="#learn-more"
                className="hover:bg-color-green-hover hover:border-color-green-hover hover:text-color-interactive-accent flex-1"
              >
                Learn more
              </ButtonLink>
            </ButtonGroup>
          </div>
        </div>
      </Trusted>

      <GoingPlaces>Hello</GoingPlaces>

      <WithoutBorders />
    </PageWrapper>
  )
}
