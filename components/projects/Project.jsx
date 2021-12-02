import React from 'react'
import { BsForwardFill } from 'react-icons/bs'
import Link from 'next/link'

const Project = ({ title, img, stack }) => {
    return (
        <div className="flex flex-col  h-[50vh] w-[90vw] sm:grid sm:grid-cols-1  justify-between lg:w-[39vw] lg:h-[35vh] bg-color mt-8 rounded-t-2xl">
            
            {/* PROJECT HEADER */}

            <div className=" bg-brand h-8 rounded-t-2xl w-full justify-between flex items-center px-2">
               
                {/* DOTS */}
                <div className="flex items-center ">
                     <div className="h-2 w-2 ml-1 rounded-[50%] bg-red-600">   </div>
                     <div className="h-2 w-2 ml-1 rounded-[50%] bg-yellow-600">   </div>
                     <div className="h-2 w-2 ml-1 rounded-[50%] bg-green-600">   </div>
                </div>

                <h3 className="text-gray-200 sm:text-xl lg:text-2xl font-bold">{title}</h3>

                <Link href="/" passHref>
                   <BsForwardFill className="text-3xl text-cta animate-pulse hover:text-green-500"/>
                </Link>

            </div>

            {/* PROJECT IMAGE */}
            <div className="text-center lg:h-[25.5vh] ">
                <h2 className="text-center">Project Screen shot</h2>
            </div>



            {/* PROJECT FOOTER */}
            <div className="bg-black px-2 text-center w-full  h-8">
                <span className="text-gray-400 text-center lg:text-base text-sm ">{stack}</span>
            </div>

        </div>
    )
}

export default Project
