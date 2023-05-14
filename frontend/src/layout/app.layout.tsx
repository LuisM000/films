import { Outlet } from 'react-router-dom'

export const AppLayout: React.FC = () => {
  return (
    <div>
      <h1>Header</h1>
      <main>
        <Outlet />
      </main>
      <h1>Footer</h1>
    </div>
  )
}