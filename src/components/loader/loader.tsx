import { motion } from "framer-motion";

export default function Loader(){
    return(
        <div 
            className="inset-0 fixed z-100"
        >
            <motion.div 
                initial={{ background: "#171717" }}
                animate={{ background: "#171717" }}
                exit={{ background: "#17171700" }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="h-full w-full bg-neutral-900 flex items-center justify-center relative"
            >
                <motion.div
                    exit={{ scale: 15, opacity: 0, transition: { scale: { duration: 2 }, opacity: { duration: 1, delay: 0.5} } }}
                    className="w-100 h-35 bg-[#b1a69625] rounded-full overflow-hidden relative flex items-center justify-center"
                >                
                    <motion.div 
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ type: "tween", duration: 1.5}}
                        className="w-full h-full absolute bg-neutral-50 top-0 left-0">

                    </motion.div>
                    <div className="relative">
                        <motion.img 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
                            exit={{ opacity: 0, transition: { duration: 0.1 } }}
                            src="/logo.svg" 
                            className="brightness-0 w-50" 
                            alt="Logo Porvenir"
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x : "-50%" }}
                    animate={{ x : "-50%" }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-4 left-[50%]"
                >
                    <p>Preparing your jungle escape...</p>
                </motion.div>
            </motion.div>
        </div>
    )
}