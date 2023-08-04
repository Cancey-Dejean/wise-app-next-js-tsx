import { SendCalculatorProps } from "@/types"
import { Calculator } from "./"

const SendCalculator = ({ children }: SendCalculatorProps) => {
  return (
    <section className="">
      <div className="">
        <div className="">{children}</div>

        <div className="">
          <div className="">
            <Calculator />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SendCalculator
