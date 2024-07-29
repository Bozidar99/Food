import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.png'

function NavBarComonent() {
    const [navItems, setNavItems] = useState([
      {
        title: 'Home',
        url: '/'
      },
      {
        title: 'Recipes',
        url: '/recipes'
      },
      {
        title: 'About',
        url: '/about'
      },
      {
        title: 'Reservation',
        url: '/reservation'
      }
    ])
  return (
    <div className=' container mx-auto flex flex-wrep justify-between  p-4 bg-yellow-500'>
      <div className='flex flex-wrep justify-between items-center p-4'>
        <img src={Logo} alt='logo' className='w-[120px] h-[120px]'/>

        <h1 className='text-3xl font-bold p-4 text-blue-900'>TraditionalRecipes</h1>
      </div>
      <ul className='flex flex-wrep justify-between items-center p-4 '>
      {navItems.map((nav, index) => {
        return <em><li key={index} className='p-4 text-xl font-bold text-blue-900'>
            <NavLink to={nav.url}>
              {nav.title}
              </NavLink>
        </li></em>
      })}
      </ul>
    </div>
  )
}

export default NavBarComonent
