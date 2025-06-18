import { AcademflowPromisesHome, FortressLevelSecurityHome } from "~/pages/home";
import type { Route } from "./+types/academicResultReportSolution.route";
import { ExploreProductFeaturesWidget, WelcomeHeroModernWidget } from "~/components/widgets";
import { exploreProductsCollections } from "~/datasource/exploreProductsCollections.data.json"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Result Processor – Academflow Result" },
    { name: "description", content: "Say goodbye to report card headaches. Generate and analyze results automatically, hence saving time, and ensuring accuracy." },
    { name: "theme-color", content: "#31859c"},
    { property: "og:title", content: "All-in-One School Management Software | Modern School Management Solution for Smart Schools" },
    { property: "og:description", content: "Enterprise grade school management software designed for modern K–12 institutions, colleges, universities and training institutes. Manage everything from students' onboarding to graduation in one intuitive platform." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://academflow.com" },
    { property: "og:image", content: "" },
  ];
}

export default function AcademicResultReportSolution() {
  return(
    <>
      <WelcomeHeroModernWidget
          softwareServiceName={exploreProductsCollections[2].productData.softwareName}
          title={exploreProductsCollections[2].productData.title}
          description={exploreProductsCollections[2].productData.description}
          callToActionButtonTitle="Schedule a Demo"
          displayImageUrl={exploreProductsCollections[2].productData.imageUrl}
        />
        <ExploreProductFeaturesWidget
            softwareName={`${exploreProductsCollections[2].productData.softwareName}`}
            productFeatureCollections={exploreProductsCollections[2].productFeatures}
            productFeatureCollectionsDescription={exploreProductsCollections[2].subTitle}
        />
      <AcademflowPromisesHome/>
      <FortressLevelSecurityHome/>
    </>
  )
}
