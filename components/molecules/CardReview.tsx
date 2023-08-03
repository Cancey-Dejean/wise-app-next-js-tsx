import Image from "next/image"
import { ButtonLink } from "../atoms"

interface CardReviewProps {
  className?: string
  quote?: string
  imageUrl?: string
  imgAlt?: string
  btnVariant?: "btn-primary" | "btn-inverted"
  cardVariant?: "card-primary" | "card-inverted"
  buttonLabel?: string
}

const CardReview = ({
  className = "",
  quote = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  imageUrl = "https://placehold.jp/154x154.png",
  imgAlt = "placeholder",
  btnVariant = "btn-primary",
  cardVariant = "card-inverted",
  buttonLabel = "Watch video",
}: CardReviewProps) => {
  return (
    <div
      className={`flex flex-col min-w-[487px] p-[50px] mr-6 rounded-[40px] ${className}  ${cardVariant}`}
    >
      <div className="mb-[60px]">
        <Image
          alt={imgAlt}
          src={imageUrl}
          className="rounded-full"
          width={154}
          height={154}
        />
      </div>

      <blockquote className="card-quote text-[40px] leading-[44px] tracking-[-1.2px] font-semibold mb-[100px]">
        "{quote}"
      </blockquote>

      <div className="mt-auto">
        <ButtonLink url="/" variant={btnVariant}>
          {buttonLabel}
        </ButtonLink>
      </div>
    </div>
  )
}

export default CardReview
