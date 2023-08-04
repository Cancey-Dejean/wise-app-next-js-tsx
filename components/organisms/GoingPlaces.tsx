import { CardReview } from "../molecules"
import { ArrowLeft, ArrowRight } from "../atoms/Icons"

interface GoingPlacesProps {}

const GoingPlaces = ({}: GoingPlacesProps) => {
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
                className="w-[78px] h-[78px] bg-color-neutral rounded-full flex items-center justify-center  opacity-[.45] grayscale-[1]"
              >
                <ArrowLeft />
              </button>

              <button
                type="button"
                className="w-[78px] h-[78px] bg-color-neutral rounded-full flex items-center justify-center"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/2 ml-auto">
          <div className="flex">
            <CardReview
              cardVariant="card-primary"
              btnVariant="btn-inverted"
              imageUrl="/images/expats-v3@2x.webp"
              imgAlt="Expats"
              quote="Wise has changed the game in terms of simplicity, and certainly been a lifesaver for expat living."
            />
            <CardReview
              imageUrl="/images/uk.svg"
              quote="I use Wise to pay a mortgage in a different country each month. Superb. That simple."
            />

            <CardReview
              imageUrl="/images/us.svg"
              quote="The best money travel buddy! Wise makes finances easier to deal with instantly."
              cardVariant="card-primary"
            />

            <CardReview
              imageUrl="/images/dk.svg"
              quote="Wise has been a lifesaver for me as a student in a foreign country."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoingPlaces
