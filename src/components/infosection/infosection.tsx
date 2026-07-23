import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import InfoCard from "../infocard/infocard";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

type Props= {
    isDesktop: boolean;
}

export default function InfoSection({ isDesktop }: Props) {
    const img = "/logo.svg";
    const items = [img, img];
    const { t } = useTranslation();
    const [changeImageCard2, setChangeImageCard2] = useState(false);
    const [changeCard3, setChangeCard3] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end 90%"]
    })

    const xCard1 = useTransform(scrollYProgress, [0.2, 0.4], [0, 10])
    const scaleCard1 = useTransform(scrollYProgress, [0.2, 0.4], [1, 0.8])
    const opacityCard1 = useTransform(scrollYProgress, [0.2, 0.6], [1, 0])

    const xCard2 = useTransform(scrollYProgress, [0.2, 0.4], ["0%", "-100%"])
    const scaleCard2 = useTransform(scrollYProgress, [0.6, 0.8], [1, 0.8])
    const opacityCard2 = useTransform(scrollYProgress, [0.6, 1], [1, 0])

    const yCard3 = useTransform(scrollYProgress, [0.2, 0.4], ["100%", "-0%"])
    const xCard3 = useTransform(scrollYProgress, [0.6, 0.8], ["0%", "-100%"])

    const yCard4 = useTransform(scrollYProgress, [0.6, 0.8], ["100%", "-0%"])

    const infos = [
        {
            name: "terrace",
            title: t('infos.terrace.title'),
            text: t('infos.terrace.text'),
            img: {
                mobile: "/patio-mobile.webp",
                desktop: "/patio-desktop.webp"
            },
            alt: t('infos.terrace.alt')
        },
        {
            name: "garden",
            title: t('infos.garden.title'),
            text: t('infos.garden.text'),
            img: {
                mobile: "/terrasse-mobile.webp",
                desktop: "/terrasse-desktop.webp"
            },
            alt: t('infos.garden.alt')
        },
        {
            name: "pool",
            title: t('infos.pool.title'),
            text: t('infos.pool.text'),
            img: {
                mobile: "/jardin-piscine-mobile.webp",
                desktop: "/jardin-piscine-desktop.webp"
            },
            alt: t('infos.pool.alt')
        }
    ];

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.3) {
            setChangeImageCard2(true);
        } else {
            setChangeImageCard2(false);
        }
        if (latest > 0.7) {
            setChangeCard3(true);
        } else {
            setChangeCard3(false);
        }
    })

    return(
        isDesktop ?
            <section id="the hostel" className="h-[500dvh]" ref={ref}>
                <div className="sticky top-0 left-0 w-full h-dvh grid grid-cols-2 overflow-hidden">
                    <motion.div style={{ x: xCard1, scale: scaleCard1, opacity: opacityCard1 }} className="w-full h-dvh p-2">
                        <InfoCard 
                            index={1}
                            length={infos.length}
                            info={infos[0]}
                            isDesktop={isDesktop}
                        />
                    </motion.div>
                    <motion.div className="w-full h-dvh p-2" style={{ x: xCard2, scale: scaleCard2, opacity: opacityCard2 }}>
                        <article className="w-full h-full rounded-4xl overflow-hidden relative">
                            <AnimatePresence>
                                <div className="overflow-hidden h-full w-full flex items-center absolute top-0 left-0" key="image-2">
                                    <div className="h-[60%] w-full rounded-4xl overflow-hidden">
                                        <picture>
                                            <source
                                                media="(min-width: 768px)"
                                                srcSet={infos[1].img.desktop}
                                            />
                                            <motion.img 
                                                src={infos[1].img.mobile} className="w-full h-full object-cover" alt="" 
                                            />
                                        </picture>
                                    </div>                                    
                                </div>
                                <div className="overflow-hidden h-full w-full absolute flex items-center top-0 left-0" key="image-1">
                                    <div className="h-[60%] w-full rounded-4xl overflow-hidden">
                                        <picture>
                                            <source
                                                media="(min-width: 768px)"
                                                srcSet={infos[0].img.desktop}
                                            />
                                            <motion.img 
                                                animate={{
                                                    opacity: changeImageCard2 ? 0 : 1
                                                }}
                                                transition={{ duration: 0.6 }}
                                                src={infos[0].img.mobile} 
                                                className="w-full h-full object-cover" alt=""
                                            />
                                        </picture>    
                                    </div>                                   
                                </div>
                            </AnimatePresence>
                        </article>
                    </motion.div>
                    <motion.div style={{ y: yCard3, x: xCard3 }} className="w-full h-full p-2 absolute col-2">
                        {changeCard3 ?
                            <InfoCard 
                                index={3}
                                length={infos.length}
                                info={infos[2]}
                                isDesktop={isDesktop}
                            />
                        :
                            <InfoCard 
                                index={2}
                                length={infos.length}
                                info={infos[1]}
                                isDesktop={isDesktop}
                            />
                        }
                    </motion.div>
                    <motion.div style={{ y: yCard4 }} className="w-full h-full p-2 absolute col-2">
                        <article className="w-full h-full rounded-4xl overflow-hidden flex items-center">
                            <div className="h-[60%] w-full rounded-4xl overflow-hidden">
                                <picture>
                                    <source
                                        media="(min-width: 768px)"
                                        srcSet={infos[2].img.desktop}
                                    />
                                    <img src={infos[2].img.mobile} className="w-full h-full object-cover" alt="" />
                                </picture>
                            </div>                            
                        </article>
                    </motion.div>
                </div>
            </section>
        :
        <section id="infos">
            <div className="p-5 text-sm">
                <p className="max-w-50">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <div className="flex w-full overflow-hidden">
                    {items.map((item, i) => (
                        <motion.div 
                            animate={{ x: ["0%", "-100%"] }}
                            transition={{
                                duration: 5,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                            className="w-full shrink-0 p-10" key={i + item}
                        >
                            <img className="w-full" src={item} alt="" />
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-4 p-2">
                {infos.map((info, i) => (
                    <InfoCard 
                        isDesktop={isDesktop}
                        key={info.name + i}
                        info={info}
                        length={3}
                        index={i}
                    />
                ))}                
            </div>
        </section>
    )
}