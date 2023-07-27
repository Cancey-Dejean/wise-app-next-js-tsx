import React from "react"
import { BadgeIcon, BankIcon, IconTextRow } from "../atoms"

interface PerksProps {}

const Perks = ({}: PerksProps) => {
  return (
    <div className="flex flex-col gap-10 pb-[96px]">
      <div className="container flex  flex-col gap-10">
        <hr className="w-full" />

        <div className="flex items-center justify-between gap-8">
          <IconTextRow text="Licensed money transmitter" linkable />
          <IconTextRow
            text="We're registered with the Financial Crimes Enforcement Network (FinCEN) in the US"
            icon={<BankIcon />}
          />
          <IconTextRow
            text="Protected up to $250,000"
            icon={<BadgeIcon />}
            linkable
          />
        </div>
      </div>
    </div>
  )
}

export default Perks
