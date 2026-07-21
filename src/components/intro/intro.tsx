import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Intro(){
    const ref = useRef(null)
    const text = "Hidden between Santa Marta and Minca, our hostel is a place where the rainforest sets the pace. Wake up to birdsong, enjoy fresh tropical breakfasts, unwind in peaceful surroundings, and discover the perfect balance between adventure and relaxation.";
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 60%", "end 60%"]
    })

    const height = useTransform(scrollYProgress, [0, 1], ["100%", "0%"])

    return(
        <section className="p-5 flex flex-col gap-8 min-h-dvh justify-center lg:pb-30" id="intro">
            <div className="text-[35px] tracking-[-0.2px] text-lightBrown w-full leading-[1.2] font-normal overflow-hidden relative origin-bottom" ref={ref}>
                <p className="flex gap-2 flex-wrap text lg:text-6xl lg:max-w-[75%] lg:py-30">
                    {text} 
                </p>        
                <motion.div className="h-full bottom-0 left-0 absolute w-full bg-[#18171780] z-5" style={{ height: height }} >
                
                </motion.div>
            </div>
            <div className="lg:flex w-full lg:gap-30 lg:items-center">
                <div className="grid grid-cols-2 gap-1 w-full">
                    <img src="/fruits.webp" alt="" className="bg-neutral-500 w-full h-30 lg:h-50 rounded-full object-cover"/>
                    <img src="/coktail.webp" alt="" className="bg-neutral-500 w-full h-30 lg:h-50 rounded-full object-cover"/>
                </div>
                <div className="w-full">
                    <p className="text-[23px] leading-[120%] tracking-[-0.2px] text-[#b1a696] mt-10 font-normal lg:mt-0 lg:text-3xl lg:pr-10"> Start your day with fresh tropical fruits, end it with a cocktail under the stars, and enjoy the simple pleasures of life surrounded by nature.</p>
                </div>
            </div>
        </section>
    )
}