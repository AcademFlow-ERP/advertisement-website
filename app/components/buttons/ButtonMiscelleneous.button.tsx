import { useRef, useState, type JSX } from "react";
import { useCloseOnOutsideClicks } from "~/hooks";
type CallToActionOption = {
    id: string,
    title: string,
    icon?: JSX.Element
}
type ButtonMiscelleneous = {
    buttonTitle?: string,
    buttonIcon?: JSX.Element,
    callToActionOptionLists?: CallToActionOption[],
    excludeOptionFromCallToActionLists?: boolean | string,
    callToActionFn?: () => void,
    callToActionSelectionFn?: (callToActionOptionId: string) => void,
    className?: string,
    positionClass?:string,
    buttonType?: "button" | "submit" |  "reset";
    borderRadius?: string;
    widthClass?: string;
    disabled?: boolean;
}
export default function ButtonMiscelleneous({buttonTitle, disabled, buttonIcon, buttonType, callToActionOptionLists, excludeOptionFromCallToActionLists, callToActionFn, callToActionSelectionFn, className, widthClass, positionClass, borderRadius}: ButtonMiscelleneous){
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const buttonRef = useRef(null)

    const callToActionClickFn = () => {
        if (callToActionOptionLists && callToActionOptionLists.length > 0) setOpenMenu(openMenu => !openMenu);
        if(callToActionFn) callToActionFn();
    }

    const callToActionSelection = (payload: string) => {
        setOpenMenu(false);
        if(callToActionSelectionFn)callToActionSelectionFn(payload);
    }
    useCloseOnOutsideClicks(buttonRef, () => setOpenMenu(false))
    return(
        <div ref={buttonRef} role="button" className={`relative flex ${widthClass??'w-fit'}`}>
            <button disabled={disabled} title={buttonTitle} type={buttonType} onClick={callToActionClickFn} className={`relative w-full outline-none flex justify-center items-center shadow whitespace-nowrap gap-2 transition-all 
                ${className?? 'font-medium'} 
                ${borderRadius?? 'rounded'} px-3 py-2.5 hover:scale-105 active:scale-95 text-sm 
                ${disabled ? `cursor-not-allowed`:`cursor-pointer`} 
                ${openMenu && !className ? 'bg-[#f3f6f9] hover:bg-[#dfe7fb7f]': className}`}>
                {
                    buttonIcon && (<span>{buttonIcon}</span>)
                }
                {
                    buttonTitle && (`${buttonTitle}`)
                }
            </button>
            {
                openMenu && callToActionOptionLists && (
                    <div className={`animate-slide-in-up flex w-max min-w-[192px] absolute right-0 bg-white border border-[#dfe7fb] flex-col p-2 rounded-2xl font-semibold shadow-xl z-20 ${positionClass ?? 'top-10'}`}>
                        {
                            callToActionOptionLists.map(({id, title, icon}, index) => (
                                <div key={id+index} role="button" onClick={() => callToActionSelection(id)} className={`flex gap-3 items-center capitalize transition-all text-sm rounded-3xl hover:bg-[#f3f6f9] px-4 py-3 active:scale-95 ${id === excludeOptionFromCallToActionLists && 'hidden' }`}>
                                    <span>{icon}</span>
                                    <span>{title}</span>
                                </div>
                            ))
                        }
                    </div>
                )
            }
            
        </div>
    )
}