import { AnimatePresence, motion } from "motion/react";

type Props = {
    readonly index: number;
    readonly length: number;
    readonly info: { name: string; title: string; text: string; img: {mobile: string; desktop: string}; alt: string; };
    readonly isDesktop: boolean;
}

export default function InfoCard({ index, length, info, isDesktop }: Props){
    const title = info.title.split(" ")
    const text = info.text.split(" ")

    return(
        isDesktop ?
            <AnimatePresence mode="wait">
                <article 
                    className="w-full h-full bg-[#2a2725] rounded-4xl"
                >
                    <div className="h-full flex flex-col justify-between p-5">
                        <div>
                            <p className="text-4xl lg:max-w-[70%] flex flex-wrap gap-x-2" key={`${info.name} title`}>
                                {title.map((word, i) => (
                                    <span key={word + i} className="overflow-hidden">
                                        <motion.span
                                            initial={{ y : "100%" }}
                                            animate={{ y : "0%" }}
                                            exit={{ y : "-100%" }}
                                            transition={{ duration: 0.5}}
                                            className="inline-block"
                                        >
                                            {word}
                                        </motion.span>
                                    </span>
                                ))}
                            </p>
                        </div>
                        <div className="flex w-full justify-between items-end gap">
                            <div className="flex gap-2 flex-1">
                                <span className="inline-block border px-3 rounded-full py-1 overflow-hidden">
                                    <motion.span 
                                        key={`${info.name} index`}
                                        initial={{ y : "100%" }}
                                        animate={{ y : "0%" }}
                                        exit={{ y : "-100%" }}
                                        transition={{ duration: 0.5}}
                                        className="inline-block">0{index}
                                    </motion.span>
                                </span>
                                <span className="inline-block border px-3 rounded-full py-1 overflow-hidden text-[#b1a696]">
                                    <span 
                                        className="inline-block">0{length}</span>
                                </span>
                            </div>
                            <div className="flex-1 text-sm ">
                                <p className="flex flex-wrap gap-x-1" key={`${info.name} text`}>
                                    {text.map((word, i) => (
                                        <span key={word + i} className="overflow-hidden">
                                            <motion.span
                                                initial={{ y : "100%" }}
                                                animate={{ y : "0%" }}
                                                exit={{ y : "-100%" }}
                                                transition={{ duration: 0.5}}
                                                className="inline-block"
                                            >
                                                {word}
                                            </motion.span>
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </AnimatePresence>
        :
        <article className="w-full min-h-145 rounded-4xl bg-[#2a2725] flex flex-col gap-4 justify-between">
            <div className="px-2 pt-10 font-semibold text-2xl text-[#b1a696] leading-[120%]">
                <p className="flex flex-col tracking-tight w-60">
                    {info.title}
                </p>
            </div>
            <div className="flex flex-col gap-6 text-sm font-semibold leading-[120%]">
                <div className="flex gap-4 p-2 pr-12">
                    <div className="flex items-end">
                        <p className="py-1 px-3 border rounded-full">0{index + 1}</p>
                        <p className="py-1 px-3 border rounded-full opacity-20">0{length}</p>
                    </div>
                    <div>
                        <p className="max-w-75">
                            {info.text}
                        </p>
                    </div>
                </div>
                <div className="w-full aspect-1/0.6 max-h-75 rounded-4xl overflow-hidden">
                    <picture>
                        <source
                            media="(min-width: 768px)"
                            srcSet={info.img.desktop}
                        />
                        <img className="h-full w-full object-cover" src={info.img.mobile} alt="" />
                    </picture>                    
                </div>
            </div>
        </article>
    )
}