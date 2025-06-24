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
  title: "Sobre mim",
  description:
    "Sou um desenvolvedor front-end apaixonado por criar sites bonitos, responsivos e fáceis de usar. Tenho experiência com HTML, CSS, JavaScript, React e Next.js. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer como desenvolvedor.",
  Info: [
    {
      fieldname: "Nome",
      fieldvalue: "Vinicius",
    },
    {
      fieldname: "Telefone",
      fieldvalue: "(11) 95895-3041",
    },
    {
      fieldname: "Experiência",
      fieldvalue: "1 ano",
    },
    {
      fieldname: "Instagram",
      fieldvalue: "Vini.Penedo",
    },
    {
      fieldname: "Nacionalidade",
      fieldvalue: "Brasileiro",
    },
    {
      fieldname: "E-mail",
      fieldvalue: "Viniciuspenedo2003@gmail.com",
    },
    {
      fieldname: "Freelance",
      fieldvalue: "disponível",
    },
    {
      fieldname: "Idiomas",
      fieldvalue: "Português, Inglês",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Minha Experiência",
  description:"Atuo como desenvolvedor front-end há 2 anos. Tenho experiência com HTML, CSS, JavaScript, React e Next.js. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer como desenvolvedor.",
  items: [
    {
      company: "Google",
      position: "Desenvolvedor Front-end",
      duration: "2020 - Presente",
    },
    {
      company: "Facebook",
      position: "Desenvolvedor Front-end",
      duration: "2018 - 2020",
    },
    {
      company: "Twitter",
      position: "Desenvolvedor Front-end",
      duration: "2016 - 2018",
    },
    {
      company: "LinkedIn",
      position: "Desenvolvedor Front-end",
      duration: "2014 - 2016",
    },
  ]
}

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Minha Formação",
  description:"Sou graduado em Ciência da Computação pela Universidade da Califórnia, Berkeley. Tenho uma sólida formação em ciência da computação e programação. Sou apaixonado por usar tecnologia para resolver problemas e causar um impacto positivo no mundo.",
  items:[ {
    institution: "Universidade da Califórnia",
    degree: "Bacharelado em Ciência da Computação",
    duration: "2010 - 2014",
    },
    {
    institution: "Universidade de Stanford",
    degree: "Mestrado em Engenharia de Software",
    duration: "2014 - 2016",
    },
  ]
};

const skills = {
  title: "Minhas Habilidades",
  description: "Tenho experiência com HTML, CSS, JavaScript, React e Next.js. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer como desenvolvedor.",
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
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Formação</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre mim</TabsTrigger>
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
