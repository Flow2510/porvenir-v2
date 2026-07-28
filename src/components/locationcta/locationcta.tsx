import { AnimatePresence } from "motion/react";
import LocationModal from "../locationmodal/locationmodal";
import { useTranslation } from "react-i18next";

type Props = {
    readonly toggleModal: () => void;
    readonly modalIsOpen: boolean;
}

export default function LocationCta({ toggleModal, modalIsOpen } : Props){
    const { t } = useTranslation();

    return(
        <section className="px-5 py-25 text-center flex flex-col items-center gap-4 md:py-35 lg:py-45 relative">
            <AnimatePresence>
                {modalIsOpen &&
                    <LocationModal />
                }
            </AnimatePresence>
            <h2 className="">{t('location-cta.title')}</h2> 
            <p className="text-4xl lg:text-7xl lg:max-w-200 flex flex-col items-center">
                <span>{t('location-cta.text')}</span>
                <button onClick={toggleModal} className="text-[#b1a696] underline underline-offset-4 cursor-pointer w-fit">{t('location-cta.button')}</button>
            </p>
            <div className="location-cta-overlay">

            </div>
        </section>
    )
}