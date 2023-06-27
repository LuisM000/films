import { NavbarComponent } from './navbar.component'
import { Direction, useScrollDirection } from '@/common/hooks'

export const HeaderComponent = () => {
  const scrollDirection = useScrollDirection()
  return (
    <header className={`sticky ${scrollDirection === Direction.down ? '-top-20 opacity-0' : 'top-0 opacity-1'} transition-all duration-500`}>
      <NavbarComponent />
    </header>
  )

}