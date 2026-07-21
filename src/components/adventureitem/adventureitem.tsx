type Props = {
    readonly title: string;
    readonly distance: string;
    readonly difficulty: string;
}

export default function AdventureItem({ title, distance, difficulty} : Props) {
    return(
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center text-[#b1a696]">
                <p className="text-xl">{title}</p>
                <p className="text-sm">{distance}Km</p>
            </div>
            <div className="h-0.5 w-full bg-[#b1a696] relative">
                <div className={`bg-[#f4efe7] h-full absolute top-0 left-0 z-10`} style={{ width: difficulty }}></div>
            </div>
        </div>
    )
}