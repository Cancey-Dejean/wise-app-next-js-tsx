import React from "react"
import { BadgeIcon, BankIcon, IconTextRow } from "../atoms"

interface PerksProps {}

const Perks = ({}: PerksProps) => {
  return (
    <div className="">
      <div className="">
        <hr className="" />

        <div className="">
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
