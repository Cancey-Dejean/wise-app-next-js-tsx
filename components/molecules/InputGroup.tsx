import Image from "next/image"
import { AngleIcon } from "../atoms"

interface InputGroupProps {
  defaultValue: string
  currency?: string
  imgSrc?: string
  imgAlt?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputGroup = ({
  imgSrc,
  imgAlt,
  currency,
  defaultValue,
  onChange,
}: InputGroupProps) => {
  return (
    <div className="shadow-[inset_0px_0px_0px_1px_#868685] p-[2px] transition-[box-shadow ] duration-[.3s] ease-in-out  hover:shadow-[inset_0px_0px_0px_2px_#6c6c6b] min-h-[72px] rounded-[10px] overflow-hidden flex items-center justify-between px-4 gap-4">
      <input
        type="text"
        defaultValue={defaultValue}
        className="h-full w-2/3 py-3  text-[22px]"
        onChange={onChange}
      />
      <button className="h-full flex items-center">
        <Image
          src={imgSrc || "/images/us-flag.svg"}
          height={24}
          width={24}
          alt={imgAlt || "US Flag"}
          className="rounded-full h-full"
        />

        <span className=" mx-[9px] text-[22px] font-semibold uppercase">
          {currency || "USD"}
        </span>

        <AngleIcon angleDown />
      </button>
    </div>
  )
}

export default InputGroup
