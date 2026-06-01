"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaLaptopCode, FaGlobe, FaBriefcase, FaDatabase } from "react-icons/fa";

const services = [
  {
    num: "01",
    title: "Landing Pages",
    description: "Criação de páginas únicas e focadas em conversão, otimizadas para dispositivos móveis e integradas a formulários ou WhatsApp.",
    techs: "React • Next.js • Tailwind CSS",
    icon: <FaLaptopCode />,
  },
  {
    num: "02",
    title: "Sites Institucionais",
    description: "Desenvolvimento de sites completos para apresentar seu negócio local ou serviços com excelente SEO e design moderno.",
    techs: "Next.js • UI/UX • SEO",
    icon: <FaGlobe />,
  },
  {
    num: "03",
    title: "Portfólios Digitais",
    description: "Criação de portfólios elegantes e interativos para profissionais liberais e freelancers destacarem seus trabalhos.",
    techs: "React • Framer Motion • CSS",
    icon: <FaBriefcase />,
  },
  {
    num: "04",
    title: "Suporte & Automação",
    description: "Auxílio operacional, estruturação e análise de dados em planilhas (Excel) e suporte básico de TI/Banco de Dados.",
    techs: "Excel • Banco de Dados • TI",
    icon: <FaDatabase />,
  },
];

export default function Services() {
  return (
    <section className="min-h-[75vh] flex flex-col justify-center items-center py-12 relative overflow-hidden">
      {/* Cyber Spotlights Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-0 left-[15%] w-[120px] h-[600px] bg-gradient-to-t from-accent/10 via-accent/5 to-transparent blur-lg origin-bottom rotate-[-12deg]" />
        <div className="absolute bottom-0 right-[15%] w-[120px] h-[600px] bg-gradient-to-t from-accent/10 via-accent/5 to-transparent blur-lg origin-bottom rotate-[12deg]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] h-[250px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center max-w-[600px] mb-12">
          <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase border border-accent/20 px-4 py-1.5 rounded bg-primary/40 backdrop-blur-sm mb-4 inline-block">
            // Catálogo de Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Como posso ajudar seu negócio
          </h2>
          <p className="text-white/60 text-sm leading-relaxed font-mono">
            Soluções digitais focadas em web design, desenvolvimento moderno e suporte administrativo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1000px] mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cyber-card p-6 flex flex-col justify-between group hover:border-accent/40 hover:shadow-[0_0_20px_rgba(0,255,153,0.1)] transition-all duration-300 relative overflow-hidden border border-white/10 rounded-xl bg-white/5"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/40 font-mono">
                  {service.num}
                </span>
                <div className="text-3xl text-white/40 group-hover:text-accent transition-colors duration-300">
                  {service.icon}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div className="border-t border-white/5 pt-4 mt-auto">
                <span className="text-xs font-mono text-accent/80 tracking-wide uppercase">
                  {service.techs}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/80 text-primary font-bold transition-all shadow-[0_0_15px_rgba(0,255,153,0.25)] hover:scale-105">
              Falar sobre um Projeto
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}