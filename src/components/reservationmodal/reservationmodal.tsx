import { motion } from "motion/react"

type Props = {
    readonly toggleReservation: () => void;
}

export default function ReservationModal({toggleReservation} : Props) {
    return(
        <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, type: "tween" }}
            className="w-full h-dvh fixed top-0 left-0 bg-neutral-950 p-2 z-50">
            <div className="w-full h-full rounded-4xl bg-[#2a2725] p-5">
                <button onClick={toggleReservation} className="h-12 w-12 flex justify-center items-center rounded-full bg-neutral-900 text-neutral-50 cursor-pointer hover:text-neutral-950 hover:bg-neutral-50">
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </motion.div>
    )
}