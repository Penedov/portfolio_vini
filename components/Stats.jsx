"use client";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

const Stats = () => {
    const [commits, setCommits] = useState(77);

    useEffect(() => {
        fetch("https://api.github.com/repos/Penedov/portfolio_vini/commits?per_page=1")
            .then((res) => {
                const linkHeader = res.headers.get("Link");
                if (linkHeader) {
                    const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
                    if (match && match[1]) {
                        setCommits(parseInt(match[1], 10));
                    }
                }
            })
            .catch((err) => console.error("Error fetching commits:", err));
    }, []);

    const stats = [
        { num: 3, text: "Anos de Experiência", link: null },
        { num: 4, text: "Projetos Concluídos", link: "/work" },
        { num: 8, text: "Tecnologias Aprendidas", link: "/resume" },
        { num: commits, text: "Commits no GitHub", link: "https://github.com/Penedov/portfolio_vini/commits" },
    ];

    return (
        <section className="pt-12 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center gap-10 mx-auto xl:max-w-none">
                    {stats.map((item, index) => {
                        const CardContent = (
                            <>
                                <CountUp
                                    end={item.num}
                                    duration={3}
                                    delay={0.5}
                                    className="text-4xl xl:text-5xl font-extrabold text-accent"
                                />
                                <p className="max-w-[200px] leading-snug text-white/80 text-sm">{item.text}</p>
                            </>
                        );

                        if (item.link) {
                            const isExternal = item.link.startsWith("http");
                            return (
                                <a
                                    href={item.link}
                                    target={isExternal ? "_blank" : undefined}
                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                    className="flex gap-4 items-center justify-center xl:justify-start min-w-[200px] cyber-card p-6 hover:border-accent/50 hover:shadow-[0_0_15px_rgba(0,255,153,0.15)] transition-all duration-300 cursor-pointer"
                                    key={index}
                                >
                                    {CardContent}
                                </a>
                            );
                        }

                        return (
                            <div className="flex gap-4 items-center justify-center xl:justify-start min-w-[200px] cyber-card p-6" key={index}>
                                {CardContent}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;
