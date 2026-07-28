import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { useTranslation } from "react-i18next";

export default function Discover() {
    const { t } = useTranslation();
    const tags = [
        "Jungle Trails",
        "Waterfalls",
        "Minca",
        "Tayrona",
        "Caribbean Beaches",
        "Birdwatching",
        "Coffee Farms",
        "Sunsets",
        "Local Food",
        "Wildlife",
        "Hiking",
        "Nature"
    ];

    const text = t('discover.title')
    const words = text.split(" ")
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "start center"]
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"])

    return(
        <section id="discover" className="relative">
            <div className="p-5 flex flex-col gap-10">
                <h3>{t('discover.name')}</h3>
                <h2 className="text-6xl flex flex-wrap leading-[125%] gap-x-3 lg:text-9xl lg:gap-x-7 lg:max-w-[85%]" ref={ref}>
                    {words.map((w, i) => (
                        <span className="inline-block overflow-hidden" key={w + i}>
                            <motion.span 
                                style={{ y }}
                                transition={{ delay: 0 + (i/20)}}
                                className="inline-block"
                            >
                                {w}
                            </motion.span>
                        </span>
                    ))}
                </h2>
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                    <p className="lg:flex-1 lg:text-[#b1a696] lg:text-4xl lg:pr-15">{t('discover.text')}</p>
                    <div className="flex flex-col gap-6 lg:flex-1">
                        <p className="lg: w-80">{t('discover.subtitle')}</p>
                        <div className="flex flex-wrap gap-2 w-full max-w-125 lg:max-w-200">
                            {tags.map((tag, i) => (
                                <motion.p 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0 + (i / 30) }}
                                    className="py-3 px-6 border odd:text-[#b1a696] text-2xl rounded-full flex items-center justify-center" 
                                    key={tag}
                                >
                                    <span>{t(`discover.tags.${tag}`)}</span>
                                </motion.p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="discover-overlay">

            </div>
        </section>
    )
}