import { motion } from "framer-motion"
import { AnimatePresence } from "motion/react"
import { useState } from "react"

export default function ReviewSection() {
    const [reviewsIndex, setReviewsIndex] = useState(0)
    const reviews = [
        {
            firstName: "Bruce",
            name: "Wayne",
            location: "Gotham City",
            image: "/batman-profile-pics.webp",
            text: "An incredible place hidden in the jungle near Santa Marta. The atmosphere is peaceful, the rooms are beautiful, and waking up surrounded by nature was unforgettable. The perfect place to disconnect and recharge."
        },
        {
            firstName: "Peter",
            name: "Parker",
            location: "New-York",
            image: "/spider-profile.webp",
            text: "One of the best stays I have ever experienced. The staff was welcoming, the garden is amazing, and the private terrace with a hammock was the perfect spot to relax after exploring the area."
        },
        {
            firstName: "Clark",
            name: "Kent",
            location: "Metropolis",
            image: "/superman-profile-pics.webp",
            text: "A unique jungle escape close to Santa Marta. We loved the calm atmosphere, the tropical surroundings, and being so close to nature while still having all the comfort we needed."
        }
    ]
    const words= reviews[reviewsIndex].text.split(" ")
    const filledWidth = (100 / reviews.length) * (reviewsIndex + 1)

    const prevHandleClick = () => {
        setReviewsIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
    }

    const nextHandleClick = () => {
        setReviewsIndex((prev) => (prev + 1) % reviews.length)
    }

    return(
        <section className="px-5 py-35 flex flex-col gap-6" id="feedback">
            <p className="text-sm font-semibold">Do people like us?</p>
            <div className="flex flex-col gap-10">
                <div className="min-h-60">
                    <AnimatePresence>
                        <p className="text-[35px] leading-[120%] tracking-[-0.2px] flex flex-wrap gap-x-2 lg:max-w-[75%]">
                            {words.map((word, i) => (
                                <span key={word + i} className="inline-block overflow-hidden">
                                    <motion.span 
                                            key={reviewsIndex}
                                            initial={{ y: "-100%" }}
                                            animate={{ y: "0%" }}
                                            exit={{ y: "-100%" }}
                                            transition={{ duration: 0.3 }}
                                            className="inline-block"
                                        >
                                            {word}
                                        </motion.span>
                                </span>
                            ))}
                        </p>
                    </AnimatePresence>
                </div>
                <div className="flex gap-4 items-center">
                    <AnimatePresence mode="wait">
                        <motion.img 
                            key={`img-${reviewsIndex}`}
                            initial={{ scale : 0 }}
                            animate={{ scale : 1 }}
                            exit={{ scale : 0 }}
                            transition={{ duration: 0.3 }}
                            className="h-12.5 w-12.5 rounded-full bg-neutral-50 object-cover" 
                            src={reviews[reviewsIndex].image} 
                            alt="" 
                        />
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={`div-${reviewsIndex}`}
                            initial={{ x: 50, opacity: 0}}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 50, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="leading-[120%] text-[#b1a696]"
                        >
                            <p>{reviews[reviewsIndex].firstName} {reviews[reviewsIndex].name}</p>
                            <p>{reviews[reviewsIndex].location}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            <div className="flex items-center gap-8 lg:justify-between">
                <div className="flex gap-2">
                    <button onClick={prevHandleClick} className="bg-neutral-200 hover:text-neutral-50 hover:border-amber-50 border cursor-pointer border-amber-50 hover:bg-neutral-900 text-neutral-900 rounded-full h-12 w-12 flex justify-center items-center text-xl" aria-label="Previous reviews"><i className="fa-solid fa-arrow-left"></i></button>
                    <button onClick={nextHandleClick} className="bg-neutral-200 hover:text-neutral-50 hover:border-amber-50 border cursor-pointer border-amber-50 hover:bg-neutral-900 text-neutral-900 rounded-full h-12 w-12 flex justify-center items-center text-xl" aria-label="Next reviews"><i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="w-full h-0.5 bg-[#b1a69640] lg:max-w-75">
                    <div className="h-0.5 bg-[#b1a696] transition-[width] duration-300" style={{ width: `${filledWidth}%`}}>

                    </div>
                </div>
            </div>
        </section>
    )
}