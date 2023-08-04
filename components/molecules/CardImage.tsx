import Image from "next/image"

interface CardImageProps {
  title?: string
  desc?: string
  imageUrl?: string
  imgAlt?: string
}

const CardImage = ({
  title = "Section Title",
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odit natus nulla quia dolore, suscipit harum ipsum labore nobis dolorum.",
  imageUrl = "https://placehold.jp/200x200.png",
  imgAlt = "placeholder",
}: CardImageProps) => {
  return (
    <div className="">
      <h4 className="">{title}</h4>

      <p className="">{desc}</p>

      <Image
        src={imageUrl}
        width={200}
        height={200}
        alt={imgAlt}
        className=""
      />
    </div>
  )
}

export default CardImage
