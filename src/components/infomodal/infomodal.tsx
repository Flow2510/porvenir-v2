import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from "motion/react";
import { Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from "react-i18next";

type Props = {
    readonly closeModalInfo: () => void;
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
    readonly selectedRoom: string;
};

export default function InfoModal({ closeModalInfo, selectedRoom, rooms } : Props) {
    const { t } = useTranslation();
    const selected = rooms.find((room) => room.id === selectedRoom)

    if (!selected) return 

    return(
        <div             
            className="fixed inset-0 top-0 left-0 bg-neutral-950 p-2 z-100 lg:bg-neutral-950/75"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0, transition: { delay: 0.6, duration: 0.5 } }}
                transition={{ duration: 0.5 }}
                className="w-full h-full rounded-4xl bg-[#2a2725] p-5 flex flex-col gap-6 lg:max-w-[50%] relative min-h-0 overflow-hidden origin-bottom lg:origin-bottom-left"
            >
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.5 } }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-6 flex-1 min-h-0">
                    <div className="flex items-center justify-between">
                        <p className="text-2xl">{t(`rooms.${selected.id}.name`)}</p>
                        <button className=" h-12 w-12 flex items-center justify-center rounded-full cursor-pointer bg-neutral-900 text-neutral-50 hover:text-neutral-950 hover:bg-neutral-50" onClick={closeModalInfo}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="flex flex-col gap-10 flex-1 min-h-0">
                        <div className="flex flex-col gap-8 flex-1 min-h-0">
                            <Swiper className="w-full flex-1 min-h-0" spaceBetween={16} modules={[Pagination, Navigation]} navigation={true} pagination={{ clickable: true }}>
                                {selected.gallery.map((item, index) => (
                                    <SwiperSlide key={item.alt + index}>
                                        <button className={`w-full h-full rounded-4xl overflow-hidden cursor-pointer`}>
                                            <picture>
                                                <source
                                                    media="(min-width: 768px)"
                                                    srcSet={item.img.desktop}
                                                />
                                                <img className="w-full h-full object-cover bg-lime-600" src={item.img.mobile} alt="" />
                                            </picture>
                                            
                                        </button>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <p className="text-sm text-[#b1a696] lg:max-w-[70%]">
                                {t(`rooms.${selected.id}.text`)}
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 text-sm">
                            {selected.equipments.map((e) => (
                                <div className="flex flex-col gap-4" key={e.label}>
                                    <div className="flex justify-between items-center">
                                        <p className="font-semibold">{e.label}</p>
                                        <p className="">{e.value}</p>
                                    </div>
                                    <div className="h-px w-full bg-[#b1a696] opacity-80"></div>
                                </div>
                            ))}                            
                        </div>
                        
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.5 } }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex p-5 w-full bg-[#181717] rounded-3xl justify-between items-center"
                >
                    <div>
                        <p>{t(`info-modal.button`)}</p>
                    </div>
                    <div className="flex gap-2">
                        <a aria-label="Reserve on AirBnb" className="h-10 w-10 rounded-full border flex items-center justify-center hover:text-neutral-950 hover:bg-neutral-50" href="">
                            <i className="fa-brands fa-airbnb"></i>
                        </a>
                        <a aria-label="Reserve on Booking" className="h-10 w-10 rounded-full border flex items-center justify-center hover:text-neutral-950 hover:bg-neutral-50" href="">
                            <i className="fa-brands fa-blogger-b"></i>
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}