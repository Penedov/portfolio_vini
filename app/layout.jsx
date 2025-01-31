import { JetBrains_Mono } from "next/font/google"; // Importa a fonte do Google.
import "./globals.css"; // Importa estilos globais.

//componentes
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"], // Apenas caracteres latinos.
  weight: [
    "100", "200", "300", "400", "500", "600", "700", "800"
    // Todas as opções de peso disponíveis para maior flexibilidade.
  ],
  variable: "--font-jetbrainsMono", // Cria uma variável CSS que será usada no Tailwind.
});

export const metadata = {
  title: "Portfolio - Vinicius Santos", 
  description: "Meu portfólio moderno feito com Next.js e Tailwind CSS.", 
};


export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition/>
        <PageTransition>{children} 
        {/* Renderiza os componentes filhos dentro do layout. */}</PageTransition>
        
        
      </body>
    </html>
  );
}