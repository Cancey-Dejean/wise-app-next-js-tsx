import { ReactNode } from "react"
import { CardReview } from "../molecules"

interface GoingPlacesProps {
  children: ReactNode
}

const GoingPlaces = ({ children }: GoingPlacesProps) => {
  return (
    <section className="py-[96px]">
      <div className="overflow-hidden relative">
        <div className="container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="max-w-[652px] w-full flex flex-col  justify-stretch self-center">
            <h2 className="font-title text-[96px] leading-[81px] mb-[92px]">
              For people going places
            </h2>

            <div className="flex items-center gap-[26px]">
              <button
                type="button"
                className="w-[78px] h-[78px] bg-color-neutral rounded-full flex items-center justify-center"
              >
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  focusable="false"
                  viewBox="0 0 24 24"
                  className="w-[42px] h-[42px]"
                >
                  <path d="M22.286 11.316H4.629l7.114-7.114-1.2-1.2-8.572 8.571a.829.829 0 0 0 0 1.2l8.572 8.572 1.2-1.2-7.114-7.114h17.657v-1.715Z"></path>
                </svg>
              </button>

              <button
                type="button"
                className="w-[78px] h-[78px] bg-color-neutral rounded-full flex items-center justify-center opacity-[.45] grayscale-[1]"
              >
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  focusable="false"
                  viewBox="0 0 24 24"
                  className="w-[42px] h-[42px]"
                >
                  <path d="m22.029 11.57-8.572-8.572-1.2 1.2 7.115 7.114H1.713v1.715h17.658l-7.115 7.114 1.2 1.2 8.572-8.572a.829.829 0 0 0 0-1.2Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/2 ml-auto">
          <div className="flex">
            <CardReview />
            <CardReview />
            <CardReview />
            <CardReview />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoingPlaces
