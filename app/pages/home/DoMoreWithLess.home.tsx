import { useEffect, useState, type JSX } from "react"
import { BiNetworkChart } from "react-icons/bi"
import { FaBrain } from "react-icons/fa6"
import { GrOrganization } from "react-icons/gr"
import { PiHandshakeBold, PiStudent } from "react-icons/pi"
import { RiEmotionLaughLine, RiUserCommunityLine } from "react-icons/ri"
import { TbClockShield, TbRectangleVerticalFilled } from "react-icons/tb"
import { TfiBarChart } from "react-icons/tfi"

type AcademflowSuccess = {
    id: string;
    name: string;
    content: string;
    icon: JSX.Element;
    promises: string[];
}
const academflowPromiseCollectionSummary = [
    {
        id:"sense-of-connectedness",
        title:"sense of connectedness",
        icon:<RiUserCommunityLine fontSize={50}/>,
    },
    {
        id:"trust-and-security",
        title:"trust and security",
        icon:<PiHandshakeBold fontSize={50}/>,
    },
    {
        id:"happiness",
        title:"happiness",
        icon:<RiEmotionLaughLine fontSize={50}/>,
    },
    {
        id:"peace-of-mind",
        title:"Peace of mind",
        icon:<FaBrain fontSize={50}/>,
    }
]

// let counterIndex = 0
export default function DoMoreWithLessHome(){
    const academflowSuccessList:AcademflowSuccess[] = [
    {
        id:"unify-your-institution",
        name:"Unify Your Institution",
        content:"Foster a unified institution where everyone feels connected and engaged.",
        icon:<BiNetworkChart fontSize={50} className="max-sm:size-6 sm:max-md:size-8"/>,
        promises:[academflowPromiseCollectionSummary[0].id]
    },
    {
        id:"drive-parent-student-engagement",
        name:"Drive student engagement and success",
        content:"Enhance parents and students' engagement and boost success and happiness.",
        icon:<PiStudent fontSize={50} className="max-sm:size-6 sm:max-md:size-8"/>,
        promises:[academflowPromiseCollectionSummary[0].id, academflowPromiseCollectionSummary[2].id]
    },
    {
        id:"save-time-and-cost",
        name:"Save time and cost",
        content:"Simplify management processes to save time, cut costs, and bring peace of mind.",
        icon:<TbClockShield fontSize={50} className="max-sm:size-6 sm:max-md:size-8"/>,
        promises:[academflowPromiseCollectionSummary[2].id, academflowPromiseCollectionSummary[3].id]
    },
    {
        id:"elevate-your-institution-brand",
        name:"Elevate your institution brand",
        content:"Strengthen your brand by ensuring overall trust and security.",
        icon:<GrOrganization fontSize={50} className="max-sm:size-6 sm:max-md:size-8"/>,
        promises:[academflowPromiseCollectionSummary[1].id, academflowPromiseCollectionSummary[2].id]
    },
    {
        id:"grow-revenue",
        name:"Grow revenue",
        content:"Drive growth for overall ROI and happiness.",
        icon:<TfiBarChart fontSize={50} className="max-sm:size-6 sm:max-md:size-8"/>,
        promises:[academflowPromiseCollectionSummary[2].id, academflowPromiseCollectionSummary[3].id]
    },
    ]
    const [academflowSuccess, setAcademflowSuccess] = useState<AcademflowSuccess>(academflowSuccessList[0])
    useEffect(()=>{
        let counterIndex = 0
        setInterval(()=>{

            const theAcademflowSuccessList = academflowSuccessList
            counterIndex = counterIndex+1
            counterIndex  = counterIndex == (theAcademflowSuccessList.length) ? 0 : counterIndex

            const theAcademflowSuccess = theAcademflowSuccessList[counterIndex]
            setAcademflowSuccess(theAcademflowSuccess)
        }, 15000)
    },[])

    return(<section className="w-full relative flex flex-col items-center justify-center sm:p-15 text-[#31859c] bg-[#f6f6f6]">
        <div className="max-lg:w-full flex flex-col justify-center items-center max-w-7xl max-sm:py-20 px-5 py-5 gap-8">
            <h1 className="flex text-2xl 2xs:max-sm:text-3xl sm:text-4xl max-w-4xl font-inter 3xs:font-poppins font-black 3xs:font-bold text-center px-4 text-gray-700">With Academflow, Do More With Less.</h1> 
            <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
                <ul className="w-full lg:w-1/4 flex lg:flex-col text-gray-600 md:gap-5 overflow-x-auto overflow-y-hidden">
                    {
                        academflowSuccessList.map((item, index) =>(
                            <li onClick={()=>setAcademflowSuccess(item)} className={`relative md:max-lg:min-w-3xs flex max-md:flex-col max-md:justify-center max-md:min-w-[200px] flex-1 gap-2 items-center border-b-6 py-3 cursor-pointer px-4 ${academflowSuccess.id == item.id ? 'border-[#f495b7] text-[#f495b7]':' border-transparent'}`} key={item.id+index}>
                                <TbRectangleVerticalFilled  className={`absolute -bottom-[0.65rem] text-[#f495b7] ${academflowSuccess.id == item.id ? 'flex': 'hidden'}`}/>
                                <span>{item.icon}</span>
                                <span className="text-sm lg:text-lg max-md:text-center">{item.name}</span>
                            </li>
                        ))
                    }
                </ul>
                <div className="relative w-full sm:w-6/12 flex flex-col justify-center items-center bg-[#f6f6f6] max-lg:pt-5">
                    <div className="relative flex flex-col items-center border-6 border-white shadow-xl p-8">
                        <span className="text-lg font-bold max-w-xs text-center">{academflowSuccess.content}</span>
                    </div>
                    <div className="w-full flex absolute justify-center -bottom-[4.0rem] gap-20">
                        <div className="w-full flex border-r-6 lg:border-transparent border-white p-8"></div>
                        <div className="w-full flex border-l-6 lg:border-b-6 border-white p-8"></div>
                    </div>
                    <div className="w-full hidden lg:flex absolute justify-center -top-[4.0rem] gap-20">
                        <div className="w-1/2 flex border-r-6 border-t-6 p-8 border-transparent"></div>
                        <div className="w-1/2 flex border-l-6 border-t-6 border-white p-8"></div>
                    </div>
                </div>
                <div className="flex flex-row lg:flex-col flex-wrap justify-center items-center text-gray-600 gap-3 max-lg:border-t-6 lg:border-l-6 border-white max-lg:mt-8 max-lg:pt-8 lg:pl-10">
                    {
                        academflowPromiseCollectionSummary.map((item, index) =>(
                            <div className={`relative flex min-w-58 max-w-58 flex-1 flex-col lg:flex-row justify-center items-center border-2 rounded-4xl border-dashed`} key={item.id+index}>
                                <div className={`w-full flex flex-col gap-2 justify-center items-center z-1 py-3 px-4 rounded-4xl ${academflowSuccess.promises.includes(item.id)? 'bg-[#31859c] text-white': 'bg-white'}`}>
                                    <span>{item.icon}</span>
                                    <span className="capitalize font-medium text-center">{item.title}</span>
                                </div>
                                <div className={`absolute -top-10 h-10 flex border-r-6 border-white`}></div>
                                <div className={`absolute max-lg:hidden -left-5 rotate-90 h-14 flex border-white border-4`}></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>)
}