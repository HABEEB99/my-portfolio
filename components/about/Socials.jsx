import React from 'react'
import Link from 'next/link'

const Socials = ({Icon, name, path}) => {
    return (
        <div className="transition duration-300 ml-4 ease-in-out w-8 h-8 group hover:bg-color rounded-[50%] flex items-center hover:rounded-3xl hover:w-64 hover:h-12 bg-brand">

            <Icon className="text-[3rem] block font-bold text-cta"/>

            <Link href={path}>
               <a className="group-hover:block hidden ml-1 text-lg">{name}</a>
            </Link>

        </div>
    )
}

export default Socials
