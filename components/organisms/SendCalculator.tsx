import { SendCalculatorProps } from "@/types"
import { Calculator } from "./"

const SendCalculator = ({ children }: SendCalculatorProps) => {
  return (
    <section className="py-[154px] bg-color-interactive-accent">
      <div className="container flex items-center">
        <div className="flex-1 flex flex-col gap-8">{children}</div>

        <div className="flex-1 relative">
          <div className="max-w-[483px] w-full ml-auto">
            <Calculator />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SendCalculator
