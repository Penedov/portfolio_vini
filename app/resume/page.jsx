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

const experience = [
  {
    title: "Front-end Developer",
    company: "Google",
    date: "2020 - 2021",
    description:
      "Developed and maintained web applications using HTML, CSS, and JavaScript. Worked with a team of developers to create a new product that was used by millions of users.",
  },
  {
    title: "Front-end Developer",
    company: "Facebook",
    date: "2021 - 2022",
    description:
      "Developed and maintained web applications using HTML, CSS, and JavaScript. Worked with a team of developers to create a new product that was used by millions of users.",
  },
  {
    title: "Front-end Developer",
    company: "Amazon",
    date: "2022 - 2023",
    description:
      "Developed and maintained web applications using HTML, CSS, and JavaScript. Worked with a team of developers to create a new product that was used by millions of users.",
  },
];

const education = [
  {
    title: "Bachelor of Science in Computer Science",
    school: "University of California, Los Angeles",
    date: "2019 - 2023",
  },
  {
    title: "Master of Science in Computer Science",
    school: "Stanford University",
    date: "2023 - 2025",
  },
  {
    title: "PhD in Computer Science",
    school: "Harvard University",
    date: "2025 - 2029",
  },
];

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    icon: <FaCss3 />,
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Figma",
    icon: <FaFigma />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
];
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
              experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
