import { NavbarComponent } from '@/common-app/components/navbar.component'
import { Outlet } from 'react-router-dom'

export const AppLayout: React.FC = () => {

  return (
    <div className='flex flex-col h-screen'>
      <header className='mb-20'>
        <NavbarComponent />
      </header>
      <main className='flex-grow'>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  )
}