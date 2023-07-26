import Image from "next/image"
import { CardSectionProps } from "@/types"
import { CardImage } from "../molecules"

const CardSection = ({
  children,
  imgSrc = "https://placehold.jp/1100x663.png",
  imgAlt = "placeholder",
  showCardImage = false,
  flipped = false,
}: CardSectionProps) => {
  return (
    <section className="py-[96px]">
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
          {showCardImage && <CardImage />}
        </div>

        {children}
      </div>
    </section>
  )
}

export default CardSection
