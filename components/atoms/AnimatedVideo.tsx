interface AnimatedVideoProps {}

const AnimatedVideo = ({}: AnimatedVideoProps) => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      poster="/images/globe-poster.jpg"
      className="max-w-full w-full h-auto"
    >
      <source
        src="/videos/3d-globe-webm.webm"
        type="video/webm; codecs=av01.0.12M.08.0.110.01.01.01.0"
      />
      <source src="/videos/3d-globe-mp4.mp4" type="video/mp4" />
    </video>
  )
}

export default AnimatedVideo
