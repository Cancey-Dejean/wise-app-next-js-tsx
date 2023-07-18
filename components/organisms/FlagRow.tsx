import { CircleFlag } from "../atoms"

const FlagRow = () => {
  return (
    <section className="py-2">
      <div className="h-[260px] overflow-hidden">
        <div className="flex h-full">
          <div className="min-w-[560px] h-full w-full bg-color-interactive-accent flex justify-end  mr-2 rounded-[0_1000px_1000px_0] p-3 ">
            <div className="h-full flex items-center justify-center bg-color-interactive-primary rounded-full ">
              <span className="w-[60%] h-full ">
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  focusable="false"
                  viewBox="0 0 24 24"
                  className=" w-full h-full text-color-interactive-accent"
                >
                  <path d="m22.029 11.57-8.572-8.572-1.2 1.2 7.115 7.114H1.713v1.715h17.658l-7.115 7.114 1.2 1.2 8.572-8.572a.829.829 0 0 0 0-1.2Z"></path>
                </svg>
              </span>
            </div>
          </div>

          <CircleFlag
            imgSrc="/images/eu-detailed.svg"
            imgAlt=""
            // className="p-3 float-right aspect-square h-full rounded-[1000px]  w-full"
          />
          <CircleFlag imgSrc="/images/eu-detailed.svg" imgAlt="" className="" />
          <CircleFlag
            imgSrc="/images/eu-detailed.svg"
            imgAlt=""
            // className="p-3 float-right aspect-square h-full rounded-[1000px]  w-full"
          />
          <CircleFlag
            imgSrc="/images/eu-detailed.svg"
            imgAlt=""
            // className="p-3 float-right aspect-square h-full rounded-[1000px]  w-full"
          />
          <CircleFlag
            imgSrc="/images/eu-detailed.svg"
            imgAlt=""
            // className="p-3 float-right aspect-square h-full rounded-[1000px]  w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default FlagRow
