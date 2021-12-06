import React from 'react'
import Service from './Service'

const Services = () => {
    return (
        <div id="services" className="h-screen w-screen mt-[55rem] sm:mt-[10rem] md:px-16 md:mt-[50rem] lg:mt-0 lg:pt-20 sm:px-6  lg:px-12 px-6 xl:px-36">
             
           <h1 className="text-4xl text-white font-bold ">Services</h1>

           <div className="grid mt-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 lg:mt-20">

               <Service 
               title="Web Design"
               src="/website-design.png"
               description="I design aesthetically pleasing user interfaces
               and experience with figma"/>

               <Service 
               title="Web Development"
               src="/web-development.png"
               description="I develop top notch mobile and web applications
               using html, css, javascript and react.js "/>

               <Service 
               title="SEO"
               src="/seo.png"
               description="With next.js, I can make your mobile or web applications
               to rank among the best apps on the internet. This will attract a lot of
               people to view your products"/>

           </div>

        </div>
    )
}

export default Services
