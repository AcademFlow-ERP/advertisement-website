import type { ReactNode } from "react";
import { createPortal } from "react-dom"

type Props = {
    children?:ReactNode;
    portalHeight?:string;
    modalPosition?: 'CENTER' | 'END';
    modalShadow?:string;
    modalBlurClass?: string;
    portalBgColorClass?:string;
    animationClass?:string;
  }
  const AppModal = ({children, portalHeight, modalPosition, animationClass, modalBlurClass, portalBgColorClass, modalShadow }:Props) => {
    
    return(
        <div className={`fixed top-0 right-0 left-0 w-full h-screen z-40 flex ${modalPosition == `CENTER`? `justify-center`: modalPosition == `END` ? `justify-end`:`justify-center`} items-center ${modalBlurClass??''} ${portalBgColorClass??`bg-[#14141467]`}`}>
            <div className={`${animationClass??`animate-slide-in-up`} flex flex-col
                ${portalHeight?? `h-[95vh]`}
                ${modalShadow?? `nav_shadow`}
                overflow-y-auto overflow-x-hidden rounded-2xl bg-white ${modalPosition == `END` && `mr-5`}`}>
            {children}
          </div>
        </div>
    )
}
export const PortalModal = ({children, portalHeight, modalPosition, modalShadow, modalBlurClass, animationClass, portalBgColorClass}: Props) => {
    return createPortal(<AppModal children={children} portalHeight={portalHeight} animationClass={animationClass} modalBlurClass={modalBlurClass} modalPosition={modalPosition} modalShadow={modalShadow} portalBgColorClass={portalBgColorClass}/>, document.body)
}