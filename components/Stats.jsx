"use client"
import CountUp from "react-countup";

const stats =[
    {
        num: 1,
        text: "Year of Experience",
    },
    {
        num: 4,
        text: "Projects Completed",
    },
    {
        num: 8,
        text: "Technologies Learned",
    },
    {
        num: 77,
        text: "Code commits",
    },
];

const Stats = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => {
                        return (
                            <div key={index}>
                                <CountUp
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-4x1 xl:text6x1 font-extrabold"/>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    );
};

export default Stats;