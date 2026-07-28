type Props = {
    readonly activity: {
        name: string;
        title: string;
        text: string;
        img: {
            mobile: string;
            desktop: string;
        };
        alt: string;
    };
    readonly index: number;
    readonly itemLength: number;
}

export default function AdventureCard({ activity, index, itemLength } : Props) {
    return(
        <article className="w-full flex flex-col gap-6">
            <div className="w-full aspect-16/11 rounded-4xl overflow-hidden relative">
                <picture>
                    <source
                        media="(min-width: 768px)"
                        srcSet={activity.img.desktop}
                    />
                        <img src={activity.img.mobile} className="w-full h-full object-cover bg-neutral-600" alt="" />
                    </picture>
                <div className="flex absolute bottom-5 left-5 gap-1">
                    <p className="border py-1 px-3 rounded-full text-sm">0{index + 1}</p>
                    <p className="border py-1 px-3 rounded-full text-sm text-[#b1a696]">0{itemLength}</p>
                </div>
            </div>
            <div className="p-2 flex flex-col gap-5">
                <h3 className="text-2xl max-w-[50%] leading-[100%]">{activity.title}</h3>
                <p className="text-sm text-[#b1a696] tracking-[-0.2px] pr-8 font-semibold">
                    {activity.text}
                </p>
            </div>
        </article>
    )
}