import { useMemo, useState } from "react"
import { useNavigate, useNavigation } from "react-router"
import { CgRadioChecked } from "react-icons/cg"
import { IoArrowForward } from "react-icons/io5"
import { ButtonMiscelleneous } from "~/components/buttons"
import { exploreProductsCollections } from "~/datasource/exploreProductsCollections.data.json"
import { IsBusyIcon } from "~/icons"
import { GoChevronRight, GoDotFill } from "react-icons/go"

export default function ExploreProductsHome(){
    const navigate = useNavigate()
    const navigation = useNavigation()
    const [refreshKey, setRefreshKey] = useState(0)
    const [activeExploreProduct, setActiveExploreProduct] = useState<typeof exploreProductsCollections[0]>(exploreProductsCollections[0])
      //Navigation Loading state
        const navigationIsBusy = useMemo(() => navigation.state === 'loading' 
            ? true 
                : navigation.state == 'submitting' 
                    ? true: false,[navigation.state])
    
    /**
     * 
     * @param product 
     * @returns 
     */
    const activeProductCallToAction = (product: typeof exploreProductsCollections[0]) => {
        setActiveExploreProduct(product)
        setRefreshKey(refreshKey=>refreshKey+1)
        return
    }

    return(<section className="w-full relative flex flex-col items-center justify-center p-5 xl:p-15 text-[#31859c]">
        <div className="w-full flex flex-col justify-center items-center max-w-7xl max-sm:px-0 px-10 md:max-lg:px-5 py-5 xl:gap-5 gap-10">
          <h1 className="text-2xl 2xs:max-sm:text-3xl sm:text-4xl max-w-2xl font-inter 3xs:font-poppins font-black 3xs:font-bold text-center text-gray-700">All-in-One Software, All School Management Processes Simplified.</h1> 
          <div className="w-full relative flex flex-col xl:flex-row max-xl:justify-center items-center p-2.5 min-3xs:p-10 md:max-lg:px-2 gap-10 xl:gap-20 text-gray-700 xl:text-gray-500 max-xl:bg-[#e3ecfa] max-xl:rounded-4xl">
            <nav className="max-xl:w-full flex flex-col gap-3 bg-white max-md:bg-transparent rounded-4xl py-2 px-2.5">
                <div className="flex whitespace-normal absolute top-10 text-2xl max-w-[10rem] font-bold text-gray-600 max-xl:hidden">Explore Core Products</div>
                <ul className="flex max-xl:justify-between md:max-xl:items-center font-medium max-md:font-semibold max-md:flex-col xl:flex-col xl:text-lg xl:font-semibold gap-5 md:gap-3">
                    {
                        exploreProductsCollections.map((product, index) =>(
                        <div className="flex flex-col" key={product.id+index}>
                            <li onClick={()=>activeProductCallToAction(product)} className={`flex max-md:border max-md:bg-white border-black max-md:justify-between max-md:px-4 max-md:rounded-4xl items-center gap-2 capitalize py-1 max-md:py-2 cursor-pointer whitespace-nowrap ${activeExploreProduct.id === product.id ? `md:max-xl:bg-black md:max-xl:text-white rounded-4xl md:max-xl:px-4`:`bg-transparent`}`} key={product.id+index}>{activeExploreProduct.id === product.id ? <CgRadioChecked fontSize={26} className="text-[#31859c] max-xl:hidden"/> : <GoDotFill fontSize={26} className="fill-slate-400 max-xl:hidden"/>} {product.softwareName} <GoChevronRight className={`md:hidden transition-all ${product.id == activeExploreProduct.id ? `rotate-90`:``}`} fontSize={24}/></li>
                            <div className={`w-full animate-slide-in-up md:hidden py-8 3xs:px-3 ${product.id == activeExploreProduct.id ? `flex flex-col`:`hidden`}`}>
                                <div className="bg-white 3xs:p-5 3xs:mt-5 rounded-4xl shadow-xl">
                                    <img loading="lazy" src={product.imageUrl} alt={product.subTitle}/>
                                </div>
                                <div className="flex flex-col gap-4 py-8">
                                    <h4 className="uppercase text-sm font-semibold text-gray-400">{product.title}</h4>
                                    <h1 className="text-2xl 3xs:text-3xl font-bold text-gray-800 xl:text-gray-600">{product.subTitle}</h1>
                                    <p className="max-3xs:text-sm">{product.content}</p>
                                    <ButtonMiscelleneous
                                        buttonIcon={navigationIsBusy ? <IsBusyIcon/> :<IoArrowForward fontSize={24} className=" p-px bg-[#ffffff33] rounded-full"/>}
                                        buttonTitle="Learn more"
                                        buttonType="button"
                                        className="rounded-4xl bg-[#31859c] text-white font-semibold px-4"
                                        callToActionFn={()=>navigate(product.pathLink)}
                                    />
                                </div>
                            </div>
                        </div>))
                    }
                </ul>
            </nav>
            <div key={`${refreshKey}`} className="w-full max-md:hidden animate-slide-in-right flex flex-col lg:max-xl:flex-row gap-4 xl:bg-[#f6f6f6] px-5 xl:p-20 rounded-4xl max-xl:pb-10 md:max-lg:px-10">
                <div className="flex flex-col gap-4">
                    <h4 className="uppercase text-sm font-semibold text-gray-400">{activeExploreProduct.title}</h4>
                    <h1 className="text-3xl font-bold text-gray-800 xl:text-gray-600">{activeExploreProduct.subTitle}</h1>
                    <p>{activeExploreProduct.content}</p>
                    <ButtonMiscelleneous
                        buttonIcon={navigationIsBusy ? <IsBusyIcon/> :<IoArrowForward fontSize={24} className=" p-px bg-[#ffffff33] rounded-full"/>}
                        buttonTitle="Learn more"
                        buttonType="button"
                        className="rounded-4xl bg-[#31859c] text-white font-semibold px-4"
                        callToActionFn={()=>navigate(activeExploreProduct.pathLink)}
                        />
                </div>
                <div className="xl:border-t border-gray-300">
                    <div className="bg-white p-5 mt-5 rounded-4xl">
                        <img loading="lazy" src={activeExploreProduct.imageUrl} alt={activeExploreProduct.subTitle}/>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </section>)
}