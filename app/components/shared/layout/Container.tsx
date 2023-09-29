import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto max-w-screen-xl px-5 md:px-10 lg:px-20">
      {children}
    </div>
  )
}

export default Container
