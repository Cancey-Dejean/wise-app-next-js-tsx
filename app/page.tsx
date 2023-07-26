import {
  AnimatedVideo,
  PageWrapper,
  SectionTitle,
  SubTitle,
} from "@/components/atoms"
import { AppStoreButtonGroup, ButtonGroup } from "@/components/molecules"
import {
  CardSection,
  FlagRow,
  Hero,
  Perks,
  SendCalculator,
  UseMoney,
} from "@/components/organisms"

export default function Home() {
  return (
    <PageWrapper>
      <Hero
        title="Money for here, there and everywhere"
        subTitle="160 countries. 40 currencies. Get the account built to save you
            money round the world."
      >
        <ButtonGroup
          className="justify-center"
          primaryBtnText="Open an account"
          primaryBtnUrl="#open-account"
          secondaryBtnText="Send money now"
          secondaryBtnUrl="#send-money"
        />
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

        <ButtonGroup
          className="justify-start"
          primaryBtnText="Open an account"
          primaryBtnUrl="#open-account"
          secondaryBtnText="Compare savings"
          secondaryBtnUrl="#compare-savings"
        />

        <AppStoreButtonGroup
          className="mt-10"
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

            <ButtonGroup
              primaryBtnText="Open your card"
              primaryBtnUrl="#open-card"
              secondaryBtnText="Learn more"
              secondaryBtnUrl="#learn-more"
            />
          </div>
        </div>
      </CardSection>

      <FlagRow />

      <CardSection
        imgSrc="/images/cover.jpg"
        imgAlt="flower wall smiling"
        flipped
      >
        <div className="ml-[17%]">
          <div className="max-w-[816px] w-full flex flex-col gap-8 ">
            <SectionTitle>
              Boost your balance with our interest feature
            </SectionTitle>

            <SubTitle className="max-w-[562px] w-full">
              Receive 4.13% APY on your USD balance when you opt-in to our
              interest feature. Instant access, so your money is available to
              you when you need it.
            </SubTitle>

            <ButtonGroup
              primaryBtnText="Discover interest feature"
              primaryBtnUrl="#discover-interest"
              className="mb-10"
            />
          </div>
        </div>
      </CardSection>

      <Perks />
    </PageWrapper>
  )
}
