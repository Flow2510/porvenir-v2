import { motion } from "motion/react";
import { useTranslation } from "react-i18next";


export default function Footer(){
    const { t, i18n } = useTranslation();
    const menu = [
        "welcome",
        "introduction",
        "rooms",
        "hostel",
        "activities",
        "feedback"
    ];

    return(
        <footer className="pb-1 pt-20 flex flex-col gap-8 relative">
            <div className="p-5 flex flex-col gap-6">
                <div className="flex flex-col gap-6 md:grid-cols-2 md:grid">
                    <div className="text-sm md:text-lg md:col-2 md:row-2 md:text-right">
                        <p>{t('footer.subtitle.line1')}</p>
                        <p>{t('footer.subtitle.line2')}</p>
                    </div>
                    <nav className="flex flex-col text-xl md:text-2xl lg:text-4xl font-semibold leading-[120%] md:col-2 md:row-1 md:items-end">
                        {menu.map((m) => (
                            <a className="w-fit hover:text-[#b1a696]" href={`#${m}`} key={m}>{t(`menu.${m}`)}</a>
                        ))}
                    </nav>
                    <div className="flex gap-2 md:gap-3 lg:gap-4 text-xl lg:text-2xl md:col-1 md:row-2 items-center">
                        <a href="www.instagram.com" target="_blank" className="rounded-full border w-12 h-12 flex justify-center items-center hover:text-neutral-950 hover:bg-neutral-50" aria-label="link to Instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="www.facebook.com" target="_blank" className="rounded-full border w-12 h-12 flex justify-center items-center hover:text-neutral-950 hover:bg-neutral-50" aria-label="link to Facebook">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="https://www.airbnb.fr/rooms/1433646435894375923?source_impression_id=p3_1784890725_P3Ujf-bjiS9Q2D1_" target="_blank" className="rounded-full border w-12 h-12 flex justify-center items-center hover:text-neutral-950 hover:bg-neutral-50" aria-label="Book via Aitbnb">
                            <i className="fa-brands fa-airbnb"></i>
                        </a>
                        <a href="https://www.booking.com/hotel/co/auberge-del-porvenir.fr.html" target="_blank" className="rounded-full border w-12 h-12 flex justify-center items-center hover:text-neutral-950 hover:bg-neutral-50" aria-label="Book via Booking">
                            <i className="fa-brands fa-blogger-b"></i>
                        </a>
                        <a href="www.whatsapp.com" target="_blank" className="rounded-full border w-12 h-12 flex justify-center items-center hover:text-neutral-950 hover:bg-neutral-50" aria-label="Contact us via WhatsApp">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                        <a href="www.google.com" target="_blank" className="rounded-full border w-12 h-12 flex justify-center items-center hover:text-neutral-950 hover:bg-neutral-50" aria-label="Contact us via mail">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>
                    <div className="pr-15 md:text-2xl md:gap-4 flex flex-col lg:text-4xl lg:pr-0">
                        <p className="text-[#b1a696]">
                            {t('footer.text1')}
                        </p>
                        <p className="text-[#b1a696]">
                            {t('footer.text2')}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <div className="h-px w-full bg-[#b1a696]"></div>
                <div className="p-5 text-sm flex justify-between">
                    <p className="text-[#b1a696]">Website made by - <a className="underline text-[#f4efe7]" href="https://sendra-florian.vercel.app/" target="_blank">Flow</a></p>
                    <div className="flex gap-4">
                        <button onClick={() => i18n.changeLanguage("en")} className="cursor-pointer hover:text-[#b1a696]">
                            {t(`footer.button.english`)}
                        </button>
                        <button onClick={() => i18n.changeLanguage("fr")} className="cursor-pointer hover:text-[#b1a696]">
                            {t(`footer.button.french`)}
                        </button>
                        <button onClick={() => i18n.changeLanguage("es")} className="cursor-pointer hover:text-[#b1a696]">
                            {t(`footer.button.spanish`)}
                        </button>
                    </div>
                </div>
                <div className="p-5 overflow-hidden w-full">
                    <motion.img 
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, margin: "150px"}}
                        transition={{ duration: 0.8 }}
                        className="w-full origin-bottom" src="/logo.svg" alt="" 
                    />
                </div>
            </div>
            <div className="footer-overlay">
                
            </div>
        </footer>
    )
}