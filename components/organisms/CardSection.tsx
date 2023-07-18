import Image from "next/image"
import { CardSectionProps } from "@/types"

const CardSection = ({ children, imgSrc, imgAlt }: CardSectionProps) => {
  return (
    <section className="py-[96px]">
      <div className="container">
        <Image
          src={imgSrc || "https://placehold.jp/1100x663.png"}
          width={1100}
          height={663}
          alt={imgAlt}
        />

        <div className="max-w-[936px] mx-auto">{children}</div>
      </div>
    </section>
  )
}

export default CardSection
