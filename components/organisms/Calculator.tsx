import Image from "next/image"
import { InputGroup } from "../molecules"
import { AngleIcon, ButtonLink } from "../atoms"

function Calculator() {
  return (
    <div className="">
      <Image
        src="/images/tapestry.svg"
        width={459}
        height={667}
        alt="Design"
        className=""
      />

      <div className="">
        <div className="">
          <p className="">You send exactly</p>

          <InputGroup defaultValue="1,000" />

          <ul className="">
            <li className="">
              <div className=""></div>

              <div className="">
                <div className="">
                  <span>1.30</span>
                  <span>USD</span>
                </div>

                <div className="">
                  <button className="">
                    <p className="">Connected bank account (ACH) fee</p>

                    <AngleIcon angleDown />
                  </button>
                </div>
              </div>
            </li>

            <li className="">
              <div className=""></div>

              <div className="">
                <div className="">
                  <span>5.52</span>
                  <span>USD</span>
                </div>

                <div className="">
                  <button className="">
                    <p className="">Our fee</p>
                  </button>
                </div>
              </div>
            </li>

            <li className="">
              <div className="">
                <span className="">–</span>
              </div>

              <div className="">
                <div className="">
                  <div className="">
                    <span>6.82</span>
                    <span>USD</span>
                  </div>

                  <div className="">
                    <button className="">
                      <p className="">Total fees</p>
                    </button>
                  </div>
                </div>
                <hr className="" />
              </div>
            </li>

            <li className="">
              <div className="">
                <span className="">=</span>
              </div>

              <div className="">
                <div className="">
                  <span>993.18</span>
                  <span>USD</span>
                </div>

                <div className="">
                  <button className="">
                    <p className="">Total amount we’ll convert</p>
                  </button>
                </div>
              </div>
            </li>

            <li className="">
              <div className="">
                <span className="">×</span>
              </div>

              <div className="">
                <div className="">
                  <span>0.890950</span>
                </div>

                <div className="">
                  <button className="">
                    <p className="">
                      Guaranteed rate <span className="">(32h)</span>
                    </p>
                  </button>
                </div>
              </div>
            </li>
          </ul>

          <p className="">Recipient gets</p>

          <InputGroup
            imgAlt="EUR Flag"
            defaultValue="884.87"
            currency="EUR"
            imgSrc="/images/eur-flag.svg"
          />

          <div className="">
            <p>
              You could save up to <span className="">6.06 USD</span>
            </p>
            <p>
              Should arrive <span className="">in 8 hours</span>
            </p>
          </div>

          <div className="">
            <ButtonLink url="/calculator" variant="btn-secondary" className="">
              Compare price
            </ButtonLink>

            <ButtonLink url="/calculator" variant="btn-primary" className="">
              Get started
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
