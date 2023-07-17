import {
  AnimatedVideo,
  PageWrapper,
  SectionTitle,
  SubTitle,
} from "@/components/atoms"
import { AppStoreButtonGroup, ButtonGroup } from "@/components/molecules"
import {
  CardSection,
  Hero,
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

        <SubTitle classes="max-w-[423px] w-full">
          Sending money shouldn’t cost the earth, so we built Wise to save you
          money when you transfer and exchange internationally. We charge as
          little as possible: right now a tiny fee, eventually free.
        </SubTitle>
      </SendCalculator>

      <CardSection />
    </PageWrapper>
  )
}
