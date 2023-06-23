import { Outlet } from 'react-router-dom'

export const AppLayout: React.FC = () => {
  return (
    <div className='flex flex-col h-screen bg-darker'>
      <h1>Películas mierder</h1>
      <main className='flex-grow'>
        <Outlet />
      </main>
      <h1>Footer</h1>
    </div>
  )
}