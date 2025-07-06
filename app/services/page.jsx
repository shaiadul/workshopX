import ServicesPageClient from "./ServicesPageClient";

export function generateMetadata() {
  return {
    title: "Our Services | workshopBD",
    description:
      "Explore our wide range of professional development and design services that empower businesses to scale with innovation.",
    openGraph: {
      title: "Our Services | workshopBD",
      description:
        "Explore our wide range of professional development and design services that empower businesses to scale with innovation.",
    },
  };
}

export default function ServicesPage() {
  return <ServicesPageClient />;
}
