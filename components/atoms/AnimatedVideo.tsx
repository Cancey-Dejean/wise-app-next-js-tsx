import classNames from "classnames"

interface AnimatedVideoProps {
  className?: string
  videoClasses?: string
  videoUrl: string
  videoFallbackImage: string
}

const AnimatedVideo = ({
  className,
  videoUrl,
  videoFallbackImage,
  videoClasses,
}: AnimatedVideoProps) => {
  return (
    <div className={classNames("", className || "")}>
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={videoFallbackImage}
        className={classNames("", videoClasses || "")}
        src={videoUrl}
      />
    </div>
  )
}

export default AnimatedVideo
