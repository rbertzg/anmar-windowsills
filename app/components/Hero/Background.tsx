import Image from 'next/image'

const Background = () => {
  return (
    <Image
      src="/img/hero-bg.png"
      alt=""
      width={523}
      height={640}
      priority
      aria-hidden="true"
      className="absolute left-0 top-0 -z-10 object-contain opacity-60 sm:-top-20 sm:rotate-90"
    />
  )
}

export default Background
