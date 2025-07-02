"use client";

import { Button } from "@/components/ui/button";
import { Imput } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefone",
    description: "+1 234 567 890",
  },
  {
    icon: <FaEnvelope />,
    title: "E-mail",
    description: "(+40) 123 456 789",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Endereço",
    description: "123 Rua Principal, Cidade, País",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flx-row gap-[30px]">
          {/* form */}
        </div>
        <div className="xl:h-[54%]  order-2 xl:order-none ">
          <form className=" flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent">Vamos trabalhar juntos</h3>
            <p className="text-white/60">Entre em contato preenchendo o formulário abaixo. Retornarei o mais breve possível!</p>
            {/* input*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nome"
                className="w-full p-3 bg-transparent border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="text"
                placeholder="Sobrenome"
                className="w-full p-3 bg-transparent border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full p-3 bg-transparent border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="text"
                placeholder="Assunto"
                className="w-full p-3 bg-transparent border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            {/* select */}
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione um serviço" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Serviços</SelectLabel>
                  <SelectItem value="site-simples">Criação de site simples</SelectItem>
                  <SelectItem value="landing-page">Landing Page</SelectItem>
                  <SelectItem value="ajuste-bugs">Ajuste de bugs ou melhorias</SelectItem>
                  <SelectItem value="portfolio">Portfólio Pessoal</SelectItem>
                  <SelectItem value="consultoria">Consultoria básica</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* textarea */}
            <Textarea
              placeholder="Escreva sua mensagem aqui..."
              className="h-[200px]"/>
            {/* button */}
            <Button size="md" className="max-w-60 bg-accent hover:bg-accent/80 transition-colors">Enviar mensagem</Button>
          </form>
        </div>
        <div className="flex-11 flex items-center xl:justify-end  order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  
                </li>
              )
            })}
            
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;