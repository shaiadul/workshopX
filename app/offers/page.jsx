import OffersPageClient from "./OffersPageClient";


export function generateMetadata() {
  return {
    title: " Offers | workshopBD",
    description:
      "Explore our wide range of professional development and design services that empower businesses to scale with innovation.",
    openGraph: {
      title: "Offers | workshopBD",
      description:
        "Explore our wide range of professional development and design services that empower businesses to scale with innovation.",
    },
  };
}

export default function ServicesPage() {
  return <OffersPageClient />;
}
