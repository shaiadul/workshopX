import SingleOffersClient from "./SingleOffersClient";

export async function generateMetadata({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/offers/${params.id}`,
    {
      cache: "no-store",
    }
  );

  if (!res) {
    return {
      title: "Offer Not Found",
      description: "The requested offer could not be found.",
    };
  }

  const offer = await res.json();

  return {
    title: offer.title,
    description: offer.description,
    openGraph: {
      title: offer.title,
      description: offer.description,
      images: [offer.image],
    },
  };
}

export default async function OffersDetails({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/offers/${params.id}`,
    {
      cache: "no-store",
    }
  );

  if (!res) {
    return {
      title: "Offer Not Found",
      description: "The requested offer could not be found.",
    };
  }

  const offer = await res.json();
  return <SingleOffersClient offer={offer} />;
}
