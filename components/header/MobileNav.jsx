import React from 'react'
import Link from 'next/link'

const MobileNav = ({name, Icon, path}) => {
    return (
        <div className="hover:bg-body flex w-48 items-center group h-8 mb-2  justify-start transition duration-300 ease-in-out">
            <Icon className="group-hover:text-cta text-body "/>
            <Link href={path}>
            <a className="text-gray-500 text-lg ml-2 group-hover:text-brand">{name}</a>
            </Link>
        </div>
    )
}

export default MobileNav
