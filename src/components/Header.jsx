import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const pathMatchRoute = (route) => {
        if(route === location.pathname)
        {
         return true;
        }
    }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
    <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
      <div className="">
        <img onClick={()=>navigate('/')} className='h-5 cursor-pointer'
         src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="" />
      </div>
      <div className="">
        <ul className="flex gap-10">
            <li onClick={()=>navigate('/')} className=
            {`py-3 text-sm font-semibold text-gray-400 cursor-pointer border-b-[3px] border-b-transparent
            ${pathMatchRoute("/") && "text-black border-b-red-500"}`}>
                Home</li>
            <li onClick={()=>navigate('/offers')} className={`py-3 text-sm font-semibold text-gray-400 cursor-pointer border-b-[3px] border-b-transparent
            ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`}>Offers</li>
            <li onClick={()=>navigate('/sign-in')} className={`py-3 text-sm font-semibold text-gray-400 cursor-pointer border-b-[3px] border-b-transparent
            ${pathMatchRoute("/sign-in") && "text-black border-b-red-500"}`}>Sign In</li>
        </ul>
      </div>
    </header>
         </div>
  )
}

export default Header
