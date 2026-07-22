import { motion, useScroll, useTransform } from "motion/react"
import { useRef, useState } from "react"
import { useTranslation } from "react-i18next";

export default function Hero() {
    const { t } = useTranslation();
    const [isDesktop, ] = useState(window.innerWidth > 1024)
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25])

    return(
        isDesktop ? 
        <section className="relative h-dvh w-full p-2">
            <div className="flex flex-col h-full justify-between p-5 relative z-1">
                <div className="w-[50%] max-w-150">
                    <img className="w-full" src="/logo.svg" alt="" />
                </div>
                <div className="flex justify-between items-end">
                    <div className="text-[#b1a696] text-[23px] leading-[110%] tracking-[-0.2px] font-semibold flex flex-col">
                        <span>{t('hero.title.line1')}</span>
                        <span>{t('hero.title.line2')}</span>
                        <span>{t('hero.title.line3')}</span>
                    </div>
                    <div className="text-sm font-semibold tracking-[-0.2px] text-right">
                        <p>{t('hero.subtitle.line1')}</p>
                        <p>{t('hero.subtitle.line2')}</p>
                    </div>
                </div>
            </div>
            <div className="absolute w-full top-0 left-0 h-full p-2" ref={ref}>
                <div className="w-full h-full overflow-hidden rounded-4xl">
                    <picture>
                        <source
                            media="(min-width: 768px)"
                            srcSet="/maison-desktop.webp"
                        />
                        <motion.img 
                            style={{ scale }}
                            src="/maison-mobile.webp" className="w-full h-full object-cover rounded-4xl" 
                            alt="" 
                        />
                    </picture>
                </div>
            </div>
        </section>        
        :
        <section className="w-full min-h-dvh flex justify-between px-5 flex-col gap-8 pb-24 relative" id="welcome">
            <div className="w-full flex flex-col gap-6 p-5">
                <div className="">
                    <img className="w-full" src="/logo.svg" alt="" />
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-between">
                <div className="text-[#b1a696] text-[23px] leading-[110%] tracking-[-0.2px] font-semibold flex flex-col">
                    <span>{t('hero.title.line1')}</span>
                    <span>{t('hero.title.line2')}</span>
                    <span>{t('hero.title.line3')}</span>
                </div>
                <div className="text-sm font-semibold tracking-[-0.2px]">
                    <p>{t('hero.subtitle.line1')}</p>
                    <p>{t('hero.subtitle.line2')}</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 ">
                <div className="w-full h-[45dvh] bg-neutral-600 rounded-4xl overflow-hidden">
                    <picture>
                        <source
                            media="(min-width: 768px)"
                            srcSet="/maison-desktop.webp"
                        />
                        <motion.img 
                            initial={{ scale: 1.3 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "tween", duration: 0.5 }}
                            className="h-full w-full scale-150 object-cover" 
                            src="/maison-mobile.webp" 
                            alt="" 
                        />
                    </picture>                    
                </div>
            </div>
            <div className="hero-overlay">

            </div>
        </section>
    )
}