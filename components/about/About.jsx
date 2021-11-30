import React from 'react'
import Link from 'next/link'
import { BsPersonBadge } from 'react-icons/bs'
import Socials from './Socials'
import { VscGithub } from 'react-icons/vsc'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import {BsFacebook} from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillPhone } from 'react-icons/ai'

const About = () => {
    return (

        <div className="h-screen w-screen mt-72 lg:mt-0 lg:pt-20 sm:px-6  lg:px-12 px-6 xl:px-36">
            
            <div className="container lg:flex lg:flex-col">

                <h1 className="text-4xl text-white font-bold ">About</h1>
                
                <div className="flex flex-wrap items-center justify-center lg:justify-between mt-8 lg:mt-20">
                    
                    {/* SOCIALS */}
                    <div className="flex flex-col">

                        <div className="w-80 h-[21rem] bg-body shadow-2xl flex items-center justify-center">
                            
                            <div className="w-[19rem] h-[19rem]">
                                <BsPersonBadge className="w-full h-full text-brand"/>
                            </div>

                        </div>

                        <div className="flex mt-4 items-center justify-center">
                           <Socials name="Github" path="/github" Icon={VscGithub}/>
                           <Socials name="Linkedin" path="/github" Icon={TiSocialLinkedinCircular}/>
                           <Socials name="Facebook" path="/github" Icon={BsFacebook}/>
                           <Socials name="Twitter" path="/github" Icon={AiFillTwitterCircle}/>
                           <Socials name="+234-706-096-2880" path="/github" Icon={AiFillPhone}/>
                        </div>
                        
                    </div>


                    {/* ABOUT */}
                    <div className="  ">

                         <div className="lg:h-[21rem] sm:h-[23rem] p-6 w-[25rem] lg:w-[30rem] drop-shadow-2xl bg-body flex flex-col">
                          
                            <p className="text-2xl space-x-4 text-color space-y-4">
                                Motivated self-taught front-end developer with
                                ability to adapt in both self-starting and
                                collaborative environments while staying focused
                                on achieving high-quality results under strict
                                deadlines. I use Figma, React.js, Redux and Next.js
                                to design and develop Web app effortlessly.
                            </p>

                            <Link href="/" passHref>
                               <button className="bg-cta text-white font-bold text-xl mt-6 lg:mt-2 w-40 p-2 hover:bg-white hover:text-cta">
                                   Download CV
                               </button>
                            </Link>

                         </div>
                         
                    
                    </div>

                </div>

            </div>

        </div>
    )
}

export default About
