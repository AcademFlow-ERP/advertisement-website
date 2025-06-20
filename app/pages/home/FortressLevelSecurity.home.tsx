import { useState } from "react";
import RequestADemoForm from "~/components/RequestADemoForm.component";
import { ButtonMiscelleneous } from "~/components/buttons";
import academflowLogo from "~/academflowlogo.svg"
import { GrSecure } from "react-icons/gr";
import gdprLogo from "~/svgs/gdpr.logo.svg"
import { IoArrowForward } from "react-icons/io5";

export default function FortressLevelSecurityHome() {
  const [scheduleADemo, setScheduleADemo]=useState(false)
  return (
    <>
      <section className="w-full relative flex flex-col items-center justify-center py-5 px-5 md:p-10 lg:p-20 text-white">
        <div className="flex flex-col w-full justify-center items-center max-w-7xl min-3xs:max-sm:px-10 py-20 md:p-15 lg:p-20 gap-20 gradient-bg-security rounded-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6 pb-10 lg:pt-10">
              <div className="flex flex-col max-sm:items-center gap-5">
                  <h1 className="text-2xl max-sm:px-10 sm:text-4xl 3xs:font-poppins font-inter font-black 3xs:font-bold text-center md:text-start">Fortress Level Security</h1> 
                  <p className="2xs:text-xl max-sm:max-w-[20rem] max-w-4xl text-center md:text-start max-2xs:px-10">Protect your school data with our GDPR-compliant platform. We offer enterprise-grade security, multi-factor authentication, and continuous monitoring for uncompromising security.</p>
              </div>
              <div className="w-full flex gap-5 max-3xs:px-4">
                  <div className="flex flex-col flex-1 justify-center items-center bg-white p-3 min-3xs:p-6 rounded-4xl gap-10 w-1/2 min-3xs:min-w-40">
                      <img className="max-3xs:size-16" loading="lazy" src={gdprLogo} alt={`GDPR`} title="GDPR"/>
                      <span className="flex flex-col max-3xs:text-xs text-center text-black font-medium px-2"><b>GDPR</b> Compliant</span>
                  </div>
                  <div className="flex flex-col flex-1 justify-between items-center bg-white p-3 min-3xs:p-5 rounded-4xl gap-10 w-1/2 min-3xs:min-w-40">
                      <GrSecure fontSize={40} className="text-[#31859c] max-3xs:size-10"/>
                      <span className="flex flex-col max-3xs:text-xs text-center text-black font-medium px-2"><b>Multi-Factor</b> Auth</span>
                  </div>
              </div>
          </div>
          <div className="flex flex-col items-center justify-center pt-20 gap-8">
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex justify-center items-center">
                <div className="flex justify-center items-center size-14 rounded-full bg-gradient-to-r from-[#31859c] via-[#31859c] to-[#f495b7]">
                  <div className="flex items-center justify-center size-12 rounded-full bg-white">
                      <img className="size-8" src={academflowLogo}/>
                  </div>
                </div>
              </div>
                <h1 className="text-2xl 3xs:max-sm:text-3xl sm:text-4xl font-poppins font-bold text-center max-w-xl max-3xs:px-4">See how your school can work better with AcademFlow</h1> 
                <p className="text-base min-sm:text-xl max-w-[33rem] text-center px-4">I want a secured staff and student identity system, robust fee management solution and result system that works.</p>
            </div>
            <ButtonMiscelleneous
                buttonIcon={<IoArrowForward fontSize={24} className=" p-px bg-[#ffffff33] rounded-full"/>}
                buttonTitle="Schedule a Demo"
                buttonType="button"
                className="rounded-4xl bg-[#31859c] text-white h-14 font-semibold px-4"
                callToActionFn={()=>setScheduleADemo(true)}
              />
          </div>
        </div>
      </section>
      {/* Schedule a Demo Modal */}
      {scheduleADemo && <RequestADemoForm closeRequestADemoFormCallToAction={()=>setScheduleADemo(false)}/>}
    </>
  )
}

