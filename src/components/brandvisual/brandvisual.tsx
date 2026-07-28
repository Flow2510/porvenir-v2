import { motion } from "framer-motion"

export default function BrandVisual(){

    return(
        <motion.section 
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="aspect-square max-h-dvh w-full flex items-center justify-center relative"
        >
            <div className="absolute top-0 p-2 left-0 w-full h-full overflow-hidden lg:rounded-4xl lg:p-5">
                <video src="/porvenir.mp4" muted autoPlay loop className="w-full h-full rounded-4xl object-cover"></video>
            </div>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0, 1, 0] }}
                transition={{
                    duration: 12.13,
                    repeat: Infinity,
                    ease: "linear",
                    times: [0, 0.65, 0.95, 1]
                }}                
                className="max-w-[50%] w-full relative">
                <img className="w-full" src="/logo.svg" alt="" />
            </motion.div>
        </motion.section>
    )
}