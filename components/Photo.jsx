"use client";

import {motion} from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (<div className="w-full h-full relative">

        <motion.div>
            {/*IMAGE*/}
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
                className="w-[280px] h-[280px] xl:w-[450px] xl:h-[450px] mix-blend-lighten bottom-0 right-0">
                <Image
                    src="/assets/face.png"
                    priority="priority"
                    quality={100}
                    fill="fill"
                    alt="Rosto"
                    className="object-contain"/>
            </motion.div>

            {/*CIRCLE*/}
        </motion.div>
    </div>
    )
}

export default Photo;