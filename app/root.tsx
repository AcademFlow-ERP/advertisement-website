import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router";
import { useEffect, useMemo, useRef, useState, type RefObject } from "react";
import RequestADemoForm from "./components/RequestADemoForm.component";
import { ButtonMiscelleneous, ButtonSelectModern } from "./components/buttons";
import type { Route } from "./+types/root";
import "./app.css";
import academflowLogo from "./academflowlogo.svg"
import { PiCopyright } from "react-icons/pi";
import { IoArrowForward, IoSunny } from "react-icons/io5";
import { GoChevronDown, GoMoon } from "react-icons/go";
import { MdAccessTime } from "react-icons/md";
import { LiaPhoneSolid } from "react-icons/lia";
import { LuNetwork } from "react-icons/lu";
import { HiArrowRight } from "react-icons/hi2";
import { exploreProductsCollections } from "~/datasource/exploreProductsCollections.data.json"
import { useCloseOnOutsideClicks } from "./hooks";
import { IsBusyIcon } from "./icons";
import { VscMenu } from "react-icons/vsc";
import MobileNavigationMenu from "./components/MobileNavigationMenu.component";

type NavLinkHeader = {
  title: string
  subTitle: string
  navMenuOptions: typeof exploreProductsCollections
}
const themeTypes = [
  {
    id: "lightTheme",
    name: "Light",
    icon: <IoSunny />,
  },
  {
    id: "darkTheme",
    name: "Dark",
    icon: <GoMoon/>,
  },
]

