import { MdRectangle } from "react-icons/md"

const academflowPromisesCollection = [
    {
        id:"better-engagement",
        name:"Better Engagement",
        title:"We help educational institutions to Engage Better with the parents, students and employees to drive purposeful growth."
    },
    {
        id:"better-operation",
        name:"Better Operation",
        title:"We eliminate silos and optimize operations. Our solution connects with other microservices to give you a single operation hub."
    },
    {
        id:"better-technology",
        name:"Better Technology",
        title:"Better Technology that helps educational institutions to streamline their management processes for high productivity and security."
    },
    {
        id:"better-transformation",
        name:"Better Transformation",
        title:"We enable educational institutions to Transform Better to have complete control over students' activities, and tackle modern day educational challenges and dynamics."
    },
]
export default function AcademflowPromisesHome(){
    return(
        <section className="w-full relative flex flex-col items-center justify-center p-5 3xs:p-15 text-[#31859c] bg-[#f6f6f6]">
            <div className="w-full flex flex-col justify-center items-center max-w-7xl 3xs:px-5 py-5 gap-10">
                <div className="w-full flex flex-col justify-center items-center gap-5">
                    <h1 className="flex text-2xl 2xs:max-sm:text-3xl sm:text-4xl max-w-4xl font-inter 3xs:font-poppins font-black 3xs:font-bold text-center text-gray-700">The Academflow Promise.</h1> 
                    <h1 className="text-lg 3xs:text-2xl max-w-2xl font-inter font-bold text-gray-900 text-center">Four Ways in which Academflow is <span>inspiring better education management solution - </span> Our Promise</h1> 
                </div>
                <div className="w-full flex flex-row justify-center flex-wrap gap-5 max-w-4xl">
                    {
                        academflowPromisesCollection.map(({id, title, name}, index) => (
                            <div className="w-full flex flex-1 max-xs:max-w-[20rem] min-xs:min-w-[19rem] min-xs:max-w-sm gap-5 items-center text-white bg-[#31859c] p-5 rounded-4xl" key={index+id}>
                                <span><MdRectangle fontSize={24} className="shadow-2xl"/></span>
                                <div className="flex flex-col gap-2">
                                    <h1 className="uppercase text-sm font-extrabold">{name}</h1>
                                    <p className="text-xs">{title}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <img className="w-[70%]" loading="lazy" src={`https://res.cloudinary.com/dfbfpnvfb/image/upload/v1742779625/academflow_promise2_pdabnb.png`} />
            </div>
        </section>
    )
}