import Image from "next/image"
import { InputGroup } from "../molecules"
import { AngleIcon, ButtonLink } from "../atoms"

function Calculator() {
  return (
    <div className="pb-4 relative rounded-[32px] overflow-hidden">
      <Image
        src="/images/tapestry.svg"
        width={459}
        height={667}
        alt="Design"
        className="w-full h-full object-cover absolute top-0 left-0 z[-1] bg-bottom bg-no-repeat"
      />

      <div className="relative p-8 bg-white text-[14px] leading-[20px] rounded-[32px]">
        <div className="relative">
          <p className="mb-1 ">You send exactly</p>

          <InputGroup defaultValue="1,000" />

          <ul className="py-6 text-base flex flex-col gap-2">
            <li className="flex items-center  gap-3">
              <div className="h-2 w-2 bg-color-light-grey rounded-full mx-1 my-2 flex items-center justify-center"></div>

              <div className="flex items-center gap-3 w-full">
                <div className="flex items-center gap-1 font-semibold">
                  <span>1.30</span>
                  <span>USD</span>
                </div>

                <div className="flex-1">
                  <button className="w-full justify-end flex items-center gap-1">
                    <p className="border-b-[1px] font-semibold border-b-color-content-link text-color-content-link leading-6">
                      Connected bank account (ACH) fee
                    </p>

                    <AngleIcon angleDown />
                  </button>
                </div>
              </div>
            </li>

            <li className="flex items-center  gap-3">
              <div className="h-2 w-2 bg-color-light-grey rounded-full mx-1 my-2 flex items-center justify-center"></div>

              <div className="flex items-center gap-3 w-full">
                <div className="flex items-center gap-1 font-semibold">
                  <span>5.52</span>
                  <span>USD</span>
                </div>

                <div className="flex-1">
                  <button className="w-full justify-end flex items-center gap-1">
                    <p className="  text-color-content-secondary">Our fee</p>
                  </button>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3 ">
              <div className="h-4 w-4 mt-1 bg-color-light-grey rounded-full flex items-center justify-center">
                <span className="pb-[2px]">–</span>
              </div>

              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-3 w-full">
                  <div className="flex items-center gap-1 font-semibold">
                    <span>6.82</span>
                    <span>USD</span>
                  </div>

                  <div className="flex-1">
                    <button className="w-full justify-end flex items-center gap-1">
                      <p className="  text-color-content-secondary">
                        Total fees
                      </p>
                    </button>
                  </div>
                </div>
                <hr className="w-full mt-2" />
              </div>
            </li>

            <li className="flex items-center gap-3">
              <div className="h-4 w-4 bg-color-light-grey rounded-full flex items-center justify-center">
                <span className="pb-[2px]">=</span>
              </div>

              <div className="flex items-center gap-3 w-full">
                <div className="flex items-center gap-1 font-semibold">
                  <span>993.18</span>
                  <span>USD</span>
                </div>

                <div className="flex-1">
                  <button className="w-full justify-end flex items-center gap-1">
                    <p className="  text-color-content-secondary">
                      Total amount we’ll convert
                    </p>
                  </button>
                </div>
              </div>
            </li>

            <li className="flex items-center  gap-3">
              <div className="h-4 w-4 bg-color-light-grey rounded-full flex items-center justify-center">
                <span className="pb-[2px]">×</span>
              </div>

              <div className="flex items-center gap-3 w-full">
                <div className="flex items-center gap-1 font-semibold">
                  <span>0.890950</span>
                </div>

                <div className="flex-1">
                  <button className="w-full justify-end flex items-center gap-1">
                    <p className="border-b-[1px] font-semibold border-b-color-content-link text-color-content-link leading-6">
                      Guaranteed rate <span className="flex-nowrap">(32h)</span>
                    </p>
                  </button>
                </div>
              </div>
            </li>
          </ul>

          <p className="mb-1 ">Recipient gets</p>

          <InputGroup
            imgAlt="EUR Flag"
            defaultValue="884.87"
            currency="EUR"
            imgSrc="/images/eur-flag.svg"
          />

          <div className="mt-6 text-base">
            <p>
              You could save up to{" "}
              <span className="font-semibold">6.06 USD</span>
            </p>
            <p>
              Should arrive <span className="font-semibold">in 8 hours</span>
            </p>
          </div>

          <div className="flex items-center gap-6 mt-[24px]">
            <ButtonLink
              url="/calculator"
              variant="btn-secondary"
              className="flex-1"
            >
              Compare price
            </ButtonLink>

            <ButtonLink
              url="/calculator"
              variant="btn-primary"
              className="flex-1"
            >
              Get started
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
