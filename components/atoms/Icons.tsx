import { AngleIconProps } from "@/types"
import classNames from "classnames"

const AngleIcon = ({ className = "", angleDown }: AngleIconProps) => {
  return (
    <span
      className={classNames(
        "transform",
        angleDown ? "rotate-180" : "rotate-0",
        className
      )}
    >
      <svg
        width="16"
        height="16"
        fill="currentColor"
        focusable="false"
        viewBox="0 0 24 24"
      >
        <path d="M12.771 7.115a.829.829 0 0 0-1.2 0L3 15.686l1.2 1.2 7.971-7.971 7.972 7.971 1.2-1.2-8.572-8.571Z"></path>
      </svg>
    </span>
  )
}

const CheckIcon = ({ className = "" }) => {
  return (
    <svg
      width="16"
      height="16"
      fill="currentColor"
      focusable="false"
      viewBox="0 0 24 24"
      className={`w-[32px] h-[32px] ${className}`}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.714 12C1.714 6.344 6.343 1.716 12 1.716S22.286 6.343 22.286 12c0 5.657-4.629 10.285-10.286 10.285S1.714 17.658 1.714 12.001Zm1.715 0c0 4.715 3.857 8.572 8.571 8.572 4.714 0 8.572-3.857 8.572-8.571 0-4.715-3.858-8.572-8.572-8.572-4.714 0-8.571 3.857-8.571 8.572Zm6.857 3.085L17.4 7.971l1.2 1.2-7.714 7.714a.846.846 0 0 1-.6.257.846.846 0 0 1-.6-.257L5.4 12.599l1.2-1.2 3.686 3.686Z"
      ></path>
    </svg>
  )
}

const BankIcon = ({ className = "" }) => {
  return (
    <svg
      width="16"
      height="16"
      fill="currentColor"
      focusable="false"
      viewBox="0 0 24 24"
      className={`w-[32px] h-[32px] ${className}`}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.905 2.658a1.304 1.304 0 0 0-1.373-.015L2.42 8.156a.87.87 0 0 0 .45 1.614h1.304v10.002h-1.74v1.739h19.131v-1.74h-1.739v-10h1.304V9.77a.869.869 0 0 0 .466-1.604l-8.69-5.508Zm5.23 5.373-5.933-3.76-6.216 3.76h12.149Zm-5.266 1.74h5.218v10H12.87v-10Zm-6.956 0v10h5.217v-10H5.913Z"
      ></path>
    </svg>
  )
}

const BadgeIcon = ({ className = "" }) => {
  return (
    <svg
      width="16"
      height="16"
      fill="currentColor"
      focusable="false"
      viewBox="0 0 24 24"
      className={`w-[32px] h-[32px] ${className}`}
    >
      <path d="M21.521 5.015c-.042-.429-.428-.729-.857-.729-5.443 0-7.971-2.314-7.971-2.314a.829.829 0 0 0-1.2 0S9.05 4.286 3.52 4.286c-.428 0-.814.3-.857.729 0 .128-1.671 13.586 9.172 17.228.085.043.171.043.257.043s.171 0 .257-.043c10.843-3.6 9.171-17.057 9.171-17.228Zm-2.142 6.857c-1.029 4.414-3.515 7.329-7.286 8.657-3.814-1.371-6.257-4.286-7.286-8.657-.6-2.443-.557-4.757-.471-5.871 4.2-.172 6.728-1.543 7.8-2.315 1.071.772 3.6 2.143 7.8 2.315 0 1.114.043 3.385-.557 5.871Z"></path>
    </svg>
  )
}

const ArrowLeft = ({ className = "" }) => {
  return (
    <svg
      width="16"
      height="16"
      fill="currentColor"
      focusable="false"
      viewBox="0 0 24 24"
      className={`w-[32px] h-[32px] ${className}`}
    >
      <path d="M22.286 11.316H4.629l7.114-7.114-1.2-1.2-8.572 8.571a.829.829 0 0 0 0 1.2l8.572 8.572 1.2-1.2-7.114-7.114h17.657v-1.715Z"></path>
    </svg>
  )
}

const ArrowRight = ({ className = "" }) => {
  return (
    <svg
      width="16"
      height="16"
      fill="currentColor"
      focusable="false"
      viewBox="0 0 24 24"
      className={`w-[32px] h-[32px] ${className}`}
    >
      <path d="m22.029 11.57-8.572-8.572-1.2 1.2 7.115 7.114H1.713v1.715h17.658l-7.115 7.114 1.2 1.2 8.572-8.572a.829.829 0 0 0 0-1.2Z"></path>
    </svg>
  )
}

export { AngleIcon, CheckIcon, BankIcon, BadgeIcon, ArrowLeft, ArrowRight }
