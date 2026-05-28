import {animate, motion} from "framer-motion";

//Variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};
// calculate the reverse index fot stoggred delay

const reverseIndex = (index)=> {
    const totalSteps = 6; //number of steps
    return totalSteps - index - 1;
}

const Stairs = () => {
    return <> 
    {/*render 6 motion divs, each representating a step of the stairs.
    Each div will have the some animation defined by the stairAnimation object.
    the delay for each div is calculated sinomically based on it´s reversed index, creating a stoggered effect with decreasing delay for each subsequent step.*/
    } {
        [...Array(6)].map((_, index)=> {
            return(
                <motion.div 
                key={index}
                variants={stairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: reverseIndex(index) * 0.1,
                }}
                className="h-full w-full bg-gradient-to-b from-accent to-primary border-r border-accent/25 shadow-[0_0_20px_rgba(0,255,153,0.15)] relative"
                />
            );
        })
    } </>
}

export default Stairs;