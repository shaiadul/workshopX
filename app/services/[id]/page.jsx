import SingleServicesClient from "./SingleServicesClient";

export async function generateMetadata({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/services/${params.id}`,
    {
      cache: "no-store",
    }
  );

  if (!res) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    };
  }

  const service = await res.json();

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: [service.image],
    },
  };
}

export default async function ServicesDetails({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/services/${params.id}`,
    {
      cache: "no-store",
    }
  );

  if (!res) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    };
  }

  const service = await res.json();
  return <SingleServicesClient service={service} />;
}
