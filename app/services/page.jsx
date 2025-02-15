"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num:'01',
        title: "Web Development",
        description: "We build websites that are fast, secure, and easy to use.",
        href:'/services/web-development',
    },
    {
        num:'02',
        title: "UI/UX Design",
        description: "We build websites that are fast, secure, and easy to use.",
        href:'/services/web-development',
    },
    {
        num:'03',
        title: "logo Design",
        description: "We build websites that are fast, secure, and easy to use.",
        href:'/services/web-development',
    },
    {
        num:'04',
        title: "SEO",
        description: "We build websites that are fast, secure, and easy to use.",
        href:'/services/web-development',
    }
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justoify-center pv-12 xl:py-0">
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
                            <div className="text-5x1 font-extrabold">{service.num}</div>
                            <Link href={service.num}>
                            <BsArrowDownRight/>
                            </Link>
                        </div>
                        {/*itle*/}
                        <h2>{service.title}</h2>
                        {/*desvription*/}
                        <p>{service.description}</p>
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