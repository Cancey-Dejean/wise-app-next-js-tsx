import classNames from "classnames"
import Image from "next/image"

interface AvatarProps {
  className?: string
  imgSrc?: string
}

const Avatar = ({ className, imgSrc }: AvatarProps) => {
  return (
    <div
      className={classNames(
        "w-[24px] h-[24px] rounded-full bg-gray-300 overflow-hidden",
        className || ""
      )}
    >
      <Image
        src={imgSrc as string}
        alt="avatar"
        height={24}
        width={24}
        className="object-cover"
        priority
      />
    </div>
  )
}

export default Avatar
