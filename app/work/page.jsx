"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, 
    TooltipContent, 
    TooltipProvider, 
    TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { GitBranch } from "lucide-react";

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "Project 1",
        description: "A portfolio website built using Next.js, Tailwind CSS, and Framer Motion.",
        stack: [
            {name: "Html 5"}, {name: "Css 3"}, {name: "javascript"}
        ],
        image: "/assets/work/thumb1.png",
        live: "",
        Github: "",
    },
    {
        num: "02",
        category: "fullstack",
        title: "Project 2",
        description: "A portfolio website built using Next.js, Tailwind CSS, and Framer Motion.",
        stack: [
            {name: "Next.js"}, {name: "Tailwind.css"}, {name: "Node.js"}
        ],
        image: "/assets/work/thumb2.png",
        live: "",
        Github: "",
    },
    {
        num: "03",
        category: "fronttend",
        title: "Project 3",
        description: "A portfolio website built using Next.js, Tailwind CSS, and Framer Motion.",
        stack: [
            {name: "Next.js"}, {name: "Tailwind.css"}],
        image: "/assets/work/thumb3.png",
        live: "",
        Github: "",
    }

];

const Work = () => {
    const [project, setProject] = useState(projects[0]);
    return (
    <motion.div 
    initial={{opacity: 0}}
     animate={{opacity: 1}}
     className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">

        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50px] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div>
                        {/* outline num*/}
                        <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                        {project.num}
                        </div>
                        {/* project category*/}
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize
                        ">{project.category} project</h2>
                        {/* project description*/}
                        <p className="text-white/60">{project.description}</p>
                        {/* project stack*/}
                        <ul className="flex gap-4">
                            {project.stack.map((item, index) => {
                                return (
                                    <li key={index} className="text-xl text-accent">
                                        {item.name}
                                        {/* remove the last comma */}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                );
                            })}
                        </ul>
                        {/* border */}
                        <div className="border border-white/20"></div>
                        {/* buttons */}
                        <div>
                            <Link href={project.live}>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live Project</p>
                                        </TooltipContent>
                                    </TooltipTrigger>
                                </Tooltip>
                            </TooltipProvider>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-[50px] ">slider</div>
            </div>
        </div>
    </motion.div>
    );
};
export default Work;