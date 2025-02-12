import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";

{/*componetes*/}
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const home = () => {
    return (
        <section className="h-full flex items-center">
            <div className="container mx-auto h-full flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                {/* Texto e Botão */}
                <div className="text-center xl:text-left order-2 xl:order-none">
                    <span className="text-xl text-white/80">Software Developer</span>
                    <h1 className="h1 mb-6">
                        Hello I'm
                        <br/>
                        <span className="text-accent">Vinicius<br/>Penedo</span>
                    </h1>
                    <p className="max-w-[500px] mb-9 text-white/80">
                        I excel at crafting elegant digital experiences and I am proficient in various
                        programming languages and technologies.
                    </p>

                    {/* Botão e Sociais */}
                    <div className="flex flex-col xl:flex-row items-center gap-6">
                        <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-primary">
                            <span>Download CV</span>
                            <FiDownload className="text-xl"/>
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
                    <Photo/>
                </div>
            </div>
            <Stats />
        </section>
    );
};

export default home;