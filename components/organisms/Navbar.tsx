"use client"
import { Avatar, ButtonLink, Logo } from "../atoms"
import classNames from "classnames"
import Link from "next/link"
import { DropDownMenu } from "@/components/organisms"
import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
// import { menuItems } from "@/constants"

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  const [open, setOpen] = useState(false)

  return (
    <header className="h-[82px] flex items-center">
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
                <ButtonLink
                  url="/#personal"
                  size="sm"
                  variant="primary"
                  linkable
                >
                  Personal
                </ButtonLink>
              </li>
              <li>
                <Link href="/about" className="menu-link">
                  Business
                </Link>
              </li>
            </ul>

            <ul>
              <li>
                <DropDownMenu labelText="Features" />
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
                <Link
                  href="#"
                  className="menu-link gap-1 hover:bg-transparent"
                  onClick={() => setOpen(true)}
                >
                  <Avatar imgSrc="/images/us-flag.svg" /> EN
                </Link>
                <Transition.Root show={open} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <div className="fixed inset-0 bg-[rgba(14,15,12,.4)]" />

                    <div className="fixed inset-0 overflow-hidden">
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                          <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                          >
                            <Dialog.Panel className="pointer-events-auto w-screen max-w-xl">
                              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                <div className="px-4 sm:px-6">
                                  <div className="flex items-start justify-between">
                                    <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                      Select location and language
                                    </Dialog.Title>
                                    <div className="ml-3 flex h-7 items-center">
                                      <button
                                        type="button"
                                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        onClick={() => setOpen(false)}
                                      >
                                        <span className="sr-only">
                                          Close panel
                                        </span>
                                        <XMarkIcon
                                          className="h-6 w-6"
                                          aria-hidden="true"
                                        />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                  {/* Your content */}
                                </div>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </div>
                  </Dialog>
                </Transition.Root>
              </li>
              <li>
                <Link href="/about" className="menu-link">
                  Log in
                </Link>
              </li>
              <li>
                <ButtonLink
                  url="/#register"
                  size="sm"
                  variant="primary"
                  linkable
                >
                  Register
                </ButtonLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
