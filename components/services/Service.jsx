import React from 'react'
import Image from 'next/image'

const Service = ({title, src, description}) => {
    return (
        <div className="flex flex-col items-center p-8 w-[87vw] h-[60vh] md:h-[55vh] md:w-[42.5vw] sm:h-[40vh] lg:w-[25.5vw] lg:h-[56vh] bg-body shadow-2xl">
            <h3 className="text-cta mb-4 font-bold text-2xl ">{title}</h3>
            <Image className="" src={src} height="40" width="40" objectFit="contain"/>
            <p className=" text-xl mt-4 text-gray-400">{description}</p>
        </div>
    )
}

export default Service