export const links: Route.LinksFunction = () => [
  { rel: "icon", type:"image/svg+xml", href: "/academflowlogo.svg" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel:"stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
  },
  {
    rel:"stylesheet",
    href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  }
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

/**
 * App Logo
 * @returns 
 */
const LogoFactory = () => {
  const navigate = useNavigate()
  return(
    <div role="button" onClick={()=>navigate(`/`)} className="flex gap-2 items-center text-[#31859c] dark:text-white font-poppins cursor-pointer">
      <img className="size-7 min-3xl:size-10" alt="AcademFlow logo" src={academflowLogo} about="AcademFlow Logo" title="AcademFlow Logo"/>
      <div className="flex flex-col -space-y-2">
        <div className="flex items-baseline">
          <span className="font-extrabold min-3xl:text-xl"><span className="text-xl min-3xl:text-2xl">{`Academ`.charAt(0)}</span>{`cadem`}</span>
          <span className="min-3xl:text-xl text-[#f495b7]">Flow</span>
        </div>
        <span className="flex justify-start text-[0.60rem]">stay secured</span>
      </div>
    </div>
  )
}

/**
 * 
 * @param title 
 * @param subTitle 
 * @param navMenuOptions 
 * @returns 
 */
const NavLinkHeader = ({title, subTitle, navMenuOptions}:NavLinkHeader) => {
  const { key } = useLocation()
  const navMenuContainerModalRef = useRef(null) as RefObject<null>
  const [openNavMenu, setOpenNavMenu ] = useState(false)
  const [onHoverProduct, setOnHoverProduct ] = useState<typeof navMenuOptions[0]>(navMenuOptions[0])
  const openNavMenuOptions = () => {
    setOpenNavMenu((openNavMenu) => !openNavMenu)
    return
  }

  //Close Menu on clicking outside
  useCloseOnOutsideClicks(navMenuContainerModalRef, ()=>setOpenNavMenu(false))
  //Close menu on page change detections
  useMemo(() => key && setOpenNavMenu(false),[key])
  return(
    <div ref={navMenuContainerModalRef} className="relative flex flex-col justify-center font-inter">
      <button title={title} type="button" onClick={openNavMenuOptions} className="flex justify-center items-center gap-1 cursor-pointer outline-none">
          <span>{title}</span><GoChevronDown className={openNavMenu?`transition-all rotate-180`:``}/>
      </button>
      {
        navMenuOptions.length > 0 &&
        <fieldset className={openNavMenu ?`absolute animate-slide-in-up top-10 shadow-2xl flex place-self-center flex-col gap-1 bg-white p-20 rounded-3xl`:`hidden`}>
          <div className="flex items-center justify-between gap-10">
            {/* List of academflow products */}
            <div className="flex flex-col gap-3">
              <span className="uppercase text-xs font-poppins">{subTitle}</span>
              <ul className="min-w-[20rem] flex flex-col gap-1 border-t border-gray-100 py-5">
                {/* //Single Product */}
                {
                  navMenuOptions.map((option, index)=>(
                      <NavLink onMouseEnter={()=>setOnHoverProduct(option)} to={option.pathLink} key={option.id+index} className={`flex items-center transition-all p-2.5 rounded-2xl gap-4 cursor-pointer ${onHoverProduct.id == option.id ? `bg-[#fef7eb]`:`hover:bg-[#fef7eb]`}`}>
                        <span style={{background: option.backgroundColor}} className="flex p-3 rounded-2xl"><LuNetwork fontSize={24}/></span>
                        <div className="flex flex-col gap-1">
                          <h4 className="whitespace-nowrap font-semibold">{option.softwareName} 
                            <span className={index == 1 ? `px-2 py-1 bg-[#f57848] text-[0.65rem] rounded-2xl`:`hidden`}>Beta</span>
                          </h4>
                          <p className="text-xs text-gray-500">{option.subTitle}</p>
                        </div>
                      </NavLink>
                  ))
                }
              </ul>
            </div>
            <NavLink style={{background:`${onHoverProduct.backgroundColor}`}} to={onHoverProduct.pathLink} className="flex transition-all flex-col w-[16rem] hover:bg-[#b1d8fc] rounded-3xl justify-between p-7 gap-10 font-bold">
              <div className="flex items-center justify-center size-12 shadow-xl ring-4 ring-white rounded-3xl ">
                  <img className="size-6" src={academflowLogo}/>
              </div>
              <p>{onHoverProduct.subTitle}</p>
              <span className="flex items-center gap-1 text-sm underline underline-offset-6 cursor-pointer">Learn More <HiArrowRight/></span>
            </NavLink>
          </div>
        </fieldset>
      }
    </div>
  )
}

export default function App() {
  const fetcher = useFetcher()
  const navigation = useNavigation()
  const { key } = useLocation()
  //Mobile Navigation menu
  const [openMobileNavigationMenu, setOpenMobileNavigationMenu]=useState(false)
  //Request a demo form state
  const [scheduleADemo, setScheduleADemo]=useState(false)
  /**Begins: Change App Theme background and colors */
  const [isActiveThemeSkin, setIsActiveThemeSkin] = useState(themeTypes[0].id)
  const [dateOfTheYear, setDateOfTheYear] = useState("")
  //Global Loading state
  const appIsBusy = useMemo(() => navigation.state === 'loading' 
      ? true 
      : fetcher.state === 'loading' 
          ? true 
          : navigation.state == 'submitting' 
              ? true 
              : fetcher.state == 'submitting'
                  ? true : false,[fetcher.state, navigation.state])
  useEffect(()=>{
    if(typeof window !== `undefined`){
      //App current skin
      const skinTheme:string = localStorage && localStorage.theme ? localStorage.theme : themeTypes[0].id
      setIsActiveThemeSkin(skinTheme)
      //Date and time
      const theDateOfTheYear = new Date().getFullYear()
      setDateOfTheYear(`${theDateOfTheYear}`)
      return
    }
  },[])
  /**
   * 
   * @returns
   */
  const activateThemeSkin = () => {
    const rootDocumentClass = document.documentElement.classList;
    if (isActiveThemeSkin === "lightTheme") {
      rootDocumentClass.add("dark");
      rootDocumentClass.remove("light");
    } else {
      rootDocumentClass.remove("dark");
      rootDocumentClass.add("light");
    }
  };
  /**
   * Change app theme color
   * @param theme 
   */
  const changeThemeSkinCallback = (theme: { id: string }) => {
    localStorage.theme = theme.id;
    setIsActiveThemeSkin(theme.id)
    activateThemeSkin();
  };
  /**Ends: Change App Theme background and colors */
    //Close menu on page change detections
  useMemo(() => key && setOpenMobileNavigationMenu(false),[key])

  return(
    <main className="font-inter w-full min-h-screen text-black overflow-auto">
      <span className={`${appIsBusy ? 'fixed':'hidden'} z-40 right-3 top-2 text-[#31859c]`}><IsBusyIcon/></span>
      <header className="w-full flex justify-center h-20 z-10 fixed top-0 bg-[#ffffff3a] backdrop-blur-xl">
        <div className="flex w-full justify-between items-center max-w-7xl p-5">
          <div className="w-1/2 flex items-center justify-between">
            <LogoFactory/>
            <nav className="flex gap-5 max-xl:hidden">
              <NavLinkHeader
                title="Products"
                subTitle="Better school management; Think Academflow!"
                navMenuOptions={exploreProductsCollections}
              />
              <div>Contact us</div>
            </nav>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-5 max-sm:hidden">
              <ButtonMiscelleneous
                buttonIcon={<IoArrowForward fontSize={24} className=" p-px bg-[#ffffff33] rounded-full"/>}
                buttonTitle="Book a demo"
                buttonType="button"
                className="rounded-3xl bg-[#31859c] text-white h-12 font-semibold px-4"
                callToActionFn={()=>setScheduleADemo(true)}
              />
              <Link className="whitespace-nowrap" to={`https://core.academflow.com`} target="__blank"> Log in</Link>
            </div>
            <VscMenu onClick={()=> setOpenMobileNavigationMenu(true)} className="cursor-pointer xl:hidden" fontSize={24}/>
          </div>
        </div>
      </header>
      {/* Mobile Navigation Menu*/}
      {openMobileNavigationMenu && 
        <MobileNavigationMenu 
          setOpenMobileNavigationMenu={setOpenMobileNavigationMenu}
          callbackAction={()=>setScheduleADemo(true)}
        />}
      {/* Schedule a Demo Modal */}
      {scheduleADemo && <RequestADemoForm closeRequestADemoFormCallToAction={()=>setScheduleADemo(false)}/>}
      <Outlet />
      <footer className="w-full flex flex-col justify-center items-center font-normal bg-white text-gray-600 font-sans">
        <section className="w-full flex flex-row flex-wrap gap-10 max-w-7xl px-5 py-20">
            <div className="w-6/12 min-w-3xs flex flex-1 flex-col gap-4">
              <LogoFactory/>
              {/* <p className="text-gray-400">Better school management solution that works; Think AcademFlow.</p> */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <span className="font-bold">Service</span>
                  <span className="font-bold">Monday to Friday</span>
                  <div className="flex flex-col gap-2 pt-1.5 font-medium">
                    <div className="flex gap-1 whitespace-nowrap"><MdAccessTime fontSize={24}/><span>6h to 23h</span></div>
                    <div className="flex gap-1 whitespace-nowrap"><LiaPhoneSolid fontSize={24}/><span>(+234) 8131337637</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-6/12 min-w-3xs flex flex-1 flex-col gap-4">
                <span className="font-bold text-lg">Products</span>
                <ul className="flex flex-col gap-2 font-medium">
                  <li>AcademFlow Core</li>
                  <li>AcademFlow Pay</li>
                  <li>AcademFlow Result</li>
                  <li>Communication Book</li>
                </ul>
            </div>
            <div className="w-6/12 min-w-3xs flex flex-1 flex-col gap-4">
                <span className="font-bold text-lg">Help center</span>
                <ul className="flex flex-col gap-2 font-medium">
                  <li>Facebook</li>
                  <li>LinkedIn</li>
                  <li>Twitter</li>
                  <li>Contact us</li>
                </ul>
            </div>
            <div className="w-6/12 min-w-3xs flex flex-1 flex-col gap-4">
                <span className="font-bold text-lg">Legals</span>
                <ul className="flex flex-col gap-2 font-medium">
                  <li>Terms of service</li>
                  <li>Privacy Policy</li>
                </ul>
            </div>
        </section>
        <div>
          <p className="w-full text-[#98abac] max-w-5xl p-5 font-medium leading-5 flex justify-center items-center text-xs text-center md:text-start">AcademFlow is an educational service technology designed and developed by Taacodeep Technologies. Taacodeep Technologies is duly registered with the Nigerian Corporate Affairs Commission. The AcademFlow trademarks and all the copyrights are wholly owned by Taacodeep Technologies.</p>
        </div>
        <section className="flex w-full max-2xs:flex-col justify-center items-center max-w-7xl border-t border-gray-100 p-5 gap-5 text-xs text-[#98abac]">
          <div className="flex items-center whitespace-nowrap"><PiCopyright /> {dateOfTheYear} AcademFlow | All rights reserved</div>
          <ButtonSelectModern
            optionLists={themeTypes}
            activeOptionID={isActiveThemeSkin}
            selectActionCallbackFn={changeThemeSkinCallback}
            disabled={true}
          />
        </section>
      </footer>
    </main>);
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
