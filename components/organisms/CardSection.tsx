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
    <section className={` ${className}`}>
      <div className={` ${flipped ? "" : ""}`}>
        <div className="">
          <Image
            src={imgSrc}
            width={1100}
            height={663}
            alt={imgAlt}
            className=""
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
