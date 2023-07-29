import { ReactNode } from "react"
import { CardReview } from "../molecules"

interface WithoutBordersProps {
  children: ReactNode
}

const WithoutBorders = ({ children }: WithoutBordersProps) => {
  return (
    <section className="py-[96px] bg-color-interactive-primary text-color-light-grey-2">
      <div className="container">
        <h2 className="font-title text-[96px] text-color-interactive-accent leading-[81px] mb-[92px]">
          Meet money without borders
        </h2>
      </div>
    </section>
  )
}

export default WithoutBorders
