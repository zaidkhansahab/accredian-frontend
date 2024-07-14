import  { useState } from 'react'
import {Link} from "react-router-dom";
import {FaTimes, FaBars} from "react-icons/fa"

const Header = () => {
    const [navbar, setnavbar] =useState(false)
    const Navbar = [
        {
            name: "Refer&Earn",
            link: "/"
        },
        {
            name: "Resources",
            link: "/"
        },
        {
            name: "About",
            link: "/"
        },
       
    ]
  return (
    <>
    <nav className='w-full h-auto  lg:px-24 md:px-16 sm:px-14 px-12 py-2 shadow-md'>
        <div className='justify-between mx-auto lg:w-full md:items-center md:flex'>
            <div>
                <div className='flex items-center justify-between py-3 md:py-5 md:block'>
                    <Link className='text-3xl text-blue-500 font-semibold tracking-[0.1rem]'>accredian</Link>
                    <button className='bg-blue-700 font-normal text-white px-5 py-1.5 rounded text-[1.1rem] lg:ml-10 md:ml-6 sm:ml-3 ml-3'>cources</button>

                    <div className='md:hidden'>
                        <button className='p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border' onClick={() => setnavbar(!navbar)}>
                            {navbar ? (
                                <FaTimes className='text-gray-400 cursor-pointer'>
                                    size={24}
                                </FaTimes>
                            ) : (
                                <FaBars className='text-gray-400 cursor-pointer'>
                                    size{24}
                                </FaBars>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div className={`flex justify-between items-center md:block ${navbar ? 'block' : "hidden"}`}>
                <ul className='list-none lg:flex md:flex sm:block block gap-x-5 gap-y-16'> 
                    {Navbar.map((item, index) => (
                        <li key={index}>
                            <Link to={item.link} className='text-gray-950 font-medium tracking-wider hover:text-gray-200 ease-out duration-700'>{item.name}</Link>
                        </li>
                    ))}
                    <button className='bg-gray-500 font-normal text-white px-5 py-1.5 rounded text-[1.1rem] lg:ml-10 md:ml-6 sm:ml-3 ml-3'>Login</button>
                    <button className='bg-blue-700 font-normal text-white px-5 py-1.5 rounded text-[1.1rem] lg:ml-10 md:ml-6 sm:ml-3 ml-3'>Try For Free</button>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Header