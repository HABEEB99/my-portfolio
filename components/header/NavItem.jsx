import React from 'react'
import Link from 'next/link'

const NavItem = ({name, Icon, path}) => {
    return (
        <div className="flex flex-col items-center group h-8 mx-auto mr-4 justify-center transition duration-300 ease-in-out">
            <Icon className="text-cta hidden group-hover:block animate-bounce"/>
            <Link href={path}>
               <a className="text-gray-300 text-sm group-hover:text-color">{name}</a>
            </Link>
        </div>
    )
}

export default NavItem
