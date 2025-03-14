"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const about = {
  title: "About me",
  description:
    "I am a front-end developer with a passion for creating beautiful, responsive, and user-friendly websites. I have experience with HTML, CSS, JavaScript, React, and Next.js. I am always looking for new challenges and opportunities to learn and grow as a developer.",
  Info: [
    {
      fieldname: "Name",
      fieldvalue: "Vinicius",
    },
    {
      fieldname: "Phone",
      fieldvalue: "(11) 95895-3041",
    },
    {
      fieldname: "Experience",
      fieldvalue: "1 year",
    },
    {
      fieldname: "Instagram",
      fieldvalue: "Vini.Penedo",
    },
    {
      fieldname: "Nationality",
      fieldvalue: "Brazilian",
    },
    {
      fieldname: "email",
      fieldvalue: "Viniciuspenedo2003@gmail.com",
    },
    {
      fieldname: "Freelance",
      fieldvalue: "available",
    },
    {
      fieldname: "Language",
      fieldvalue: "Portuguese, English",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:"I have been working as a front-end developer for the past 2 years. I have experience with HTML, CSS, JavaScript, React, and Next.js. I am always looking for new challenges and opportunities to learn and grow as a developer.",
  items: [
    {
      company: "Google",
      position: "Front-end Developer",
      duration: "2020 - Present",
    },
    {
      company: "Facebook",
      position: "Front-end Developer",
      duration: "2018 - 2020",
    },
    {
      company: "Twitter",
      position: "Front-end Developer",
      duration: "2016 - 2018",
    },
    {
      company: "LinkedIn",
      position: "Front-end Developer",
      duration: "2014 - 2016",
    },
  ]
}

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:"My graduate degree is in Computer Science from the University of California, Berkeley. I have a strong background in computer science and programming. I am passionate about using technology to solve problems and make a positive impact on the world.",
  items:[ {
    institution: "University of California",
    degree: "Bachelor of Science in Computer Science",
    duration: "2010 - 2014",
    },
    {
    institution: "Stanford University",
    degree: "Master of Science in Computer Science",
    duration: "2014 - 2016",
    },
    {
    institution: "Harvard University",
    degree: "Doctor of Philosophy in Computer Science",
    duration: "2016 - 2020",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "I have experience with HTML, CSS, JavaScript, React, and Next.js. I am always looking for new challenges and opportunities to learn and grow as a developer.",
  skillsList :[
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ]
}
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 2.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>  
                <p className="max-m-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                    return (
                      <li key={index} className="bg-[#232329] h-[184px] p-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl  max-w-[260px]min-h-[60p] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/*dat*/}
                          <span  className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    )                  
                    })}</ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
             <div className="flex flex-col gap-[30px] text-center xl:text-left">
             <h3 className="text-4xl font-bold">{education.title}</h3>
             <p className="max-m-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                    return (
                      <li key={index} className="bg-[#232329] h-[184px] p-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl  max-w-[260px]min-h-[60p] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          {/*dat*/}
                          <span  className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    )                  
                    })}</ul>
                </ScrollArea>
             </div>
            </TabsContent>
            
            <TabsContent value="skills" className="w-full h-full">
             <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillsList.map((skills, index) => {
                    return (
                      <li key={index} >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
                             <div className="text-6xl group-hover:text-accent transition-all duration-300">{skills.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skills.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
             </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center  xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.Info.map((item, index ) => {
                        return (
                          <li key={index} className="flex items-center justify-center xl:justify-start gap-x-4">
                            <span className="text-white/60">{item.fieldname}</span>
                            <span className="text-xl">{item.fieldvalue}</span>
                          </li>
                        );
                      })}
                </ul>
              </div>
            
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
