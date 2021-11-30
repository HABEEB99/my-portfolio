import React from 'react'
import {FaRegWindowClose, FaHome, FaInfoCircle} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'
import Link from 'next/link'
import MobileNav from './MobileNav'

const Hamburger = ({open, toggleMobileNav}) => {
    return (
     open ? null : (
        <div className="absolute top-12 right-8 w-64 h-72 p-6 bg-brand ">

            <div onClick={toggleMobileNav} className="flex justify-end ">
              <FaRegWindowClose className="text-3xl text-body hover:text-cta"/>
            </div>

            <nav className="flex flex-col items-center justify-center mt-6 ">

                <MobileNav name="Home" path="/" Icon={FaHome}/>
                <MobileNav name="About" path="/" Icon={FaInfoCircle}/>
                <MobileNav name="Experience" path="/" Icon={MdWork}/>
                <Link href="/contacts" passHref>
                    <button className="bg-cta mt-5 hover:bg-body transition duration-100 ease-in-out p-2 text-white text-xl w-48 font-bold  hover:text-cta">Hire Me</button>
                </Link>
            
            </nav> 
        </div>
     )
    )
}

export default Hamburger
