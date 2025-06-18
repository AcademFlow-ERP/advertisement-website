import { useMemo, useRef, useState, type JSX } from "react";
import { IoMdCheckmark, IoIosArrowDown } from "react-icons/io";
import { useCloseOnOutsideClicks } from "~/hooks";

type Option = {
    id: string;
    name?: string;
    title?:string;
    icon?: JSX.Element;
    createdAt?: string;
    category_type?: string;
}

type ButtonSelectModern = {
    optionLists: Option[]
    activeOptionID: string
    selectActionCallbackFn: (option: Option) => void
    disabled?:boolean
};

export default function ButtonSelectModern({activeOptionID, optionLists, disabled, selectActionCallbackFn}:ButtonSelectModern){
    const menuDivRef = useRef(null)
    const [openButtonMenu, setOpenButtonMenu] = useState(false);

    //Active option item
    const activeOption = useMemo(()=>activeOptionID ? optionLists.filter(option => option.id == activeOptionID)[0]:undefined,[activeOptionID, optionLists])

    useCloseOnOutsideClicks(menuDivRef, () => {
        if(openButtonMenu)setOpenButtonMenu(false)
    })

    return(
        <div ref={menuDivRef} className="z-20">
            <button disabled={disabled} type="button" onClick={()=> setOpenButtonMenu(openButtonMenu => !openButtonMenu)} className={`relative capitalize w-fit px-2 py-1.5 flex flex-col rounded-2xl ring ring-offset-2 border transition-all ${activeOptionID ? 'bg-[#31859c] ring-[#31859c] text-white border-transparent hover:scale-[1.04]': 'hover:bg-[#f5f7fd] ring-transparent'} active:scale-100 font-medium text-sm ${disabled && 'cursor-not-allowed'} border-[#dfe7fb] outline-[#31859c]`}>
                <div className="w-full flex justify-between items-center gap-4">
                {
                    activeOptionID && <span className="flex items-center gap-1 font-semibold text-white whitespace-nowrap">{activeOption?.icon}{ activeOption?.name}</span>
                }
                {
                    <IoIosArrowDown className={`${openButtonMenu && 'transition-all rotate-180'}`}/>
                }
                </div>
                <ul className={openButtonMenu ?'absolute animate-slide-in-up flex flex-col bg-white text-[#31859c] w-full rounded-2xl border border-[#f3f6f9] shadow-2xl px-1.5 py-2 -left-3 bottom-10 gap-1 min-w-[9rem]': `hidden`}>
                    {
                        optionLists.length > 0 && optionLists.map(({id, name, icon}, index) => (
                            <li onClick={() => selectActionCallbackFn({id, name})} key={id+index} className="w-full flex justify-between items-center hover:bg-gray-100 rounded-2xl px-3 py-1.5 transition-all hover:scale-[1.02]">
                                <div className="flex items-center gap-2">
                                    {icon} {name}   
                                </div>
                                <IoMdCheckmark className={`${activeOption?.id == id ? 'flex': 'hidden'}`}/>
                            </li>
                        ))
                    }
                </ul>
            </button>
        </div>
        
    )
}