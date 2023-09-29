import { useEffect, useRef, useState } from 'react'

const useReadMore = <T extends HTMLElement>(defaultHeight: number) => {
  const elementRef = useRef<T>(null)
  const [isContentTooLarge, setIsContentTooLarge] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(true)
  const resizeTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const updateHeight = () => {
      if (elementRef.current) {
        const isHeightTooLarge = elementRef.current.scrollHeight > defaultHeight
        setIsContentTooLarge(isHeightTooLarge)
      }
    }

    const handleResize = () => {
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current)
      }
      resizeTimeout.current = setTimeout(updateHeight, 250)
    }

    updateHeight()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current)
      }
    }
  }, [defaultHeight])

  const toggleCollapse = () => {
    setIsCollapsed((prevState) => !prevState)
  }

  return {
    elementRef,
    isContentTooLarge,
    isCollapsed,
    toggleCollapse,
  }
}

export default useReadMore
