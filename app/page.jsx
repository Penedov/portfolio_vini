import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Componentes
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
    return (
        <section className="h-full flex flex-col items-center"> {/* Alterado para flex-col para que o conteúdo se organize em coluna */}
            <div className="container mx-auto h-full flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                {/* Texto e Botão */}
                <div className="text-center xl:text-left order-2 xl:order-none">
                    <span className="text-xl text-white/80">Desenvolvedor de Software</span>
                    <h1 className="text-5xl xl:text-6xl mb-6">
                        Olá, eu sou
                        <br />
                        <span className="text-accent">Vinicius<br />Penedo</span>
                    </h1>
                    <p className="max-w-[500px] mb-9 text-white/80">
                        Sou especialista em criar experiências digitais elegantes e tenho proficiência em diversas linguagens e tecnologias de programação.
                    </p>

                    {/* Botão e Sociais */}
                    <div className="flex flex-col xl:flex-row items-center gap-6">
                        <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-primary">
                            <span>Baixar Currículo</span>
                            <FiDownload className="text-xl" />
                        </Button>

                        {/* Ícones Sociais */}
                        <div className="flex gap-4">
                            <Socials
                                containerStyles="flex gap-4"
                                iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary"
                            />
                        </div>
                    </div>
                </div>

                {/* Imagem */}
                <div className="order-1 xl:order-none mb-8 xl:mb-0">
                    <Photo />
                </div>
            </div>

            {/* Stats abaixo do conteúdo principal */}
            <Stats />
        </section>
    );
};

export default Home;
