import { motion } from "motion/react";

export default function Footer(){
    return(
        <footer className="pb-1 pt-20 flex flex-col gap-8 relative">
            <div className="p-5 flex flex-col gap-6">
                <div className="flex flex-col gap-6 md:grid-cols-2 md:grid">
                    <div className="text-sm md:text-lg md:col-2 md:row-2 md:text-right">
                        <p>Your home in the jungle,</p>
                        <p>near the Caribbean coast.</p>
                    </div>
                    <nav className="flex flex-col text-xl md:text-2xl lg:text-4xl font-semibold leading-[120%] md:col-2 md:row-1 md:items-end">
                        <a className="w-fit hover:text-[#b1a696]" href="#welcome">Welcome</a>
                        <a className="w-fit hover:text-[#b1a696]" href="#intro">Introduction</a>
                        <a className="w-fit hover:text-[#b1a696]" href="#houses">Houses</a>
                        <a className="w-fit hover:text-[#b1a696]" href="#infos">The Auberge</a>
                        <a className="w-fit hover:text-[#b1a696]" href="#activities">Activities</a>
                        <a className="w-fit hover:text-[#b1a696]" href="#feedback">Feedback</a>
                    </nav>
                    <div className="flex gap-2 md:gap-3 lg:gap-4 text-xl lg:text-2xl md:col-1 md:row-2 items-center">
                        <a href="www.instagram.com" target="_blank" className="rounded-full border w-12 h-12 flex justify-center items-center hover:text-neutral-950 hover:bg-neutral-50" aria-label="link to Instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="www.facebook.com" target="_blank" className="rounded-full border w-12 h-12 flex justify-center items-center hover:text-neutral-950 hover:bg-neutral-50" aria-label="link to Facebook">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="www.facebook.com" target="_blank" className="rounded-full border w-12 h-12 flex justify-center items-center hover:text-neutral-950 hover:bg-neutral-50" aria-label="link to Facebook">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                        <a href="www.booking.com" target="_blank" className="rounded-full border w-12 h-12 flex justify-center items-center hover:text-neutral-950 hover:bg-neutral-50" aria-label="link to Bookink">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>
                    <div className="pr-15 md:text-2xl md:gap-4 flex flex-col lg:text-4xl lg:pr-0">
                        <p className="text-[#b1a696]">
                            Discover a hidden retreat in the Colombian jungle, where comfort, adventure, and nature come together just outside Santa Marta.
                        </p>
                        <p className="text-[#b1a696]">
                            A peaceful place to slow down, explore, and experience the beauty of the Caribbean rainforest.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <div className="h-px w-full bg-[#b1a696]"></div>
                <div className="p-5 text-sm">
                    <p className="text-[#b1a696]">Website made by - <a className="underline text-[#f4efe7]" href="https://sendra-florian.vercel.app/" target="_blank">Flow</a></p>
                </div>
                <div className="p-5 overflow-hidden w-full">
                    <motion.img 
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true}}
                        transition={{ duration: 0.6 }}
                        className="w-full origin-bottom" src="/logo.svg" alt="" 
                    />
                </div>
            </div>
            <div className="footer-overlay">
                
            </div>
        </footer>
    )
}