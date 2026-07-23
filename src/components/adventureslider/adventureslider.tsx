import { Swiper, SwiperSlide } from "swiper/react";
import AdventureCard from "../adventurecard/adventurecard";
import 'swiper/css';
import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type Props = {
    isDesktop: boolean;
}

export default function AdventureSlider({ isDesktop } : Props) {
    const { t } = useTranslation()
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end" ]
    })

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"])
    const xImg = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"])

    const activities = [
        {
            name: "jungle",
            title: t('activities.jungle.title'),
            text: t('activities.jungle.text'),
            img: {
                mobile: "/jungle-mobile.webp",
                desktop: "/jungle-desktop.webp"
            },
            alt: t('activities.jungle.alt')
        },
        {
            name: "santa-marta",
            title: t('activities.santa-marta.title'),
            text: t('activities.santa-marta.text'),
            img: {
                mobile: "/santamarta-mobile.webp",
                desktop: "/santamarta-desktop.webp"
            },
            alt: t('activities.santa-marta.alt')
        },
        {
            name: "tayrona-park",
            title: t('activities.tayrona-park.title'),
            text: t('activities.tayrona-park.text'),
            img: {
                mobile: "/tayrona-mobile.webp",
                desktop: "/tayrona-desktop.webp"
            },
            alt: t('activities.tayrona-park.alt')
        },
        {
            name: "caribbean-beaches",
            title: t('activities.caribbean-beaches.title'),
            text: t('activities.caribbean-beaches.text'),
            img: {
                mobile: "/beach-mobile.webp",
                desktop: "/beach-desktop.webp"
            },
            alt: t('activities.caribbean-beaches.alt')
        }
    ];

    return(
        isDesktop ? 
            <div className="w-full h-[300dvh]" ref={ref}>
                <div className="w-full sticky top-0 overflow-hidden">
                    <motion.div className="flex flex-nowrap" style={{ x }}>
                        {activities.map((activity, i) => (
                            <div className="h-dvh w-[75%] shrink-0 p-2 flex items-center" key={activity.name}>
                                <div className="w-full h-[80%] relative rounded-4xl overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-full rounded-4xl overflow-hidden">
                                        <picture>
                                            <source
                                                media="(min-width: 768px)"
                                                srcSet={activity.img.desktop}
                                            />
                                            <motion.img src={activity.img.mobile} className="w-full scale-125 h-full object-cover inline-block" alt={activity.alt} style={{ x: xImg }}/>
                                        </picture>                                        
                                    </div>
                                    <div className="relative p-10 flex flex-col justify-between h-full leading-[100%]">
                                        <h3 className="text-4xl w-120">
                                            {activity.title}
                                        </h3>
                                        <div className="flex justify-between items-center">
                                            <p className="max-w-[50%]">
                                                {activity.text}
                                            </p>
                                            <div className="flex gap-2">
                                                <span className="border p-2 rounded-4xl py-2 px-3">0{i + 1}</span>
                                                <span className="border p-2 rounded-4xl py-2 px-3 text-[#b1a696]">0{activities.length}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        :
        <div className="p-2">
            <Swiper
                slidesPerView={1.2}
                spaceBetween={8}
            >
                {activities.map((activity, i) => (
                    <SwiperSlide key={activity.name}>
                        <AdventureCard 
                            activity={activity}
                            itemLength={activities.length}
                            index={i}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}