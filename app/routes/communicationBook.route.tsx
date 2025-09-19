import { AcademflowPromisesHome, FortressLevelSecurityHome } from "~/pages/home";
import type { Route } from "./+types/communicationBook.route";
import { ExploreProductFeaturesWidget, WelcomeHeroModernWidget } from "~/components/widgets";
import { exploreProductsCollections } from "~/datasource/exploreProductsCollections.data.json"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AcademFlow Communication Book – Communication Book" },
    { name: "description", content: "SMS | Email | In-app messaging system" },
    { name: "theme-color", content: "#31859c"},
    { property: "og:title", content: "All-in-One School Management Software | Modern, Cloud based, Intuitive and Secure Management Solution for Smart Schools" },
    { property: "og:description", content: "Enterprise grade education management solution designed for modern K–12 institutions, colleges, universities and training institutes. Manage everything from students' onboarding to graduation in one intuitive platform." },
    { property: "og:type", content: "website"},
    { property: "og:url", content: "https://academflow.com"},
    { property: "og:image", content: "https://res.cloudinary.com/dfbfpnvfb/image/upload/v1741432698/academflow_logo_vxyslm.png" },
  ];
}

export default function CommunicationBook() {
  return(
    <>
      <WelcomeHeroModernWidget
          softwareServiceName={exploreProductsCollections[3].productData.softwareName}
          title={exploreProductsCollections[3].productData.title}
          description={exploreProductsCollections[3].productData.description}
          callToActionButtonTitle="Schedule a Demo"
          displayImageUrl={exploreProductsCollections[3].productData.imageUrl}
        />
        <ExploreProductFeaturesWidget
            softwareName={`${exploreProductsCollections[3].productData.softwareName}`}
            productFeatureCollections={exploreProductsCollections[3].productFeatures}
            productFeatureCollectionsDescription={exploreProductsCollections[3].subTitle}
        />
      <AcademflowPromisesHome/>
      <FortressLevelSecurityHome/>
    </>
  )
}
