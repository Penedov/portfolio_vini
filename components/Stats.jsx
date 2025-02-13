"use client";
import CountUp from "react-countup";

const stats = [
    { num: 1, text: "Year of Experience" },
    { num: 4, text: "Projects Completed" },
    { num: 8, text: "Technologies Learned" },
    { num: 77, text: "Code commits" },
];

const Stats = () => {
    return (
        <section className="pt-12 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center gap-10 mx-auto xl:max-w-none">
                    {stats.map((item, index) => (
                        <div className="flex gap-4 items-center justify-center xl:justify-start min-w-[150px]" key={index}>
                            <CountUp
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold"
                            />
                            <p className="max-w-[200px] leading-snug text-white/80">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
