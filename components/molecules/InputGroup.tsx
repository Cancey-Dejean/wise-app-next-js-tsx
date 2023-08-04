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
    <div className="">
      <input
        type="text"
        defaultValue={defaultValue}
        className=""
        onChange={onChange}
      />
      <button className="">
        <Image
          src={imgSrc || "/images/us-flag.svg"}
          height={24}
          width={24}
          alt={imgAlt || "US Flag"}
          className=""
        />

        <span className="">{currency || "USD"}</span>

        <AngleIcon angleDown />
      </button>
    </div>
  )
}

export default InputGroup
