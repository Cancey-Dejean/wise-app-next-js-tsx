import { ButtonGroupProps, UseMoneyProps } from "@/types"
import { SectionTitle, SubTitle } from "../atoms"
import { ButtonGroup } from "../molecules"

interface UseMoneyWithButtonGroupProps
  extends UseMoneyProps,
    ButtonGroupProps {}

const UseMoney = ({
  primaryBtnText,
  primaryBtnUrl,
  secondaryBtnText,
  secondaryBtnUrl,
}: UseMoneyWithButtonGroupProps) => {
  return (
    <section className="py-[96px]">
      <div className="container flex items-center">
        <div className="max-w-[473px] w-full flex flex-col gap-8">
          <SectionTitle tag="h2">
            Use money, save
            <br />
            money, get Wise
          </SectionTitle>

          <SubTitle>
            Save up to 2x when you send, spend and withdraw 40 currencies, all
            in one account.
          </SubTitle>

          <ButtonGroup
            className="justify-start"
            primaryBtnText={primaryBtnText}
            primaryBtnUrl={primaryBtnUrl}
            secondaryBtnText={secondaryBtnText}
            secondaryBtnUrl={secondaryBtnUrl}
          />

          <div>
            <a
              href="https://wise-app.sng.link/Apnl5/big8?_dl=tw%3A%2F%2F&amp;_smtype=3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="tw-app-store-badge__image"
                src="https://wise.com/public-resources/assets/marketing-components/app-store-badges/en.svg"
                alt="Download from the Apple App Store"
              />
            </a>

            <a
              href="https://wise-app.sng.link/Apnl5/big8?_dl=tw%3A%2F%2F&amp;_smtype=3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="tw-google-play-store-badge__image"
                src="https://wise.com/public-resources/assets/marketing-components/google-play-store-badges/en.svg"
                alt="Download from the Google Play Store"
              />
            </a>
          </div>
        </div>

        <div className="flex-1">Hello</div>
      </div>
    </section>
  )
}

export default UseMoney
