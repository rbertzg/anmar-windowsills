import { Icon } from '@phosphor-icons/react'

interface AdvantageCardProps {
  title: string
  description: string
  icon: Icon
}

const AdvantageCard = ({
  title,
  description,
  icon: Icon,
}: AdvantageCardProps) => {
  return (
    <div className="flex items-start gap-3">
      <Icon
        size={32}
        weight="thin"
        className="shrink-0 text-primary-500"
      />
      <div>
        <strong className="block text-lg font-medium lg:text-base">
          {title}
        </strong>
        <p className="mt-0.5 font-light lg:text-sm">{description}</p>
      </div>
    </div>
  )
}

export default AdvantageCard
