import Image from "next/image"

interface CardReviewProps {
  className?: string
  quote?: string
  imageUrl?: string
  imgAlt?: string
}

const CardReview = ({
  className = "",
  quote = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  imageUrl = "https://placehold.jp/154x154.png",
  imgAlt = "placeholder",
}: CardReviewProps) => {
  return (
    <div
      className={`bg-slate-300 inline-block min-w-[487px] p-[50px] mr-6 rounded-[40px] ${className}`}
    >
      <div className="mb-[60px]">
        <Image
          alt="Man tosses American football in his hand outside on the pitch"
          src="/images/expats-v3@2x.webp"
          className="rounded-full"
          width={154}
          height={154}
        />
      </div>

      <blockquote className="text-[40px] leading-[44px] tracking-[-1.2px]">
        “Wise has changed the game in terms of simplicity, and certainly been a
        lifesaver for expat living.”
      </blockquote>

      <div className="SocialTrust_card__btn__Trp5q">
        <button
          className="btn btn-md np-btn np-btn-md btn-accent btn-priority-1"
          type="button"
        >
          Watch video
        </button>
      </div>
    </div>
  )
}

export default CardReview
