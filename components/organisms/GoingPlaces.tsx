import { CardReview } from "../molecules"
import { ArrowLeft, ArrowRight } from "../atoms/Icons"

interface GoingPlacesProps {}

const GoingPlaces = ({}: GoingPlacesProps) => {
  return (
    <section className="">
      <div className="">
        <div className="">
          <div className="">
            <h2 className="">For people going places</h2>

            <div className="">
              <button type="button" className="">
                <ArrowLeft />
              </button>

              <button type="button" className="">
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div className="">
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
