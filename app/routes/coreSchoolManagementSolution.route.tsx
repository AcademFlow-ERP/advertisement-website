import { AcademflowPromisesHome, FortressLevelSecurityHome } from "~/pages/home";
import type { Route } from "./+types/coreSchoolManagementSolution.route";
import { ExploreProductFeaturesWidget, WelcomeHeroModernWidget } from "~/components/widgets";
import { exploreProductsCollections } from "~/datasource/exploreProductsCollections.data.json"


export function meta({}: Route.MetaArgs) {
  return [
    { title: "AcademFlow Core – Core School Management Solution"},
    { name: "description", content: "Securely manage staff users and students' information data systems" },
    { name: "theme-color", content: "#31859c" },
    { property: "og:title", content: "All-in-One School Management Software | Modern, Cloud based, Intuitive and Secure Management Solution for Smart Schools" },
    { property: "og:description", content: "Enterprise grade education management solution designed for modern K–12 institutions, colleges, universities and training institutes. Manage everything from students' onboarding to graduation in one intuitive platform." },
    { property: "og:type", content: "website"},
    { property: "og:url", content: "https://academflow.com"},
    { property: "og:image", content: "https://res.cloudinary.com/dfbfpnvfb/image/upload/v1741432698/academflow_logo_vxyslm.png" },
  ];
}

export default function CoreSchoolManagementSolution() {
  return(
    <>
      <WelcomeHeroModernWidget
          softwareServiceName={exploreProductsCollections[0].productData.softwareName}
          title={exploreProductsCollections[0].productData.title}
          description={exploreProductsCollections[0].productData.description}
          callToActionButtonTitle="Schedule a Demo"
          displayImageUrl={exploreProductsCollections[0].productData.imageUrl}
        />
      <ExploreProductFeaturesWidget
          softwareName={`${exploreProductsCollections[0].productData.softwareName}`}
          productFeatureCollections={exploreProductsCollections[0].productFeatures}
          productFeatureCollectionsDescription={"Stay Organised with a Centralised Database."}
      />
      <AcademflowPromisesHome/>
      <FortressLevelSecurityHome/>
    </>
  );
}
