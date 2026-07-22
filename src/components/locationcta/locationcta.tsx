import { AnimatePresence } from "motion/react";
import LocationModal from "../locationmodal/locationmodal";

type Props = {
    readonly toggleModal: () => void;
    readonly modalIsOpen: boolean;
}

export default function LocationCta({ toggleModal, modalIsOpen } : Props){

    return(
        <section className="px-5 py-25 text-center flex flex-col items-center gap-4 md:py-35 lg:py-45">
            <AnimatePresence>
                {modalIsOpen &&
                    <LocationModal />
                }
            </AnimatePresence>
            <p className="text-sm">Location</p> 
            <p className="text-4xl lg:text-7xl lg:max-w-200 flex flex-col items-center">
                <span>Perfectly located between the jungle and the Caribbean coast.</span>
                <button onClick={toggleModal} className="text-[#b1a696] underline underline-offset-4 cursor-pointer w-fit">Find us</button>
            </p>
            <div className="location-cta-overlay">

            </div>
        </section>
    )
}