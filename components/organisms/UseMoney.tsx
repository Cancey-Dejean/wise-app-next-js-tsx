import { ButtonGroupProps, UseMoneyProps } from "@/types"
import { SectionTitle, SubTitle } from "../atoms"
import { ButtonGroup } from "../molecules"
import Link from "next/link"
import Image from "next/image"

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
      <div className="container flex items-start !max-w-[1385px]">
        <div className="max-w-[471px] w-full flex flex-col gap-8">
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

          <div className="flex gap-8 justify-start">
            <Link
              href="https://wise-app.sng.link/Apnl5/big8?_dl=tw%3A%2F%2F&amp;_smtype=3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="h-[56px]"
                src="https://wise.com/public-resources/assets/marketing-components/app-store-badges/en.svg"
                alt="Download from the Apple App Store"
                width={167}
                height={56}
              />
            </Link>

            <Link
              href="https://wise-app.sng.link/Apnl5/big8?_dl=tw%3A%2F%2F&amp;_smtype=3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="h-[56px]"
                src="https://wise.com/public-resources/assets/marketing-components/google-play-store-badges/en.svg"
                alt="Download from the Google Play Store"
                width={189}
                height={56}
              />
            </Link>
          </div>
        </div>

        <div className="flex-1 relative">
          <Image
            src="/images/useMoney-big.jpg"
            alt="Person sitting with back to camera, their phone is showing the Wise app"
            width={570}
            height={835}
            className="ml-auto"
          />

          <Image
            src="/images/useMoneyPhone.webp"
            alt="Person sitting with back to camera, their phone is showing the Wise app"
            width={285}
            height={605}
            className="absolute left-0 bottom-0 transform translate-x-1/2 translate-y-[10%]"
          />
        </div>
      </div>
    </section>
  )
}

export default UseMoney
