import { useEffect, useState } from 'react'

export enum Direction {
  up = 'up',
  down = 'down',
  still = 'still',
}

export const useScrollDirection = (): Direction => {
  const [scrollDirection, setScrollDirection] = useState<Direction>(Direction.still)

  useEffect(() => {
    let lastScrollY = window.scrollY
    const updateScrollDirection = () => {
      const scrollY = window.scrollY
      const direction = scrollY > lastScrollY ? Direction.down : Direction.up
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }

    window.addEventListener('scroll', updateScrollDirection)
    return () => {
      window.removeEventListener('scroll', updateScrollDirection)
    }
  }, [scrollDirection])

  return scrollDirection
}