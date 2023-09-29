import MagnifyingGlassPlusIcon from 'components/shared/icons/MagnifyingGlassPlus'
import Image from 'next/image'
import { KeyboardEvent } from 'react'

interface WindowsillProps {
  img: string
  desc: string
  onShowSlider: () => void
}

const Windowsill = ({ img, desc, onShowSlider }: WindowsillProps) => {
  const handleClick = () => {
    onShowSlider()
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onShowSlider()
    }
  }

  return (
    <div className="overflow-hidden rounded-md bg-white p-2.5 shadow">
      <div
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className="group relative aspect-[4/3] cursor-pointer overflow-hidden shadow"
      >
        <Image
          key={img}
          src={img}
          alt={desc}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAPAAANPT0////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          className="bg-gradient-to-b from-gray-50 to-gray-200 object-contain duration-200 group-hover:scale-110 group-focus-visible:scale-110"
        />
        <div className="absolute inset-0 hidden items-center justify-center bg-gray-950/50 text-white group-hover:flex group-focus-visible:flex">
          <MagnifyingGlassPlusIcon
            size={64}
            weight="thin"
          />
        </div>
      </div>
    </div>
  )
}

export default Windowsill
