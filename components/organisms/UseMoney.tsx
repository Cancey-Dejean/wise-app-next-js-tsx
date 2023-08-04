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
    <section className="py-[96px] mb-[80px]">
      <div className="container flex items-start !max-w-[1385px]">
        <div className="max-w-[471px] w-full flex flex-col gap-8">
          {children}
        </div>

        <div className="flex-1 relative">
          <Image
            src={bigImage || "https://placehold.jp/570x835.png"}
            alt={bigImageAlt || "Alt Text Goes Here"}
            width={570}
            height={835}
            className="ml-auto"
          />
          <Image
            src={smallerImage || "https://placehold.jp/285x605.png"}
            alt={smallerImageAlt || "Alt Text Goes Here"}
            width={285}
            height={605}
            className="absolute left-0 bottom-0 transform translate-x-1/2 translate-y-[10%]"
          />
        </div>
      </div>
    </section>
  )
}

export default UseMoney
