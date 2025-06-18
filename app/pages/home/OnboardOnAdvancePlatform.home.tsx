import { AiOutlineSafetyCertificate } from "react-icons/ai"
import { FaBuildingUser, FaRegFaceSmileBeam } from "react-icons/fa6"
import { LiaNetworkWiredSolid } from "react-icons/lia"
import { PiCloudCheck, PiDesktopTower } from "react-icons/pi"
import { TbPresentationAnalytics, TbViewportWide } from "react-icons/tb"

const academflowAdvanceArchecturalStructures = [

    {
        id:"robust-security",
        title:"Iron-clad Security",
        icon:<AiOutlineSafetyCertificate  fontSize={30}/>,
    },
    {
        id:"cloud-native",
        title:"Cloud native",
        icon:<PiCloudCheck fontSize={30}/>,
    },
    {
        id:"data-analytics",
        title:"Decision aid/Analytics",
        icon:<TbPresentationAnalytics fontSize={30}/>,
    },
    {
        id:"massive-scalability",
        title:"Massive scalability",
        icon:<TbViewportWide fontSize={30}/>,
    },
    {
        id:"multi-capability",
        title:"Multi-Capabilities",
        icon:<PiDesktopTower fontSize={30}/>,
    },
    {
        id:"extreme-user-friendly",
        title:"Extreme User-friendly",
        icon:<FaRegFaceSmileBeam fontSize={30}/>,
    },
    {
        id:"unified-design",
        title:"Unified",
        icon:<LiaNetworkWiredSolid fontSize={30}/>,
    },
    {
        id:"dedicated-customer-support",
        title:"Dedicated customer support",
        icon:<FaBuildingUser fontSize={30}/>,
    },
]
//bg-[#00729c]
export default function OnboardOnAdvancePlatformHome(){
    return(
        <>
            <section className="w-full relative flex flex-col items-center justify-center max-sm:px-10 p-20 text-[#31859c] bg-[#f6f6f6]">
                <div className="w-full flex flex-col justify-center items-center max-w-7xl px-5 py-5 gap-10">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h1 className="text-3xl sm:text-4xl max-w-4xl font-poppins font-bold text-center">Onboard an Advanced Technology Platform.</h1> 
                        <p className="text-lg max-w-[42rem] font-inter font-medium text-gray-600 text-center">Academflow is a focus on scalability, security, reliability, performance and ease of use; fostering your school digital transformations to the core.</p> 
                    </div>
                    <div className="w-full max-w-3xl flex flex-wrap justify-center gap-3">
                        {
                            academflowAdvanceArchecturalStructures.map(({id, title, icon}, index) => (
                                <div className="w-full min-w-[10rem] flex flex-col flex-1 bg-white rounded-3xl justify-center transition-all items-center p-5 hover:shadow-2xl" key={id+index}>
                                    <span className="bg-[#31859c] text-white p-2.5 rounded-full">{icon}</span>
                                    <span className="text-center">{title}</span>
                                </div>
                            ))
                        }
                    </div>
                    
                </div>
            </section>
        </>
    )
}