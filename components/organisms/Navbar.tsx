import { Logo, TextLink } from "../atoms"
import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import { DropDownMenu } from "@/components/organisms"
// import { menuItems } from "@/constants"

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  return (
    <header className="h-[82px] flex items-center">
      <div className="container">
        <div
          className={classNames(
            "flex gap-10",
            "[&_ul]:flex [&_ul]:items-center [&_ul]:gap-1",
            "[&_a]:text-[15px] [&_a]:font-semibold [&_a]:leading-[24px] [&_a]:px-2"
          )}
        >
          <Link href="/" className="!px-0">
            <Logo />
          </Link>

          <nav className="flex items-center justify-between w-full ">
            <ul>
              <li>
                <Link href="/about">Personal</Link>
              </li>
              <li>
                <Link href="/about">Business</Link>
              </li>
            </ul>

            <ul>
              <li>
                <DropDownMenu />
              </li>
              <li>
                <Link href="/about">Pricing</Link>
              </li>
              <li>
                <Link href="/about">Help</Link>
              </li>
              <li>
                <Link href="/about">EN</Link>
              </li>
              <li>
                <Link href="/about">Log in</Link>
              </li>
              <li>
                <Link href="/about">Register</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
