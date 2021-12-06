import React from 'react'
import Link from 'next/link'
import {AiFillEye} from 'react-icons/ai' 
import {BsPersonCircle} from 'react-icons/bs'

const Showcase = () => {
    return (
        <div className=" container justify-between  lg:flex items-center  h-[92.7vh] w-screen min-w-full  flex-wrap  bg-body   lg:justify-between sm:px-6 lg:px-12 px-6 xl:px-36 ">

            
                <div className="flex  flex-col items-center my-16">
                    <h1 className="font-bold text-color text-6xl w-96">
                        Building aesthetically pleasing web experiences.
                    </h1>
                    
                    
                    <Link href="#projects" passHref className="">
                        
                        <button className="p-8 mr-[9.7rem] rounded-lg hover:bg-color hover:text-cta font-bold text-3xl mt-10 flex items-center justify-center w-56 bg-cta h-12 text-white">
                            <AiFillEye className=" shadow-inner"/> My work
                        </button>

                    </Link>
                </div>


                <div className="flex items-center justify-center animate-pulse">
                
                    <div className="w-96 h-96 rounded-[50%] border-2 border-brand flex items-center justify-center ">
                        
                            <div className="w-80 h-80  rounded-[50%] border-2 border-body shadow-inner self-center">
                                
                                <BsPersonCircle className=" text-[20rem] text-brand"/>

                            </div>

                    </div>

                </div>

           
            
        </div>
    )
}

export default Showcase
