import type { JSX } from "react";

type ButtonHinting = {
    buttonIcon: JSX.Element;
    buttonTitle: string;
    callToActionFn: () => void;
    topClass?: string;
    paddingClass?: string;
    hoverBgColorClass?:string;
    borderRadiusClass?:string;
    className?:string;
    disabled?:boolean;
}
export default function ButtonHinting({buttonIcon, topClass, buttonTitle, hoverBgColorClass, borderRadiusClass, disabled, callToActionFn, className, paddingClass}: ButtonHinting){
    return(
        <button disabled={disabled} type="button" onClick={callToActionFn} title={buttonTitle} className={`relative group/callToAction transition-all flex ${disabled ? 'cursor-not-allowed': ''} flex-col items-center justify-center ${className} ${borderRadiusClass??'rounded-full'} ${hoverBgColorClass??'hover:bg-gray-100'} active:bg-gray-200 focus:bg-gray-200 ring ring-transparent active:ring-white ${paddingClass??'p-3'}`}>
            {buttonIcon}
            <span className={`hidden group-hover/callToAction:flex absolute z-30 ${topClass?? 'top-12'} text-xs whitespace-nowrap w-fit p-1.5 bg-[#0c162c9f] text-white rounded`}>
                {buttonTitle}
            </span>
        </button>
    )
}