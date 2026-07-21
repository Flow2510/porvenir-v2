import { Swiper, SwiperSlide } from "swiper/react";
import AdventureCard from "../adventurecard/adventurecard";
import 'swiper/css';
import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import { motion } from "framer-motion";

type Props = {
    isDesktop: boolean;
}

export default function AdventureSlider({ isDesktop } : Props) {
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
            title: "Explore the Jungle",
            text: "Step into the lush tropical rainforest surrounding the lodge. Follow scenic trails, discover exotic wildlife, listen to the sounds of nature, and enjoy breathtaking viewpoints hidden deep within the Sierra Nevada.",
            img: {
                mobile: "/jungle-mobile.webp",
                desktop: "/jungle-desktop.webp"
            },
            alt: "Hiking trail through the jungle near Santa Marta"
        },
        {
            name: "santa-marta",
            title: "Visit Santa Marta",
            text: "Discover the oldest city in Colombia. Wander through its colorful historic center, enjoy local cafés and restaurants, visit the marina, and experience the vibrant Caribbean atmosphere just a short drive away.",
            img: {
                mobile: "/santamarta-mobile.webp",
                desktop: "/santamarta-desktop.webp"
            },
            alt: "Historic center of Santa Marta"
        },
        {
            name: "tayrona-park",
            title: "Tayrona National Park",
            text: "Spend a day exploring one of Colombia's most iconic national parks. Hike through tropical forests, encounter native wildlife, and reach spectacular beaches such as Cabo San Juan, where the jungle meets the Caribbean Sea.",
            img: {
                mobile: "/tayrona-mobile.webp",
                desktop: "/tayrona-desktop.webp"
            },
            alt: "Beach in Tayrona National Park"
        },
        {
            name: "caribbean-beaches",
            title: "Relax on Caribbean Beaches",
            text: "Escape to the stunning Caribbean coastline and unwind on golden sandy beaches with crystal-clear water. Perfect for swimming, sunbathing, snorkeling, or simply enjoying the peaceful tropical scenery.",
            img: {
                mobile: "/beach-mobile.webp",
                desktop: "/beach-desktop.webp"
            },
            alt: "Caribbean beach near Santa Marta"
        }
    ];

    return(
        isDesktop ? 
            <div className="w-full h-[300dvh]" ref={ref}>
                <div className="w-full sticky top-0 overflow-hidden">
                    <motion.div className="flex flex-nowrap" style={{ x }}>
                        {activities.map((activity, i) => (
                            <div className="h-dvh w-[75%] shrink-0 p-2" key={activity.name}>
                                <div className="w-full h-full relative rounded-4xl overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-full rounded-4xl overflow-hidden">
                                        <picture>
                                            <source
                                                media="(min-width: 768px)"
                                                srcSet={activity.img.desktop}
                                            />
                                            <motion.img src={activity.img.mobile} className="w-full scale-125 h-full object-cover inline-block" alt="" style={{ x: xImg }}/>
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