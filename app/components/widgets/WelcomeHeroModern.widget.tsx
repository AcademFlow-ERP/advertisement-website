import { IoArrowForward } from "react-icons/io5";
import { ButtonMiscelleneous } from "../buttons";
import { useState } from "react";
import RequestADemoForm from "../RequestADemoForm.component";

type WelcomeHeroModernWidget = {
    softwareServiceName?:string
    title:string
    description:string
    displayImageUrl:string
    callToActionButtonTitle:string
}
export default function WelcomeHeroModernWidget({softwareServiceName, title, description, callToActionButtonTitle, displayImageUrl}:WelcomeHeroModernWidget){
    const [scheduleADemo, setScheduleADemo]=useState(false)
    return(
      <>
            <section className="w-full relative flex flex-col items-center justify-center gradient-bg-header py-20 text-[#31859c] gap-10">
              <div className="w-full flex flex-col max-lg:flex-col-reverse lg:flex-row justify-center items-center px-5 3xs:max-xl:px-10 xl:px-20 py-8 3xs:py-20 gap-10 animate-slide-in-up">
                <div className="w-full flex flex-col max-lg:items-center gap-8">
                  <div className="flex flex-col gap-3 max-lg:items-center">
                    <h1 className={softwareServiceName ? `text-sm font-poppins font-bold text-gray-500 uppercase`:`hidden`}>{softwareServiceName}</h1> 
                    <h1 className="text-2xl sm:text-[2.7rem] leading-tight font-poppins font-extrabold 3xs:font-bold capitalize max-lg:text-center">{title}</h1> 
                    <p className="font-medium text-base 3xs:text-lg max-w-xl py-2 max-lg:text-center">{description}</p>
                  </div>
                  <ButtonMiscelleneous
                      buttonIcon={<IoArrowForward fontSize={24} className=" p-px bg-[#ffffff33] rounded-full"/>}
                      buttonTitle={callToActionButtonTitle}
                      buttonType="button"
                      className="rounded-4xl bg-black text-white h-14 font-semibold px-4"
                      callToActionFn={()=>setScheduleADemo(true)}
                    />
                </div>
                <div className="w-full lg:max-xl:min-w-xl xl:min-w-2xl from-white via-white bg-gradient-to-r to-[#ffffffaf] p-2 3xs:p-5 lg:p-10 shadow z-[1] backdrop-blur">
                  <img className="shadow object-contain object-center" loading="lazy" src={displayImageUrl} alt={title} title={title}/>
                </div>
                <div className="absolute max-lg:left-4 size-10 3xs:size-14 max-lg:top-24 lg:right-12 lg:size-20 lg:bottom-40 rounded-2xl bg-conic-180 from-[#31859c] via-indigo-50 to-[#31859c]"></div>
              </div>
            </section>
            {/* Schedule a Demo Modal */}
            {scheduleADemo && <RequestADemoForm closeRequestADemoFormCallToAction={()=>setScheduleADemo(false)}/>}
      </>
    )
}