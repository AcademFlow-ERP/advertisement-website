import { useState } from "react"
import { GoArrowRight } from "react-icons/go"
import type { ProductFeature } from "~/types/types.index"

type ExploreProductFeaturesWidget = {
    productFeatureCollections:ProductFeature[]
    softwareName:string
    productFeatureCollectionsDescription:string
}
export default function ExploreProductFeaturesWidget({productFeatureCollections, softwareName, productFeatureCollectionsDescription}:ExploreProductFeaturesWidget){
        const [activeFeature, setActiveFeature] = useState(productFeatureCollections[0])
        const [refreshKey, setRefreshKey] = useState(1)

        /**
         * 
         * @param feature 
         * @returns 
         */
        const activeProductFeatureCallToAction = (feature: typeof productFeatureCollections[0]) => {
            setActiveFeature(feature)
            setRefreshKey(refreshKey=>refreshKey+1)
            return
        }
    return(
        <section className="w-full relative flex flex-col items-center justify-center max-sm:px-0 lg:max-xl:px-5 p-15 text-[#31859c]">
            <div className="flex flex-col justify-center items-center max-w-7xl lg:max-xl:px-0 px-5 py-5 gap-5">
                <div className="flex flex-col gap-1 sm:gap-5">
                    <h4 className="text-base sm:text-xl max-w-4xl font-poppins font-medium text-center text-gray-400">{softwareName}</h4> 
                    <h1 className="text-2xl sm:text-4xl max-w-4xl font-poppins font-bold text-center capitalize text-gray-800">{productFeatureCollectionsDescription}</h1> 
                </div>
                <div className="w-full relative flex flex-col lg:flex-row items-center py-10 xl:px-10 gap-2 xl:gap-16 text-gray-600">
                    <nav className="w-full lg:w-1/2 flex flex-col">
                        <ul className="w-full flex flex-col text-xl font-bold gap-3">
                            {
                                productFeatureCollections.map((product, index) =>(
                                    <li onClick={()=> activeProductFeatureCallToAction(product)} className="w-full flex flex-col py-1 text-gray-400 cursor-pointer transition-all gap-5" key={product.id+index}>
                                        <span className={`flex justify-between items-center xl:gap-10 whitespace-nowrap capitalize px-4 ${activeFeature.id === product.id ?`text-gray-900`:``}`}>{product.name} {activeFeature.id === product.id ? <GoArrowRight  fontSize={26} className="text-[#31859c]"/> : <GoArrowRight  fontSize={20} className="transition-all delay-150 rotate-90"/>}</span>
                                        
                                        <div style={{background:`${activeFeature.backgroundColor}`}} className={activeFeature.id === product.id ? `flex flex-col gap-5 font-normal animate-slide-in-up text-base p-10 lg:p-5 rounded-3xl text-gray-800`:`hidden`}>
                                            <div key={`${refreshKey}`} style={{background:`${activeFeature.backgroundColor}`}} className={`lg:hidden`}>
                                            <img loading="lazy" src={activeFeature.imageUrl} alt={activeFeature.subTitle}/>
                                            </div>
                                            {activeFeature.summary}
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <div key={`${refreshKey}`} style={{background:`${activeFeature.backgroundColor}`}} className="max-lg:hidden animate-slide-in-right min-w-lg flex flex-col gap-4 lg:max-xl:p-5 p-10 rounded-4xl">
                        <img loading="lazy" src={activeFeature.imageUrl} alt={activeFeature.subTitle}/>
                    </div>
                </div>
            </div>
        </section>
    )
}