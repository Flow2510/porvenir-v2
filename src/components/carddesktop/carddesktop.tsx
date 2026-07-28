import { AnimatePresence, motion } from "motion/react"
import { useTranslation } from "react-i18next";

type Props = {
    readonly room: {
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
    }
    readonly animate: boolean;
    readonly openInfoModal: (id: string) => void;
}

export default function CardDesktop({ room, animate, openInfoModal } : Props) {
    const { t } = useTranslation();
    const text = t(`rooms.${room.id}.title`)
    const letters = text.split(' ')

    return(
        <div className="h-full w-full flex items-center p-5 relative rounded-4xl overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-full">
                <picture>
                    <source
                        media="(min-width: 768px)"
                        srcSet={room.img.desktop}
                    />
                    <img src={room.img.mobile} className="h-full w-full object-cover rounded-4xl" alt="" />
                </picture>
                
            </div>
            <AnimatePresence>
                {animate &&
                    <div>
                        <div className="relative">
                            <motion.h2 
                                initial={{ opacity : 0, x: 50 }}
                                animate={{ opacity : 1, x: 0 }}
                                exit={{ opacity : 0, x: 50 }}
                                transition={{ duration: 0.5 }}
                                className="whitespace-pre leading-[120%] text-8xl flex gap-x-4 flex-wrap max-w-200"
                            >
                                {letters.map((letter, i) => (
                                    <span key={i + letter} className="inline-block overflow-hidden">
                                        <span                                            
                                            className="inline-block"
                                        >
                                            {letter}
                                        </span>
                                    </span>
                                ))}
                            </motion.h2>
                        </div>
                        <div className="absolute bottom-6 left-5 flex gap-6 items-center">
                            <motion.button
                                onClick={() => openInfoModal(room.id)}
                                key='cardButton'
                                initial={{ scale : 0 }}
                                animate={{ scale : 1 }}
                                exit={{ scale : 0 }}
                                transition={{ duration: 0.3 }}
                                className="hover:rotate-90 duration-300 hover:text-neutral-50 hover:bg-neutral-950 bg-neutral-50 w-15 h-15 rounded-full text-neutral-950 text-4xl font-extralight cursor-pointer"
                            >
                                <span>+</span>
                            </motion.button>
                            <div>
                                <motion.p 
                                    key='cardText'
                                    initial={{ x : 50, opacity: 0 }}
                                    animate={{ x : 0, opacity: 1 }}
                                    exit={{ x : 50, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="max-w-100"
                                >
                                    {t(`rooms.${room.id}.text`)}
                                </motion.p>
                            </div>
                        </div>
                    </div>
                }
            </AnimatePresence>
        </div>
    )
}