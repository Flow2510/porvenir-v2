import { AnimatePresence, motion, useMotionTemplate, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import Card from "../card/card";
import { useRef, useState } from "react";
import CardDesktop from "../carddesktop/carddesktop";

type Props = {
    isDesktop: boolean;
    readonly rooms: {
        id: string;
        img: {
            mobile: string;
            desktop: string;
        };
        gallery: {
            img: {
                mobile: string;
                desktop: string;
            };
            alt: string;
        }[];
        equipments: {
            label: string;
            value: string;
        }[];
    }[];
    openInfoModal: (id: string) => void;
}

export default function CardsList({ isDesktop, rooms, openInfoModal } : Props){
    const [showTicker, setShowTicker] = useState(true)
    const [infos, setInfos] = useState(false)
    const image = "/logo.svg"
    const tickerList = [image, image]
    const tickerListDesktop = [image, image, image, image]
    const ref = useRef(null)
    const { scrollYProgress: scrollA } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })
    const [animations, setAnimations] = useState([
        false, 
        false, 
        false
    ])

    const widthInfo = useTransform(scrollA, [0, 1], ["0%", "100%"])
    const exitBrightness1 = useTransform(scrollA, [0.33, 0.5], [1, 0.4])
    const exitBrightness2 = useTransform(scrollA, [0.665, 0.83], [1, 0.4])
    const exitBrightness3 = useTransform(scrollA, [0, 0], [1, 1])

    const translateCards = [
        useTransform(scrollA, [0, 0], ["0%", "0%"]),
        useTransform(scrollA, [0.33, 0.5], ["110%", "0%"]),
        useTransform(scrollA, [0.665, 0.83], ["110%", "0%"])
    ]

    const scaleCards = [
        useTransform(scrollA, [0, 0.165, 0.33, 0.55], [0.5, 1, 1, 0.8]),
        useTransform(scrollA, [0.665, 0.83], [1, 0.8]),
        useTransform(scrollA, [0, 0], [1, 1])
    ]

    const tickerOpacity = useTransform(scrollA, [0, 0.2], ["100", "0"])

    const filterCards = [
        useMotionTemplate`brightness(${exitBrightness1})`,
        useMotionTemplate`brightness(${exitBrightness2})`,
        useMotionTemplate`brightness(${exitBrightness3})`
    ];
    
    useMotionValueEvent(scrollA, "change", (latest) => {
        if (latest > 0.165 && latest < 0.5) {
            setAnimations([true, false, false]);            
        } else if (latest > 0.5 && latest < 0.83) {
            setAnimations([false, true, false]);
        } else if (latest > 0.83) {
            setAnimations([false, false, true]);
        } else {
            setAnimations([false, false, false]);
        }
        if (latest > 0.165 && latest < 1) {
            setInfos(true)
        } else {
            setInfos(false)
        }
        if (latest > 0.3) {
            setShowTicker(false)
        } else {
            setShowTicker(true)
        }
    });

    return(
        isDesktop ? 
            <section className="relative w-full h-[600dvh]" id="rooms" ref={ref}>
                <AnimatePresence>
                    {infos &&
                        <motion.div 
                            key="scrollText"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed top-[50%] translate-y-[-50%] right-10 z-10 text-4xl w-fit mix-blend-difference">
                            <span>[Scroll]</span>
                        </motion.div>
                    }
                    {infos &&
                        <motion.div 
                            key="fillBar"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed bottom-13 w-80 h-0.5 right-10 z-10 text-4xl bg-amber-50/30"
                        >
                            <motion.div style={{ width: widthInfo }} className="h-full bg-amber-50">

                            </motion.div>
                        </motion.div>
                    }
                </AnimatePresence>
                <div className="sticky left-0 top-0 w-full h-dvh p-2 flex items-center justify-center">
                    {showTicker && 
                        <div className="absolute top-0 left-0 h-dvh w-full flex items-center justify-center">
                            <motion.div
                                className="flex w-full overflow-hidden"
                            >
                                {tickerListDesktop.map((t,i) => (
                                    <motion.div
                                        key={t + i}
                                        style={{ opacity: tickerOpacity }}
                                        animate={{ x: ["0%", "-100%"] }}
                                        transition={{
                                            duration: 5,
                                            ease: "linear",
                                            repeat: Infinity,
                                        }}
                                        className="p-10 w-[50%] shrink-0 lg:p-10"
                                    >
                                        <img src="/logo.svg" className="w-full" alt="" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    }
                    <div className="absolute top-0 left-0 w-full h-dvh">
                        {rooms.map((room, i) => (
                            <motion.div key={room.id + i} className="w-full h-full p-10 top-0 left-0 absolute" style={{ y: translateCards[i], scale: scaleCards[i], filter: filterCards[i] }}>
                                <CardDesktop 
                                    openInfoModal={openInfoModal}
                                    room={room}
                                    animate={animations[i]}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="houses-overlay">
                    
                </div>
            </section>
        :
        <section className="p-5 flex flex-col gap-20 relative" id="rooms">
            <div className="flex w-full overflow-hidden">
                {tickerList.map((t,i) => (
                    <motion.div
                        key={t + i}
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            duration: 5,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="p-10 w-full shrink-0 lg:p-60"
                    >
                            <img src="/logo.svg" className="w-full" alt="" />
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-col gap-8">
                {rooms.map((room) => (
                    <Card
                        openInfoModal={openInfoModal}
                        key={room.id}
                        room={room}
                    />
                ))}
            </div>
            <div className="houses-overlay">

            </div>
        </section>
    )
}