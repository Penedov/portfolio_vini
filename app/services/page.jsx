"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <section className="min-h-[75vh] flex flex-col justify-center items-center py-12 relative overflow-hidden">
      {/* CSS Keyframes for Spotlight Beams */}
      <style>{`
        @keyframes swing-left {
          0%, 100% { transform: rotate(-25deg); opacity: 0.3; }
          50% { transform: rotate(15deg); opacity: 0.7; }
        }
        @keyframes swing-right {
          0%, 100% { transform: rotate(25deg); opacity: 0.3; }
          50% { transform: rotate(-15deg); opacity: 0.7; }
        }
        .spotlight-left {
          animation: swing-left 6s ease-in-out infinite;
        }
        .spotlight-right {
          animation: swing-right 8s ease-in-out infinite;
        }
        .text-3d-fox {
          font-family: var(--font-jetbrainsMono), system-ui, sans-serif;
          font-weight: 900;
          color: #00ff99;
          text-shadow: 
            0 1px 0 #00b16a,
            0 2px 0 #00a160,
            0 3px 0 #009156,
            0 4px 0 #00814c,
            0 5px 0 #007142,
            0 6px 0 #006138,
            0 7px 12px rgba(0, 255, 153, 0.4),
            0 15px 30px rgba(0, 255, 153, 0.3);
          transform: perspective(800px) rotateX(25deg) rotateY(-12deg);
          transform-style: preserve-3d;
        }
      `}</style>

      {/* Cyber Spotlights (Century Fox Beams) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Left Beam */}
        <div className="spotlight-left absolute bottom-0 left-[20%] w-[120px] h-[700px] bg-gradient-to-t from-accent/20 via-accent/5 to-transparent blur-lg origin-bottom" />
        {/* Right Beam */}
        <div className="spotlight-right absolute bottom-0 right-[20%] w-[100px] h-[700px] bg-gradient-to-t from-accent/20 via-accent/5 to-transparent blur-lg origin-bottom" />
        {/* Center Extra Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Main 3D Text Container */}
      <div className="relative z-10 text-center flex flex-col items-center">
        {/* Futuristic Pedestal Header */}
        <div className="mb-4 font-mono text-accent text-xs tracking-[0.4em] uppercase border border-accent/20 px-4 py-1.5 rounded bg-primary/40 backdrop-blur-sm">
          [ MODULE_SERVICES: SHUTDOWN ]
        </div>

        {/* 3D Giant Monument Text */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-7xl md:text-9xl tracking-tight leading-none text-3d-fox select-none mb-10 py-6"
        >
          EM
          <br />
          BREVE
        </motion.div>

        {/* Translucent 3D Pedestal Base */}
        <div className="w-[300px] md:w-[450px] h-[20px] bg-gradient-to-r from-transparent via-accent/20 to-transparent border-t-2 border-accent/40 rounded-full shadow-[0_-5px_15px_rgba(0,255,153,0.1)] mb-8" />

        {/* Description Panel */}
        <p className="max-w-[480px] text-white/50 text-sm leading-relaxed mb-8 px-4 font-mono">
          Estou preparando um catálogo de serviços incríveis utilizando as mais modernas tecnologias de desenvolvimento e design.
        </p>

        {/* Go Back button */}
        <Link href="/">
          <Button size="lg" className="bg-accent hover:bg-accent/80 text-primary font-bold transition-all shadow-[0_0_15px_rgba(0,255,153,0.25)] hover:scale-105">
            Voltar para a Home
          </Button>
        </Link>
      </div>
    </section>
  );
}