import Image from "next/image"
import { CircleFlagProps } from "@/types"
import classNames from "classnames"

const CircleFlag = ({ imgSrc, imgAlt, className }: CircleFlagProps) => {
  return (
    <Image
      src={imgSrc || "https://placehold.jp/1100x663.png"}
      width={184}
      height={184}
      alt={imgAlt}
      className={classNames(
        "p-3 float-right aspect-square h-full rounded-[1000px] ",
        className || ""
      )}
    />
  )
}

export default CircleFlag
