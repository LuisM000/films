import { linkRoutes } from '@/core/routes'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const NavbarComponent = () => {
  const Links = [
    { name: 'Github', link: 'https://github.com/LuisM000/films', isExternal: true },
    { name: 'Contacto', link: linkRoutes.contact },
    { name: 'Acerca de', link: linkRoutes.aboutUs },
  ]
  const [open, setOpen] = useState(false)

  return (
    <nav className='w-full'>
      <div className='md:flex items-center justify-between bg-darker md:pr-12 py-4 pl-4 pr-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <span className='text-light'>Mierder Movies</span>
        </div>
        <div onClick={() => setOpen(!open)} className='md:hidden absolute right-8 top-6 cursor-pointer w-7 h-7'>
          <svg className="w-6 h-6 fill-light" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </div>
        <ul className={`md:flex md:pb-0 md:static absolute bg-darker md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-300px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 md:my-0 my-7 text-lg font-medium'>
                <Link to={link.link} target={link.isExternal ? '_blank' : ''} className='text-light hover:text-purple-200 duration-500'>{link.name}</Link>
              </li>))
          }
        </ul>
      </div>
    </nav>
  )
}