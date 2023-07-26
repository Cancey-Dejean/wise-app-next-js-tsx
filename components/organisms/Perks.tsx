import React from "react"

interface PerksProps {}

const Perks = ({}: PerksProps) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="container flex  flex-col gap-10">
        <hr className="w-full" />

        <div className="flex items-center justify-between gap-8">
          <div>Perk</div>
          <div>Perks</div>
          <div>Perks</div>
        </div>
      </div>
    </div>
  )
}

export default Perks
