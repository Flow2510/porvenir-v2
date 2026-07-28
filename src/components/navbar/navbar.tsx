import { motion } from "framer-motion";
import { AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";

type Props = {
    readonly toggleMenu: () => void;
    readonly menuIsOpen: boolean;
    readonly modalIsOpen: boolean;
}

export default function NavBar({ toggleMenu, menuIsOpen, modalIsOpen } : Props ) {
    const { t } = useTranslation()

    return(
        <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 3 }}
            className="fixed bottom-4 lg:bottom-10 left-[50%] translate-x-[-50%] flex items-center justify-center z-20 overflow-hidden"
        >
            <button className="flex bg-[#f4efe7] p-1 items-center rounded-full cursor-pointer text-sm md:text-lg" onClick={toggleMenu}>
                <span className="inline-block px-4 text-neutral-900 overflow-hidden font-semibold">
                    <AnimatePresence mode="wait">
                        {menuIsOpen || modalIsOpen ? 
                            <motion.span
                                 key="close"
                                initial={{ y: "100%"}}
                                animate={{ y: "0%"}}
                                exit={{ y: "-100%"}}
                                transition={{ duration: 0.3 }}
                                className="inline-block"
                            >
                                {t('navbar.close')}
                            </motion.span>
                        :
                            <motion.span
                                key="menu"
                                initial={{ y: "100%"}}
                                animate={{ y: "0%"}}
                                exit={{ y: "-100%"}}
                                transition={{ duration: 0.3 }}
                                className="inline-block"
                            >
                                {t('navbar.menu')}
                            </motion.span>
                        }
                    </AnimatePresence>
                </span>
                <span className="flex bg-neutral-800 h-10 w-10 rounded-full flex-col justify-center items-center">
                    <AnimatePresence mode="wait">
                        {menuIsOpen || modalIsOpen? 
                            <motion.i 
                                initial={{ opacity: 0 }}   
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}                         
                                key="xmark" className="fa-solid fa-xmark"
                            >

                            </motion.i>
                        :
                            <motion.i 
                                initial={{ opacity: 0 }}     
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}                       
                                key="bars" className="fa-solid fa-bars"
                            >

                            </motion.i>
                        }     
                    </AnimatePresence>                   
                </span>
            </button>
        </motion.div>
    )
}