import { AcademflowPromisesHome, DoMoreWithLessHome, ExploreProductsHome, FortressLevelSecurityHome, OnboardOnAdvancePlatformHome, WelcomeHome } from "~/pages/home";
import type { Route } from "./+types/communicationBook.route";
import { ExploreProductFeaturesWidget, WelcomeHeroModernWidget } from "~/components/widgets";
import { exploreProductsCollections } from "~/datasource/exploreProductsCollections.data.json"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Communication Book " },
    { name: "description", content: "SMS | Email | In-app messaging system" },
    { name: "theme-color", content: "#31859c"},
    { property: "og:title", content: "All-in-One School Management Software | Modern School Management Solution for Smart Schools" },
    { property: "og:description", content: "Enterprise grade school management software designed for modern K–12 institutions, colleges, universities and training institutes. Manage everything from students' onboarding to graduation in one intuitive platform." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://academflow.com" },
    { property: "og:image", content: "" },
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
