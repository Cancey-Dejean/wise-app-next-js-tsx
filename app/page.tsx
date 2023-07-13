import { AnimatedVideo, PageWrapper } from "@/components/atoms"
import { Hero } from "@/components/organisms"

export default function Home() {
  return (
    <PageWrapper>
      <Hero
        title="Money for here, there and everywhere"
        desc="160 countries. 40 currencies. Get the account built to save you money round the world."
        primaryBtnText="Open an account"
        primaryBtnUrl="#open-account"
        secondaryBtnText="Save money now"
        secondaryBtnUrl="#save-money"
      />

      <div className="max-w-[897px] w-full mx-auto pt-6">
        <AnimatedVideo />
      </div>
    </PageWrapper>
  )
}
