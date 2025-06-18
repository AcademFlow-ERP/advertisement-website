import { useRef, useState, type Dispatch, type RefObject } from "react";
import { Link, NavLink } from "react-router";
import { PortalModal } from "~/portal/portal.index";
import { ButtonHinting, ButtonMiscelleneous } from "./buttons";
import { VscClose } from "react-icons/vsc";
import { AiFillProduct, AiOutlineProduct } from "react-icons/ai";
import { exploreProductsCollections } from "~/datasource/exploreProductsCollections.data.json"
import { BsArrowReturnRight } from "react-icons/bs";
import { GrContact } from "react-icons/gr";
import { HiChevronUp } from "react-icons/hi2";

type MobileNavigationMenu = {
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
export default function MobileNavigationMenu({setOpenMobileNavigationMenu, callbackAction}:MobileNavigationMenu){
    const mobileMenuContainerModalRef = useRef(null) as RefObject<null>
    const [openMenu, setOpenMenu] = useState(false)
    return(
        <PortalModal
            modalPosition="END"
            modalBlurClass={`backdrop-blur-md`}
            portalBgColorClass=""
            animationClass="max-3xs:w-full animate-slide-in-up 3xs:animate-slide-in-right"
        >
                <section ref={mobileMenuContainerModalRef} className={`w-full 3xs:w-[380px] h-full flex flex-col justify-between p-5`}>
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-end items-end">
                            <ButtonHinting 
                                buttonIcon={<VscClose/>}
                                buttonTitle="Close"
                                borderRadiusClass="rounded-2xl"
                                className="bg-gray-50 cursor-pointer"
                                callToActionFn={() => setOpenMobileNavigationMenu(false)}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div onClick={()=> setOpenMenu((openMenu) =>!openMenu)} role="button" className="flex items-center gap-3 px-2 cursor-pointer">
                                <AiOutlineProduct fontSize={24}/> 
                                <span>Products</span>
                                <HiChevronUp className={openMenu ? ``:`transition-all rotate-180`}/>
                            </div>
                            <ul className={`${openMenu?`flex`:`hidden`} flex-col px-px transition-all animate-slide-in-up`}>
                                {
                                    exploreProductsCollections.map((option, index)=>(
                                        <NavLink to={option.pathLink} key={option.id+index} className={`flex items-center transition-all rounded-2xl gap-1 cursor-pointer hover:bg-[#fef7eb] px-4 py-2.5`}>
                                        <span><BsArrowReturnRight fontSize={20}/></span>
                                        <div className="flex flex-col gap-1">
                                            <h4 className="whitespace-nowrap font-semibold">{option.softwareName} 
                                            <span className={index == 1 ? `px-2 py-1 bg-[#f57848] text-[0.65rem] rounded-2xl`:`hidden`}>Beta</span>
                                            </h4>
                                        </div>
                                        </NavLink>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="flex flex-col transition-all gap-3 delay-300 bg-white">
                            <div className="flex items-center gap-3 px-2">
                                <GrContact fontSize={24}/> 
                                <span>Contact us</span>
                            </div>
                        </div>
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