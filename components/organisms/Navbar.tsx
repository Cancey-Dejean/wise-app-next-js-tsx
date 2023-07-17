"use client"
import Link from "next/link"
import { Avatar, ButtonLink, Logo } from "../atoms"
import classNames from "classnames"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

const Navbar = () => {
  return (
    <header className="min-h-[82px] flex items-center">
      <div className="container">
        <div
          className={classNames(
            "flex gap-10",
            "[&_ul]:flex [&_ul]:items-center [&_ul]:gap-1"
          )}
        >
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          <nav className="flex items-center justify-between w-full ">
            <ul>
              <li>
                <Link href="/#personal" className="menu-link cta">
                  Personal
                </Link>
              </li>
              <li>
                <Link href="/about" className="menu-link">
                  Business
                </Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link href="/about" className="menu-link">
                  Features
                  <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="menu-link">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="menu-link">
                  Help
                </Link>
              </li>
              <li>
                <Link href="#" className="menu-link gap-1 hover:bg-transparent">
                  <Avatar imgSrc="/images/us-flag.svg" /> EN
                </Link>
              </li>
              <li>
                <Link href="/about" className="menu-link">
                  Log in
                </Link>
              </li>
              <li>
                <Link href="/register" className="menu-link cta">
                  Register
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
