"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    description: "(11) 95894-3041",
  },
  {
    icon: <FaEnvelope />,
    title: "E-mail",
    description: "viniciuspenedo2003@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Endereço",
    description: "São Paulo, Brasil",
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
      className="py-2 xl:py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[24px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-4 p-6 xl:p-8 cyber-card">
              <h3 className="text-3xl text-accent font-bold">Vamos trabalhar juntos</h3>
              <p className="text-white/60 text-sm">
                Entre em contato preenchendo o formulário abaixo. Retornarei o mais breve possível!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full p-2.5 bg-[#1c1c22] border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-colors text-sm"
                />
                <input
                  type="text"
                  placeholder="Sobrenome"
                  className="w-full p-2.5 bg-[#1c1c22] border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-colors text-sm"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full p-2.5 bg-[#1c1c22] border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-colors text-sm"
                />
                <input
                  type="text"
                  placeholder="Assunto"
                  className="w-full p-2.5 bg-[#1c1c22] border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-colors text-sm"
                />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full h-10 text-sm">
                  <SelectValue placeholder="Selecione um serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Serviços</SelectLabel>
                    <SelectItem value="site-simples text-sm">Criação de site simples</SelectItem>
                    <SelectItem value="landing-page text-sm">Landing Page</SelectItem>
                    <SelectItem value="ajuste-bugs text-sm">Ajuste de bugs ou melhorias</SelectItem>
                    <SelectItem value="portfolio text-sm">Portfólio Pessoal</SelectItem>
                    <SelectItem value="consultoria text-sm">Consultoria básica</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                placeholder="Escreva sua mensagem aqui..."
                className="h-[120px] text-sm"
              />
              {/* button */}
              <Button size="md" className="max-w-48 bg-accent hover:bg-accent/80 text-primary font-bold transition-colors py-2 text-sm">
                Enviar mensagem
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-4 xl:mb-0">
            <ul className="flex flex-col gap-6">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-[48px] h-[48px] xl:w-[60px] xl:h-[60px] cyber-card text-accent rounded-md flex items-center justify-center">
                      <div className="text-[20px] xl:text-[24px]">{item.icon}</div>
                    </div>
                    <div className="flex-1 font-mono">
                      <p className="text-white/40 text-xs">{item.title}</p>
                      <h3 className="text-base xl:text-lg text-white font-semibold">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;