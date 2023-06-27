import { HeaderComponent } from '@/common-app/components'
import { Outlet } from 'react-router-dom'

export const AppLayout: React.FC = () => {

  return (
    <div className='flex flex-col min-h-screen'>
      <HeaderComponent />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  )
}