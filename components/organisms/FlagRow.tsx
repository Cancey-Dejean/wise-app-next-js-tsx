import { CircleFlag } from "../atoms"

const FlagRow = () => {
  return (
    <section className="">
      <div className="">
        <div className="">
          <div className="">
            <div className="">
              <span className="">
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  focusable="false"
                  viewBox="0 0 24 24"
                  className=""
                >
                  <path d="m22.029 11.57-8.572-8.572-1.2 1.2 7.115 7.114H1.713v1.715h17.658l-7.115 7.114 1.2 1.2 8.572-8.572a.829.829 0 0 0 0-1.2Z"></path>
                </svg>
              </span>
            </div>
          </div>

          <CircleFlag imgSrc="/images/eu-detailed.svg" imgAlt="Europe" />
          <CircleFlag imgSrc="/images/in-detailed.svg" imgAlt="India" />
          <CircleFlag imgSrc="/images/us-detailed.svg" imgAlt="USA" />
          <CircleFlag imgSrc="/images/tr-detailed.svg" imgAlt="Turkey" />
          <CircleFlag imgSrc="/images/kr-detailed.svg" imgAlt="South Korea" />
        </div>
      </div>
    </section>
  )
}

export default FlagRow
