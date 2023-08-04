import { UseMoneyProps } from "@/types"
import Image from "next/image"

const UseMoney = ({
  children,
  bigImage,
  bigImageAlt,
  smallerImage,
  smallerImageAlt,
}: UseMoneyProps) => {
  return (
    <section className="">
      <div className="">
        <div className="">{children}</div>

        <div className="">
          <Image
            src={bigImage || "https://placehold.jp/570x835.png"}
            alt={bigImageAlt || "Alt Text Goes Here"}
            width={570}
            height={835}
            className=""
          />
          <Image
            src={smallerImage || "https://placehold.jp/285x605.png"}
            alt={smallerImageAlt || "Alt Text Goes Here"}
            width={285}
            height={605}
            className=""
          />
        </div>
      </div>
    </section>
  )
}

export default UseMoney
