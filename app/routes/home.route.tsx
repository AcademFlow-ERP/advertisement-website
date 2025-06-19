import { AcademflowPromisesHome, DoMoreWithLessHome, ExploreProductsHome, FortressLevelSecurityHome, OnboardOnAdvancePlatformHome, WelcomeHome } from "~/pages/home";
import type { Route } from "./+types/home.route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Academflow | All-in-One School Management Platform | The Most Modern School Management Software for Smart Schools" },
    { name: "description", content: "Academflow simplifies school management processes in one modern powerful platform that leaves nothing out of the cycle. Cloud based, intuitive and secure - handle students' information system, disciplinary management, staff user's data system, fee payments and management system, result processing and communication." },
    { name: "theme-color", content: "#31859c"},
    { property: "og:title", content: "All-in-One School Management Software | Modern, Cloud based, Intuitive and Secure Management Solution for Smart Schools" },
    { property: "og:description", content: "Enterprise grade education management solution designed for modern K–12 institutions, colleges, universities and training institutes. Manage everything from students' onboarding to graduation in one intuitive platform." },
    { property: "og:type", content: "website"},
    { property: "og:url", content: "https://academflow.com"},
    { property: "og:image", content: "https://res.cloudinary.com/dfbfpnvfb/image/upload/v1741432698/academflow_logo_vxyslm.png" },
  ];
}

export default function Home() {
  return(
    <>
      <WelcomeHome />
      <ExploreProductsHome />
      <DoMoreWithLessHome/>
      <AcademflowPromisesHome/>
      <FortressLevelSecurityHome/>
      <OnboardOnAdvancePlatformHome/>
    </>
  );
}
