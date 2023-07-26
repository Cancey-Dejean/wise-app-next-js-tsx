import Image from "next/image"

interface CardImageProps {}

const CardImage = ({}: CardImageProps) => {
  return (
    <div className="max-w-[360px] min-h-[200px] bg-white absolute bottom-5 right-5 flex flex-col shadow-card-shadow rounded-2xl px-6 pt-6 pb-2">
      <h4 className="mb-2 font-title text-[40px]">Interest Feature</h4>
      <p className="">
        Get the power of an international account, with the added security of up
        to $250,000 in passthrough FDIC insurance.
      </p>

      <Image
        src="/images/graph-small@2x.webp"
        width={200}
        height={200}
        alt="graph"
        className="ml-auto font-title"
      />
    </div>
  )
}

export default CardImage
