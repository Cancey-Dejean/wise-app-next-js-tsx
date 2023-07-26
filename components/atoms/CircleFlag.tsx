import Image from "next/image"
import { CircleFlagProps } from "@/types"
import classNames from "classnames"

const CircleFlag = ({
  imgSrc = "https://placehold.jp/275x275.png",
  imgAlt = "Placeholder",
  className = "",
}: CircleFlagProps) => {
  return (
    <Image
      src={imgSrc}
      width={184}
      height={184}
      alt={imgAlt}
      className={classNames(
        "p-3 max-w-[275px] w-full rounded-[1000px] tranform rotate-[114deg]",
        className
      )}
    />
  )
}

export default CircleFlag
