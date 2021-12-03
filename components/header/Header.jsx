import React, { useState } from 'react'
import Link from 'next/link'
import NavItem from './NavItem'
import {FaBars,FaTools, FaHome, FaInfoCircle} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'
import Hamburger from './Hamburger'


const Header = () => {

    const [open, setOpen] = useState(true)

    const toggleMobileNav = ( ) => {
        setOpen(!open)
    }

    return (
        <header className="h-12 mx-auto w-screen sticky top-0 z-[1000]">
            <div className=" sm:px-6 md:px-16 mx-auto lg:px-12 px-6 xl:px-36 flex items-center justify-between pt-4">
                 <Link href="/" passHref className="cursor-pointer">
                     <h3 className="text-cta font-sans font-bold sm:text-base lg:text-xl cursor-pointer">
                        Habeeb Ahmadu
                     </h3>
                 </Link>

                 <nav className="hidden lg:flex items-center ">
                    <NavItem name="Home" path="/" Icon={FaHome}/>
                    <NavItem name="About" path="/" Icon={FaInfoCircle}/>
                    <NavItem name="Services" path="/" Icon={FaTools}/>
                    <NavItem name="Experience" path="/" Icon={MdWork}/>
                    <Link href="/contacts" passHref>
                        <button className="bg-cta transition duration-100 ease-in-out p-2 text-white text-xl w-24 font-bold hover:bg-white hover:text-cta">Hire Me</button>
                    </Link>
                   
                 </nav>

                 <FaBars onClick={toggleMobileNav} className="lg:hidden hover:text-brand transition duration-300 ease-in-out text-cta text-2xl text-center" />

            </div>

            <Hamburger open={open} toggleMobileNav={toggleMobileNav} />
        </header>
    )
}

export default Header
