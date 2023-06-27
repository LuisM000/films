import { NavbarComponent } from './navbar.component'
import { Direction, useScrollDirection } from '@/common/hooks/useScrollDirection'

export const HeaderComponent = () => {
  const scrollDirection = useScrollDirection()

  return (
    <header className={`sticky ${scrollDirection === Direction.down ? '-top-20' : 'top-0'} transition-all duration-500`}>
      <NavbarComponent />
    </header>
  )

}