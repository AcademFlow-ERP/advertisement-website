import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { ButtonMiscelleneous } from "~/components/buttons";
import RequestADemoForm from "~/components/RequestADemoForm.component";

export default function WelcomeHome() {
  const [scheduleADemo, setScheduleADemo]=useState(false)
  return (
    <>
      <section className="w-full [--background-width:308.4%] text-[#31859c] lg:[--background-width:198.96%] [background:radial-gradient(var(--background-width)_100%_at_50%_0%,_#FFF_6.32%,_#e0fdff_29.28%,_#f8ebe1_68.68%,_#FFF_100%)] lg:pt-30 relative flex flex-col items-center justify-center max-sm:px-5 p-20">
        <div className="flex flex-col w-full justify-center items-center max-w-7xl px-5 py-10 gap-10">
          <div className="flex flex-col items-center gap-5">
            <p className="flex font-medium text-sm sm:text-lg px-2 border rounded-3xl text-black text-center">The Most Modern Education Management Solution.</p>
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl sm:text-5xl max-w-4xl font-poppins font-bold text-center">Simplify Your School Management Functions in One intuitive Platform.</h1> 
              <p className="font-medium text-lg text-center">Manage schools with unmatched <b>scale</b>, <b>security</b>, <b>performance</b> and <b>ease of use.</b></p>
            </div>
          </div>
          <ButtonMiscelleneous
              buttonIcon={<IoArrowForward fontSize={24} className=" p-px bg-[#ffffff33] rounded-full"/>}
              buttonTitle="Request a demo"
              buttonType="button"
              className="rounded-4xl bg-black text-white h-14 font-semibold px-4"
              callToActionFn={()=>setScheduleADemo(true)}
            />
        </div>
        <div className="from-white via-white bg-gradient-to-r to-[#ffffffaf] p-5 sm:p-10 rounded-4xl shadow z-[1] backdrop-blur-sm">
          <img className="shadow" loading="lazy" src={`https://res.cloudinary.com/dfbfpnvfb/image/upload/v1742453605/student_performance_subject_analysis_pkdz95.png`} alt="academflow result processor dashboard"/>
        </div>
        <div className="absolute mx-sm:left-2 size-12 max-sm:bottom-16 md:right-10 md:size-24 rounded-full bg-conic-180 from-[#31859c] via-indigo-50 to-[#31859c]"></div>
      </section>
      {/* Schedule a Demo Modal */}
      {scheduleADemo && <RequestADemoForm closeRequestADemoFormCallToAction={()=>setScheduleADemo(false)}/>}
    </>
  );
}

