import Image from "next/image"

interface TopRoomProps {}

const TopRoom = ({}: TopRoomProps) => {
  return (
    <section className="h-[490px] relative bg-top-image-gradient-2  overflow-hidden">
      <div className="bg-top-image bg-no-repeat h-full w-full  bg-cover bg-center absolute -top-px left-0 z-10"></div>
      <div className="h-[320px] absolute w-[1568px] top-0 left-1/2 -translate-x-1/2">
        <div className="bg-top-image-gradient rounded-b-[30px] h-full w-full"></div>

        <div className="absolute top-[102px] h-fit z-30 w-[800px] left-1/2 -translate-x-1/2 text-center pt-[28px]">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-t from-[rgb(218_143_250)] to-[rgb(255_255_255)] font-hero-title text-[50px] leading-[1.3] inline-block">
            Modern teams need
            <br />
            more than just chat
          </h1>
          <p className="drop-shadow-text-shadow">
            Threads is a Slack replacement designed for makers.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TopRoom
