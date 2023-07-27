import { ReactNode } from "react"

interface GoingPlacesProps {
  children: ReactNode
}

const GoingPlaces = ({ children }: GoingPlacesProps) => {
  return (
    <section className="pt-[96px]">
      <div className="container">{children}</div>
    </section>
  )
}

export default GoingPlaces
