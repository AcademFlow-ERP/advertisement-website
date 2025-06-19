import { AcademflowPromisesHome, FortressLevelSecurityHome } from "~/pages/home";
import type { Route } from "./+types/feePaymentManagementSolution.route";
import { ExploreProductFeaturesWidget, WelcomeHeroModernWidget } from "~/components/widgets";
import { exploreProductsCollections } from "~/datasource/exploreProductsCollections.data.json"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Collect and pay fees efficiently – Academflow Pay" },
    { name: "description", content: "A powerful, easy-to-use school payment management solution to transform how you collect and manage any type of fee payments." },
    { name: "theme-color", content: "#31859c" },
    { property: "og:title", content: "All-in-One School Management Software | Modern, Cloud based, Intuitive and Secure Management Solution for Smart Schools" },
    { property: "og:description", content: "Enterprise grade education management solution designed for modern K–12 institutions, colleges, universities and training institutes. Manage everything from students' onboarding to graduation in one intuitive platform." },
    { property: "og:type", content: "website"},
    { property: "og:url", content: "https://academflow.com"},
    { property: "og:image", content: "https://res.cloudinary.com/dfbfpnvfb/image/upload/v1741432698/academflow_logo_vxyslm.png" },
  ];
}

export default function FeePaymentManagementSolution() {
  return(
    <>
      <WelcomeHeroModernWidget
          softwareServiceName={exploreProductsCollections[1].productData.softwareName}
          title={exploreProductsCollections[1].productData.title}
          description={exploreProductsCollections[1].productData.description}
          callToActionButtonTitle="Schedule a Demo"
          displayImageUrl={exploreProductsCollections[1].productData.imageUrl}
        />
        <ExploreProductFeaturesWidget
            softwareName={`${exploreProductsCollections[1].productData.softwareName}`}
            productFeatureCollections={exploreProductsCollections[1].productFeatures}
            productFeatureCollectionsDescription={exploreProductsCollections[1].subTitle}
        />
      <AcademflowPromisesHome/>
      <FortressLevelSecurityHome/>
    </>
  );
}
