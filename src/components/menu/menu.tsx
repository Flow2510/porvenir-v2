import { motion } from "motion/react"
import { useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {
    readonly toggleMenu: () => void;
    readonly isDesktop: boolean;
}

const image = "/logo.svg"
const tickerList = [image, image, image]

export default function Menu({ toggleMenu, isDesktop } : Props) {
    const { t, i18n } = useTranslation();
    const [langButton, setLangButton] = useState(false)
    const menu = [
        "welcome",
        "introduction",
        "rooms",
        "hostel",
        "activities",
        "feedback"
    ];
    const languages = Object.keys(i18n.options.resources!);
    return(
        isDesktop ? 
            <motion.div 
                initial={{ background: "#00000000" }}
                animate={{ background: "#000000" }}
                exit={{ background: "#00000000" }}
                transition={{ duration: 0.6 }}
                className={`p-2 w-full h-dvh fixed top-0 left-0 z-20`}
            >
                <motion.div 
                    initial={{ scale: 0, borderRadius: 9999 }}
                    animate={{ scale: 1, borderRadius: 40 }}
                    exit={{ scale: 0, borderRadius: 9999, transition: { delay: 0.7, duration: 0.6 } }}
                    transition={{ duration: 0.6 }}
                    className="h-full w-full bg-[#2a2725] p-5 origin-bottom overflow-hidden"
                >
                    <div className="h-full w-full flex justify-between">
                        <div className="flex h-full flex-col justify-between p-5">
                            <nav className="flex flex-col text-7xl pt-4 text-[#b1a696]">
                                {menu.map((m, i) => (
                                    <a 
                                        onClick={toggleMenu}
                                        className="w-fit overflow-hidden hover:text-[#f4efe7]" 
                                        href={`#${m}`}
                                        key={m}
                                    >
                                        <motion.span
                                            initial={{ y: "-100%" }}
                                            animate={{ y: "0%", transition: { delay: 0.6 + (i/20), duration: 0.3 } }}
                                            exit={{ y: "-100%", transition: { delay: 0 + (i/20), duration: 0.3 } }}
                                            className="inline-block leading-[125%]"
                                        >
                                            {t(`menu.${m}`)}
                                        </motion.span>
                                    </a>
                                ))}
                            </nav>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 0.8 } }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex gap-6"
                            >                                
                                <div className="flex gap-1 text-xl md:gap-2 lg:gap-4">
                                    <div className="relative">
                                        <button className={`capitalize rounded-full relative border w-12 h-12 cursor-pointer flex justify-center items-center text-xl ${langButton? " text-neutral-950 bg-neutral-50" : ""} hover:text-neutral-950 hover:bg-neutral-50`} aria-label="Change language" onClick={() => setLangButton(prev => !prev)}>
                                            <span>
                                                {i18n.resolvedLanguage}
                                            </span>
                                        </button>
                                        {langButton && 
                                            <div className="overflow-hidden">
                                                <div className="absolute -top-30 left-0 bg-neutral-900 rounded-xl w-20 overflow-hidden flex flex-col">
                                                    {languages.map((l) =>
                                                        <button key={l} onClick={() => {i18n.changeLanguage(l); setLangButton(false)}} className="hover:text-neutral-950 hover:bg-neutral-50 px-2 py-1 capitalize cursor-pointer text-left">
                                                            {l}
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <a aria-label="Follow us on Instagram" href="www.instagram.com" target="_blank" className="rounded-full border w-12 h-12 flex justify-center items-center hover:text-neutral-950 hover:bg-neutral-50">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a aria-label="Follow us on Facebook" href="www.facebook.com" target="_blank" className="rounded-full border w-12 h-12 flex justify-center items-center hover:text-neutral-950 hover:bg-neutral-50">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a aria-label="Contact us via WhatsApp" href="www.whatsapp.com" target="_blank" className="rounded-full border w-12 h-12 flex justify-center items-center hover:text-neutral-950 hover:bg-neutral-50">
                                        <i className="fa-brands fa-whatsapp"></i>
                                    </a>
                                    <a aria-label="Contact us via Mail" href="www.booking.com" target="_blank" className="rounded-full border w-12 h-12 flex justify-center items-center hover:text-neutral-950 hover:bg-neutral-50">
                                        <i className="fa-solid fa-envelope"></i>
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                        <div className="overflow-hidden">
                            <motion.div 
                                initial={{ x: "100%"}}
                                animate={{ x: "0%", transition: {
                                    delay: 0.6, duration: 0.7
                                }}}
                                exit={{ x: "100%"}}
                                transition={{ duration: 0.7, type: "tween" }}
                                className="h-full max-w-125 relative "
                            >
                                <div className="w-full h-full rounded-4xl overflow-hidden">
                                    <picture>
                                        <source
                                            media="(min-width: 768px)"
                                            srcSet="/maison-desktop.webp"
                                        />
                                        <img src="/maison-mobile.webp" alt="" className="w-full h-full object-cover"/>
                                    </picture>
                                    
                                </div>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center overflow-hidden">
                                    {tickerList.map((t, i) => (
                                        <motion.div 
                                            animate={{ x: "-100%" }}
                                            transition={{
                                                duration: 10,
                                                type: "tween",
                                                ease: "linear",
                                                repeat: Infinity,
                                            }}
                                            key={t + i}
                                            className="w-[200%] shrink-0 p-5">
                                            <img src={t} alt="" className="w-full"/>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        :
        <motion.div 
            key={'mobile-menu'}                        
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%", transition: { delay: 0.5, duration: 0.5 } }}
            transition={{ duration: 0.5, type: "tween" }}
            className="h-dvh fixed top-0 left-0 w-full bg-neutral-950 z-20 p-2"
        >
            <div className="w-full h-full bg-[#2a2725] rounded-4xl flex flex-col justify-between">
                <div className="p-5 flex flex-col justify-between flex-1">
                    <nav className="flex flex-col text-4xl pt-4 text-[#b1a696] hover:text-[#f4efe7]">
                        {menu.map((m, i) => (
                            <a onClick={toggleMenu} className="w-fit overflow-hidden" href="#welcome" key={m}>
                                <motion.span
                                    initial={{ y: "-100%" }}
                                    animate={{ y: "0%", transition: { delay: 0.5 + (i/20) } }}
                                    exit={{ y: "-100%", transition: { delay: 0 + (i/20) } }}
                                    className="inline-block"
                                >
                                    {t(`menu.${m}`)}
                                </motion.span>
                            </a>
                        ))}                                                
                    </nav>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.5}}}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="flex gap-1">
                            <div className="relative">
                                <button className={`capitalize rounded-full relative border w-12 h-12 cursor-pointer flex justify-center items-center text-xl ${langButton? " text-neutral-950 bg-neutral-50" : ""} hover:text-neutral-950 hover:bg-neutral-50`} aria-label="Change language" onClick={() => setLangButton(prev => !prev)}>
                                    <span>
                                        {i18n.resolvedLanguage}
                                    </span>
                                </button>
                                {langButton && 
                                    <div className="overflow-hidden">
                                        <div className="absolute -top-30 left-0 bg-neutral-900 rounded-xl w-20 overflow-hidden flex flex-col">
                                            {languages.map((l) =>
                                                <button key={l} onClick={() => {i18n.changeLanguage(l); setLangButton(false)}} className="hover:text-neutral-950 hover:bg-neutral-50 px-2 py-1 capitalize cursor-pointer text-left">
                                                    {l}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                }
                            </div>
                            <a href="www.instagram.com" target="_blank" className="rounded-full border w-12 h-12 flex justify-center items-center text-xl" aria-label="link to Instagram">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="www.facebook.com" target="_blank" className="rounded-full border w-12 h-12 flex justify-center items-center text-xl" aria-label="link to Facebook">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="www.airbnb.com" target="_blank" className="rounded-full border w-12 h-12 flex justify-center items-center text-xl" aria-label="link to AirBnb">
                                <i className="fa-brands fa-airbnb"></i>
                            </a>
                            <a href="www.booking.com" target="_blank" className="rounded-full border w-12 h-12 flex justify-center items-center text-xl" aria-label="link to Bookink">
                                <i className="fa-brands fa-blogger-b"></i>
                            </a>
                        </div>
                    </motion.div>
                </div>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.5}}}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full max-h-75 rounded-4xl overflow-hidden relative items-center flex"
                >
                    <img className="absolute top-0 left-0 w-full h-full object-cover" src="/maison.png" alt="" />
                    <div className="relative">
                        <motion.div 
                            className="flex flex-col"
                            animate={{ x: [0, -300] }}
                            transition={{
                                duration: 10,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                        >
                            {tickerList.map((t, i) => (
                                <div key={t + i} className="w-75 p-2 shrink-0">
                                    <img className="w-full" src={t} alt="" />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}