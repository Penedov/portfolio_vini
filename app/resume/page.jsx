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
    "Desenvolvedor com forte interesse em back-end e ambição de me tornar um profissional full-stack. Embora tenha mais experiência com PHP, minha paixão está em aprender e construir projetos com tecnologias como Java e TypeScript. Estou em busca da minha primeira oportunidade para colaborar em projetos desafiadores e continuar crescendo na área.",
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
  title: "Experiência com Projetos",
  description:"Participei de projetos práticos que me permitiram aplicar e aprimorar minhas habilidades em desenvolvimento front-end e back-end. Trabalhei em equipe e de forma independente para criar soluções funcionais, desde a concepção até a implementação.",
  items: [
    {
      company: "Projeto Pessoal",
      position: "Desenvolvedor PHP",
      duration: "2024",
      work:" Criei um marketplace funcional com foco no back-end, implementando um CRUD completo. O maior aprendizado foi lidar com a integração de APIs e a autenticação de usuários, o que solidificou meu entendimento de PHP e Laravel.",
    },
    {
      company: "Projeto de TCC (Etec)",
      position: "Desenvolvedor Front-end",
      duration: "2024 - 2025",
      work: "Colaborei no desenvolvimento de uma plataforma de monitoria digital. Fui responsável pela estruturação do layout e pela implementação de funcionalidades no front-end com Next.js e TypeScript, aprendendo a arquitetura da aplicação e a transformar ideias em componentes interativos.",
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
      color: "group-hover:text-[#e34f26]",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
      color: "group-hover:text-[#1572b6]",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      color: "group-hover:text-[#f7df1e]",
    },
    {
      icon: <FaReact />,
      name: "React",
      color: "group-hover:text-[#61dafb]",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      color: "group-hover:text-white",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      color: "group-hover:text-[#06b6d4]",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      color: "group-hover:text-[#339933]",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
      color: "group-hover:text-[#f24e1e]",
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
      className="min-h-[75vh] flex items-center justify-center py-6 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[40px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Formação</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre mim</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[50vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-3xl font-bold text-accent">{experience.title}</h3>  
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm leading-relaxed">{experience.description}</p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                  {experience.items.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="cyber-card p-6 flex flex-col justify-start lg:items-start gap-1 max-w-full"
                    >
                      <span className="text-accent text-sm font-mono">{item.duration}</span>
                      <h3 className="text-lg font-bold text-center lg:text-left break-words">
                        {item.position}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="w-[5px] h-[5px] rounded-full bg-accent"></span>
                        <p className="text-white/60 text-sm break-words">{item.company}</p>
                      </div>
                      <p className="text-white/50 mt-2 text-xs leading-relaxed break-words">{item.work}</p>
                    </li>
                  )                  
                  })}
                </ul>
              </div>
            </TabsContent>
 
            <TabsContent value="education" className="w-full">
             <div className="flex flex-col gap-[20px] text-center xl:text-left">
               <h3 className="text-3xl font-bold text-accent">{education.title}</h3>
               <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm leading-relaxed">{education.description}</p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                  {education.items.map((item, index) => {
                  return (
                    <li key={index} className="cyber-card p-6 flex flex-col justify-start lg:items-start gap-1">
                      <span className="text-accent text-sm font-mono">{item.duration}</span>
                      <h3 className="text-lg font-bold text-center lg:text-left leading-snug">{item.degree}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="w-[5px] h-[5px] rounded-full bg-accent"></span>
                        <p className="text-white/60 text-sm">{item.institution}</p>
                      </div>
                    </li>
                  )                  
                  })}
                </ul>
             </div>
            </TabsContent>
            
            <TabsContent value="skills" className="w-full h-full">
             <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[20px] text-center xl:text-left">
                  <h3 className="text-3xl font-bold text-accent">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm leading-relaxed">{skills.description}</p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[20px]">
                    {skills.skillsList.map((skillItem, index) => {
                      return (
                        <li key={index} >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[120px] cyber-card flex items-center justify-center group">
                               <div className={`text-5xl ${skillItem.color} transition-all duration-300`}>{skillItem.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize font-mono text-xs">{skillItem.name}</p>
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

            <TabsContent value="about" className="w-full">
              <div className="cyber-card p-6 xl:p-8 flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-3xl font-bold text-accent">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm leading-relaxed">{about.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 max-w-[650px] mx-auto xl:mx-0 font-mono text-sm">
                  {about.Info.map((item, index ) => {
                        return (
                          <li key={index} className="flex items-center justify-center xl:justify-start gap-x-2 border-b border-white/5 pb-2">
                            <span className="text-white/40">{item.fieldname}:</span>
                            <span className="text-white font-semibold">{item.fieldvalue}</span>
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
