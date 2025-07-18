"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num:'01',
        title: "Desenvolvimento Web",
        description: "Construímos sites rápidos, seguros e fáceis de usar.",
        href:'/services/web-development',
    },
    {
        num:'02',
        title: "Design UI/UX",
        description: "Construímos sites rápidos, seguros e fáceis de usar.",
        href:'/services/web-development',
    },
    {
        num:'03',
        title: "Design de Logo",
        description: "Construímos sites rápidos, seguros e fáceis de usar.",
        href:'/services/web-development',
    },
    {
        num:'04',
        title: "SEO",
        description: "Construímos sites rápidos, seguros e fáceis de usar.",
        href:'/services/web-development',
    }
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">
        <motion.div 
         initial={{ opacity: 0}}
         animate={{ opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"},
         }}
         className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">

            {services.map((service, index) => {
                return (
                    <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                        {/*top*/}
                        <div className="w-full flex justify-between items-center">
                        <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text transition-all duration-500">
                        {service.num}</div>
                        <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                            <BsArrowDownRight className="text-3xl text-primary" />
                        </Link>

                        </div>
                        {/*itle*/}
                        <h2 className="h2 text-white group-hover:text-accent transition-all duration-500">
                        {service.title}</h2>
                        {/*description*/}
                        <p className="text-white/60">{service.description}</p>
                        {/*border*/}
                        <div className="border-b border-white/20 w-full"></div>

                    </div>
                )
            })}

         </motion.div>
    </div>
    </section>
    )
};

export default Services;