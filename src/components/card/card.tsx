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
    readonly openInfoModal: (id: string) => void;
}

export default function Card({ room, openInfoModal } : Props ){
    const { t } = useTranslation();
    
    return(
            <article className="flex flex-col gap-6">
                <button className="relative" onClick={() => openInfoModal(room.id)}>
                    <div className="aspect-[1.4/1] w-full rounded-4xl bg-neutral-600 overflow-hidden">
                        <picture>
                            <source
                                media="(min-width: 768px)"
                                srcSet={room.img.desktop}
                            />
                            <img className="h-full w-full object-cover" src={room.img.mobile} alt="" />
                        </picture>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-neutral-50 rounded-full h-12 w-12 flex items-center justify-center">
                        <span className="text-4xl text-neutral-900 font-extralight">
                            +
                        </span>
                    </div>
                </button>
                <div className="font-semibold flex flex-col gap-4">
                    <h3 className="text-4xl">{t(`rooms.${room.id}.title`)}</h3>
                    <p className="text-sm max-w-[80%]">{t(`rooms.${room.id}.text`)}</p>
                </div>
            </article>
    )
}