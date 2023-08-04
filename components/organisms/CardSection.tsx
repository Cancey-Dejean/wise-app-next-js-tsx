import Image from "next/image"
import { CardSectionProps } from "@/types"
import { CardImage } from "../molecules"

const CardSection = ({
  children,
  imgSrc = "https://placehold.jp/1100x663.png",
  imgAlt = "placeholder",
  showCardImage = false,
  flipped = false,
  className = "",
}: CardSectionProps) => {
  return (
    <section className={`py-[96px] ${className}`}>
      <div
        className={`container flex gap-10 ${
          flipped ? "flex-col-reverse" : "flex-col"
        }`}
      >
        <div className="relative">
          <Image
            src={imgSrc}
            width={1100}
            height={663}
            alt={imgAlt}
            className="w-full"
          />

          {/* Optional Card Content */}
          {showCardImage && (
            <CardImage
              title="Interest Feature"
              desc="Get the power of an international account, with the added security of up to $250,000 in passthrough FDIC insurance"
              imageUrl="/images/graph-small@2x.webp"
            />
          )}
        </div>

        {children}
      </div>
    </section>
  )
}

export default CardSection
