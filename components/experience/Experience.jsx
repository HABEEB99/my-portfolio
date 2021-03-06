import React, { useState } from 'react'
import { BsArrowLeft, BsArrowRight, BsBootstrapFill } from 'react-icons/bs'
import { FaReact, FaUserGraduate } from 'react-icons/fa'
import { GiAmericanFootballHelmet} from "react-icons/gi"

const Experience = () => {

    const [show, setShow]=useState(true)

    const handleExp = () => {
        setShow(true)
    }

    const handleEdu = () => {
        setShow(false)
    }

    return (
        <div id="experience" className="h-screen w-screen mt-[38rem] lg:mt-0 lg:pt-20 sm:px-6  lg:px-12 px-6 xl:px-36">

             <h1 className="text-4xl text-white font-bold "> Experience </h1>
             
             <div className="flex items-center justify-center mt-6">
                 <button onClick={handleExp} className="text-2xl transition duration-300 ease-in-out h-12 w-44 mr-1 text-body hover:text-cta  bg-color  text-center">Job Experience</button>
                 <button onClick={handleEdu} className="text-2xl transition duration-300 ease-in-out h-12 w-44 text-body hover:text-cta  bg-color  text-center">Education</button>
             </div>
              
            
            
                       {/* JOB EXPERIENCE */}
               {show && (
                <div className="w-full lg:h-[60vh]  border-l-2 lg:border-l-0 mt-8 lg:flex items-center lg:justify-between relative">

                <GiAmericanFootballHelmet className="animate-bounce absolute text-cta text-4xl top-[63%] lg:top-[62%] left-0 lg:left-[48.5%]"/>
                <FaReact className="animate-bounce absolute text-cta text-4xl top-[7%] lg:top-[10%] left-0 lg:left-[48.5%]"/>
                <BsArrowRight className="lg:hidden absolute text-cta text-4xl top-[7%] lg:top-[60%] lg:left-[54%] left-12"/>
                <BsArrowLeft  className="hidden lg:block absolute text-cta text-4xl top-[10%] left-[43%]"/>
                <BsArrowRight className=" absolute text-cta text-4xl top-[63%] lg:top-[62%] lg:left-[54%] left-12"/>
                <div className="lg:flex-1 ml-[3.5rem] lg:ml-0 mb-10 lg:mb-0 lg:border-r-2 w-[87vw] lg:w-0 h-full flex justify-start">
                     <div className="shadow-2xl w-[90%] h-48 lg:h-[50%] px-8 flex flex-col items-center justify-center bg-brand">
                         <span className="text-black font-bold text-md"> Sep 2019 - present </span>
                         <h3 className="text-cta font-bold text-xl"> Front-end Developer </h3>
                         <h6 className="text-gray-800 font-bold text-lg">Polycraft</h6> 
                         
                         <p className="text-gray-300 font-bold text-sm">I'm responsible for the design, development and
                            technical implementation of front-end components
                            and user interfaces, using React and Next.js while
                            managing the state through Redux to save 4+ hours
                            of user's time.
                         </p>
                     </div>
                </div>
  
                <div className="lg:flex-1 ml-[3.5rem] lg:ml-0 h-full w-[87vw] flex lg:justify-end lg:mt-[60vh]">
                      <div className="shadow-2xl h-48 w-[90%] lg:h-[50%] px-8 flex flex-col items-center justify-center bg-brand">
                        <span className="text-black font-bold text-md"> Sep 2016 - Aug 2019 </span>
                        <h3 className="text-cta font-bold text-xl"> Junior Electrical Engineer </h3>
                        <h6 className="text-gray-800 font-bold text-lg">Path Electric</h6> 
                        <p className="text-gray-300 font-bold text-sm">
                        Prepared 90% of concept design and completed
                        load calculations and schematics, with the aid of
                        AutoCAD MEP. I also Conducted site visits during the construction phase.
                        </p>
                      </div>
                </div>
  
            </div>
               )}

                 {/* EDUCATION */}
             
             {!show && (
                    
              <div className="w-full lg:h-[60vh]  border-l-2 lg:border-l-0 mt-8 lg:flex items-center lg:justify-between relative">
                <FaUserGraduate  className="animate-bounce absolute text-cta text-4xl top-[73%] lg:top-[70%] left-0 lg:left-[48.5%]"/>
                <BsBootstrapFill  className="animate-bounce absolute text-cta text-4xl top-[18%] lg:top-[20%] left-0 lg:left-[48.5%]"/>
                <BsArrowRight className="lg:hidden absolute text-cta text-4xl top-[18%] lg:top-[60%] lg:left-[54%] left-12"/>
                <BsArrowLeft  className="hidden lg:block absolute text-cta text-4xl top-[20%] left-[43%]"/>
                <BsArrowRight className=" absolute text-cta text-4xl top-[73%] lg:top-[70%] lg:left-[54%] left-12"/>
                 
                 <div  className="lg:flex-1 ml-[3.5rem] lg:ml-0 mb-10 lg:mb-0 lg:border-r-2 w-[87vw] lg:w-0 h-full flex justify-start">

                        <div className="shadow-2xl w-[90%] h-48 lg:h-[50%] px-8 flex flex-col items-center justify-center bg-brand">
                            <span className="text-black font-bold text-md">2021</span>
                            <h3 className="text-cta font-bold text-xl"> Web Development Bootcamp </h3>
                            <h6 className="text-gray-800 font-bold text-lg">Zero To Mastery Academy</h6> 
                        </div>
                 </div>

                 <div  className="lg:flex-1 ml-[3.5rem] lg:ml-0 h-full w-[87vw] flex lg:justify-end lg:mt-[60vh]">
                    <div className="shadow-2xl h-48 w-[90%] lg:h-[50%] px-8 flex flex-col items-center justify-center bg-brand">
                    
                    <span className="text-black font-bold text-md"> 2011 - 2016 </span>
                    <h3 className="text-cta font-bold text-xl">B.ENG Electrical and Electronics</h3>
                    <h6 className="text-gray-800 font-bold text-lg">University Of Ilorin</h6> 
                    
                    </div>
                 </div>

             </div>
             
             )}

          

             

        </div>
    )
}

export default Experience
