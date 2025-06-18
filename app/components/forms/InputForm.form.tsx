import { useState, type JSX } from "react";

type InputForm = {
    name: string;
    labelTitle?: string;
    inputId: string;
    labelDescription?: string;
    autoComplete?: string;
    inputType: string;
    placeholderText?: string;
    inputIcon?: JSX.Element;
    inputIconEndCTA?: JSX.Element | string;
    inputIconEndCTACallbackFn?: () => void;
    descriptionEnd?: string;
    required?: boolean;
    warningColor?:boolean
    isTextArea: boolean;
    disabled?: boolean;
    maxLength?: number;
    minHeightTextArea?: string;
    defaultValue?: string | number;
    handleChangeFn: (event: {target: {name:string, value: string}}) => void;
    borderRadiusClass?:string;
    bgColorClass?:string;
    heightClass?:string;
}
export default function InputForm({name, defaultValue, inputId, autoComplete, labelTitle, disabled, labelDescription,placeholderText, inputIcon,inputType, maxLength, descriptionEnd, required, warningColor, isTextArea, minHeightTextArea, handleChangeFn, borderRadiusClass, bgColorClass, heightClass, inputIconEndCTA, inputIconEndCTACallbackFn}: InputForm){
    const [isFocus, setIsFocus] = useState<boolean>(false);
    return(
        <div className="w-full flex flex-col space-y-1 transition-all font-medium">
            <div className="flex flex-col">
                <span className="capitalize text-sm font-light">{labelTitle}</span>
                <p className="text-[13.5px] leading-5 font-normal pb-0.5">{labelDescription}</p>
            </div>
            <div className="flex flex-col">
                {
                    isTextArea ? 
                    (<label 
                        htmlFor={inputId}>
                            <textarea 
                                id={inputId} 
                                onFocus={() => setIsFocus(true)} 
                                onBlur={() => setIsFocus(false)} 
                                disabled={disabled} 
                                onChange={(event)=> handleChangeFn(event)} 
                                onInput={(event) => (event.target as HTMLTextAreaElement).maxLength && (event.target as HTMLTextAreaElement).value.slice(0, (event.target as HTMLTextAreaElement).maxLength)}
                                name={name}
                                maxLength={maxLength} 
                                placeholder={placeholderText} 
                                defaultValue={defaultValue} 
                                className={`w-full ${minHeightTextArea??'min-h-[280px]'}  outline-none py-3 px-2 overflow-hidden rounded-3xl border hover:border-[#dfe7fb] ${isFocus ? 'bg-transparent border-[#dfe7fb]' : 'bg-[#f6f6f6] border-transparent'}`}>
                            </textarea>
                    </label>) 
                    : 
                    (<label 
                        htmlFor={inputId} 
                        className={`w-full relative flex flex-row ${heightClass ?? 'h-12'} gap-2 items-center overflow-hidden border hover:border-[#dfe7fb] ${isFocus ? 'bg-white border-[#dfe7fb]' : `${bgColorClass? `${bgColorClass} border-transparent`: `bg-[#f6f6f6] ${warningColor ? 'border-red-500': 'border-transparent'}`}`} ${borderRadiusClass?? 'rounded-3xl'} `}>
                    <span className="absolute pl-3 pr-2">{inputIcon}</span>
                    <input 
                        id={inputId} 
                        onFocus={() => setIsFocus(true)} 
                        onBlur={() => setIsFocus(false)} 
                        onChange={(event)=> handleChangeFn(event)} 
                        name={name} defaultValue={defaultValue} 
                        type={inputType} 
                        placeholder={placeholderText} 
                        className={`w-full h-full outline-none bg-transparent ${inputIcon ? 'px-10': 'px-4'} ${disabled && 'cursor-not-allowed'}`} disabled={disabled} autoComplete={autoComplete ?? labelTitle??'off'} required={required}/>
                    {
                        inputIconEndCTA && (<button onClick={inputIconEndCTACallbackFn} disabled={disabled} type="button" className="absolute right-0 bg-[#f6f6f6] h-full pr-3 pl-2 transition-all hover:scale-105 active:scale-90 rounded-e-3xl active:outline outline-[#31859c]">{inputIconEndCTA}</button>)
                    }
                    </label>)
                }
                <p className={`${warningColor ? 'text-xs text-red-600' : 'text-[13.5px] leading-5 font-normal py-0.5'}`}>{descriptionEnd}</p>
                {
                    required && (<span className="text-xs font-light pb-0.5 text-red-600">{labelTitle} is required!</span>)
                }
            </div>
        </div>
    )
}