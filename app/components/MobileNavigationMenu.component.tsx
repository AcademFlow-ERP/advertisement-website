import { useMemo, useRef, type Dispatch, type RefObject } from "react";
import { Link, useLocation } from "react-router";
import { PortalModal } from "~/portal/portal.index";
import { ButtonHinting, ButtonMiscelleneous } from "./buttons";
import { VscClose } from "react-icons/vsc";
import { AiFillProduct } from "react-icons/ai";

type MobileNavigationMenu = {
    openMobileNavigationMenu:boolean
    setOpenMobileNavigationMenu:Dispatch<React.SetStateAction<boolean>>
    callbackAction:()=>void
}
/**
 * 
 * @param openMobileNavigationMenu 
 * @param setOpenMobileNavigationMenu 
 * @param callbackAction 
 * @returns 
 */
export default function MobileNavigationMenu({openMobileNavigationMenu, setOpenMobileNavigationMenu, callbackAction}:MobileNavigationMenu){
    const mobileMenuContainerModalRef = useRef(null) as RefObject<null>
    return(
        <PortalModal
            modalPosition="END"
            modalBlurClass={`backdrop-blur-md`}
            portalBgColorClass=""
            animationClass="animate-slide-in-right"
        >
                <section ref={mobileMenuContainerModalRef} className={`w-[380px] h-full flex flex-col justify-between p-5`}>
                    <div className="flex flex-col">
                        <div className="flex justify-end items-end">
                            <ButtonHinting 
                                buttonIcon={<VscClose/>}
                                buttonTitle="Close"
                                borderRadiusClass="rounded-2xl"
                                className="bg-gray-50 cursor-pointer"
                                callToActionFn={() => setOpenMobileNavigationMenu(false)}
                            />
                        </div>
                        <div className="flex items-center gap-3"><AiFillProduct fontSize={24}/> Products</div>
                    </div>
                    <div className="w-full flex flex-col items-center gap-2">
                        <ButtonMiscelleneous
                            buttonTitle="Book a demo"
                            buttonType="button"
                            widthClass="w-full"
                            className="rounded-3xl bg-black text-white h-10 font-semibold px-4"
                            callToActionFn={callbackAction}
                        />
                        <Link className="w-full flex justify-center items-center border rounded-4xl py-1.5 px-4" to={`https://core.academflow.com`} target="__blank"> Log in</Link>
                    </div>
                </section>
        </PortalModal>
    )
}