"use client";

import {motion} from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (<div className="w-full h-full relative flex items-center justify-center">

        <motion.div>
            {/*IMAGE - circular crop */}
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 2.4,
                        duration: 0.4,
                        ease: "easeInOut"
                    }
                }}
                className="w-[260px] h-[260px] xl:w-[380px] xl:h-[380px] rounded-full overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-accent/20 shadow-[0_0_30px_rgba(0,255,153,0.15)]">
                <Image
                    src="/ChatGPT Image Linkedn.png"
                    priority="priority"
                    quality={100}
                    fill="fill"
                    alt="Vinicius Penedo"
                    className="object-cover"/>
            </motion.div>

            {/*CIRCLE RINGS*/}
                <motion.svg className="w-[290px] xl:w-[430px] h-[290px] xl:h-[430px]" 
                 fill="transparent"
                 viewBox="0 0 506 506" 
                 xmlns="http://www.w3.org/2000/svg">
                    {/* Outer slow scanning ring */}
                    <motion.circle 
                      cx="253" 
                      cy="253" 
                      r="250" 
                      stroke="#00ff99" 
                      strokeWidth="2" 
                      strokeDasharray="10 30 15 40"
                      animate={{
                          rotate: [0, 360],
                      }} 
                      transition={{
                          duration: 30,
                          repeat: Infinity,
                          ease: "linear"
                      }}
                    />

                    {/* Middle fast dotted ring */}
                    <motion.circle 
                      cx="253" 
                      cy="253" 
                      r="242" 
                      stroke="#00ff99" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 8"
                      animate={{
                          rotate: [360, 0],
                      }} 
                      transition={{
                          duration: 15,
                          repeat: Infinity,
                          ease: "linear"
                      }}
                      style={{ opacity: 0.6 }}
                    />

                    {/* Inner dash ring */}
                    <motion.circle 
                      cx="253" 
                      cy="253" 
                      r="234" 
                      stroke="#00ff99" 
                      strokeWidth="3" 
                      strokeDasharray="40 120 80 40"
                      animate={{
                          rotate: [0, -360],
                      }} 
                      transition={{
                          duration: 22,
                          repeat: Infinity,
                          ease: "linear"
                      }}
                      style={{ opacity: 0.8 }}
                    />
                </motion.svg>

        </motion.div>
    </div>
    )
}

export default Photo;