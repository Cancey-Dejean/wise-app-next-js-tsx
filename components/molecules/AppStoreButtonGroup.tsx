import classNames from "classnames"
import { ButtonLink } from "../atoms"
import { AppStoreButtonGroupProps } from "@/types"
import Link from "next/link"
import Image from "next/image"

const AppStoreButtonGroup = ({
  className,
  LogoOne,
  LogoOneUrl,
  LogoOneAlt,
  LogoTwo,
  LogoTwoUrl,
  LogoTwoAlt,
}: AppStoreButtonGroupProps) => {
  return (
    <div className={classNames("", className || "")}>
      {LogoOne !== "" && (
        <Link href={LogoOneUrl || "#"}>
          <Image
            className=""
            src={LogoOne || "https://placehold.jp/167x56.png"}
            alt={LogoOneAlt || "Alt Text Goes Here"}
            width={167}
            height={56}
          />
        </Link>
      )}

      {LogoTwo !== "" && (
        <Link href={LogoTwoUrl || "/"}>
          <Image
            className=""
            src={LogoTwo || "https://placehold.jp/189x56.png"}
            alt={LogoTwoAlt || "Alt Text Goes Here"}
            width={189}
            height={56}
          />
        </Link>
      )}
    </div>
  )
}

export default AppStoreButtonGroup
