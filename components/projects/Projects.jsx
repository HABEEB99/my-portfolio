import React from 'react'
import Project from './Project'

const Projects = () => {
    return (
        <div className="h-screen w-screen mt-[19.5rem] lg:mt-0 lg:pt-20 lg:px-12 px-6 xl:px-36">
            
           <h1 className="text-4xl text-white font-bold">Projects</h1>

           <div className="grid sm:grid-col-1 lg:grid-cols-2 gap-x-4">

             <Project
             title="E-Commerce"
             img="public/vercel.svg"
             stack="Built with next.js, node, express, redux, cloudinary and Tailwind"
             />

             <Project
             title="Luxury Hub"
             img="public/vercel.svg"
             stack="Built with next.js, node, express, redux, cloudinary and Tailwind"
             />

             <Project
             title="Movies Hub"
             img="public/vercel.svg"
             stack="Built with next.js, node, express, redux, cloudinary and Tailwind"
             />

             <Project
             title="Clone"
             img="public/vercel.svg"
             stack="Built with next.js, node, express, redux, cloudinary and Tailwind"
             />
            
           </div>


        </div>
    )
}

export default Projects
