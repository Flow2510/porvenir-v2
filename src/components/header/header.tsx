export default function Header() {
    return(
        <header className="absolute top-0 left-0 w-full flex flex-col gap-6 p-5">
            <div className="">
                <img className="w-full" src="/logo.svg" alt="" />
            </div>
            <div className="text-[#b1a696] text-[23px] leading-[110%] tracking-[-0.2px] font-semibold flex flex-col ">
                <span>Closer to</span>
                <span>Nature—Closer</span>
                <span>to Yourself</span>
            </div>
        </header>
    )
}