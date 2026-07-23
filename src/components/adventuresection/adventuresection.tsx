import { motion } from "framer-motion";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import AdventureItem from "../adventureitem/adventureitem";
import AdventureSlider from "../adventureslider/adventureslider";
import { useTranslation } from "react-i18next";

type Props = { 
    readonly isDesktop: boolean
}

export default function AdventureSection({ isDesktop} : Props) {
    const { t } = useTranslation();
    const ref = useRef(null)
    const text = t('adventures.title')
    const words = text.split(" ");
    const { scrollYProgress : scrollA } = useScroll({
        target: ref,
        offset: ["start end", "end 90%"]
    })
    const { scrollYProgress : scrollB } = useScroll({
        target: ref,
        offset: ["start end", "end center"]
    })

    const y = useTransform(scrollA, [0.4, 1], ["-100%", "0%"])
    const opacity = useTransform(scrollB, [0.2, 0.4], [0, 1])

    return(
        <section id="activities" className="relative">
            <div className="p-5 flex flex-col gap-8 pt-35" ref={ref}>
                <motion.p className="text-sm font-semibold" style={{ opacity }}>
                    {t('adventures.subtitle')}
                </motion.p>
                <h3 className="text-[55px] leading-[120%] max-w-75 flex gap-x-2.5 flex-wrap lg:max-w-300 lg:text-9xl lg:gap-x-8" aria-label={text}>
                    {words.map((word, i) => (
                        <span key={word + i} className="inline-block overflow-hidden">
                            <motion.span style={{ y }} className="inline-block">
                                {word}
                            </motion.span>
                        </span>
                    ))}
                </h3>
                <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-center">
                    <p className="text-[#b1a696] lg:col-2 lg:row-1 lg:text-4xl lg:pr-8">
                        {t('adventures.text1')}
                    </p>
                    <div className="lg:col-1 lg:row-1 lg:pr-20">
                        <p className="max-w-75 text-sm leading-[120%]">{t('adventures.text2')}</p>
                        <div className="py-6 flex flex-col gap-6">
                            <AdventureItem 
                                title={"Santa Marta"}
                                distance={"10"}
                                difficulty={"20%"}
                            />
                            <AdventureItem 
                                title={"Minca"}
                                distance={"20"}
                                difficulty={"40%"}
                            />
                            <AdventureItem 
                                title={"Tayrona Pak"}
                                distance={"50"}
                                difficulty={"90%"}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <AdventureSlider 
                isDesktop={isDesktop}
            />
            <div className="activities-overlay">

            </div>
        </section>
    )
}