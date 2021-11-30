import React from 'react'
import Link from 'next/link'
import {AiFillEye} from 'react-icons/ai' 
import {BsPersonCircle} from 'react-icons/bs'

const About = () => {
    return (
        <div className=" h-[92.7vh] w-screen min-w-full flex flex-wrap mx-auto bg-body justify-center lg:flex items-center lg:justify-between sm:px-6 lg:px-12 px-6 xl:px-36 ">

            <div className="flex flex-1 flex-col ">
                <h1 className="font-bold text-color text-6xl w-96">
                    Building aesthetically pleasing web experiences.
                </h1>
                
                
                <Link href="/projects" passHref>
                      
                     <button className="p-8 hover:bg-color hover:text-cta font-bold text-3xl mt-10 flex items-center justify-center w-56 bg-cta h-12 text-white">
                        <AiFillEye className=" shadow-inner"/> My work
                     </button>

                </Link>
            </div>


            <div className="">
              
               <div className="w-96 h-96 rounded-[50%] border-2 border-brand flex items-center justify-center ">
                   
                    <div className="w-80 h-80  rounded-[50%] border-2 border-body shadow-inner self-center">
                        
                        <BsPersonCircle className=" text-[20rem] text-brand"/>

                    </div>

               </div>

            </div>
            
        </div>
    )
}

export default About
