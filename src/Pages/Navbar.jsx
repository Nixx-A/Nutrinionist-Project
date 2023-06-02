import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BiMoon } from 'react-icons/bi'
import { Link, Outlet } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  const [navbarExpanded, setNavbarExpanded] = useState(false)

  const handleClick = () => setNavbarExpanded(!navbarExpanded)

  return (
    <>
      <nav className='text-white navbar fixed flex w-screen flex-row items-center h-10 justify-between bg-[#f66]'>
        <div className='md:hidden'>
          <AiOutlineMenu
            className='w-6 h-5 m-1 cursor-pointer '
            onClick={handleClick}
          />
        </div>
        <Link
          to={'/'}
          className='flex flex-row justify-center items-center cursor-pointer z-50'>
          <img className='w-8' src='/logo.png' />
          <span className='logo-font text-xl'>Flor nutri</span>
        </Link>
        <ul
          className={
            navbarExpanded
              ? 'bg-[#f66] flex w-screen flex-col absolute top-10 p-1 left-0 text-center duration-300 opacity-100  md:duration-0 md:flex-row md:top-0 md:opacity-100 md:left-0 md:block  md:bg-transparent md:p-2'
              : 'flex w-screen flex-col opacity-0 absolute -top-32 p-2   left-0 text-center duration-300 md:flex-row md:top-0 md:opacity-100 md:block'
          }>
          <Link
            to={'sobre-mi'}
            className='mr-4 hover:text-gray-300 duration-300'
            onClick={handleClick}>
            Sobre mi
          </Link>
          <Link
            to={'/consulta-online'}
            className='mr-4 hover:text-gray-300 duration-300'
            onClick={handleClick}>
            Consulta Online
          </Link>
          <Link
            to={'/contacto'}
            className='hover:text-gray-300 duration-300'
            onClick={handleClick}>
            Contacto
          </Link>
          <li></li>
        </ul>
        <div className=''>
          <BiMoon className='m-1 h-5 w-8 cursor-pointer' />
        </div>
      </nav>
      <div className=''>
      <Outlet />
      </div>
    </>
  )
}
