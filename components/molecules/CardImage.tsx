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
    <div className="max-w-[360px] min-h-[200px] bg-white absolute bottom-5 right-5 flex flex-col shadow-card-shadow rounded-2xl px-6 pt-6 pb-2">
      <h4 className="mb-2 font-title text-[40px] text-color-interactive-primary">
        {title}
      </h4>

      <p className="mb-2">{desc}</p>

      <Image
        src={imageUrl}
        width={200}
        height={200}
        alt={imgAlt}
        className="ml-auto font-title"
      />
    </div>
  )
}

export default CardImage
