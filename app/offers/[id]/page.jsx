
import { notFound } from "next/navigation";
import SingleOffer from "./singleOffer";

const offers = [
  {
    id: 1,
    title: "Big Discount on Smart TVs!",
    description:
      "Enjoy up to 30% off on select Smart TVs from top brands. Offer valid while stocks last. Enjoy up to 30% off on select Smart TVs from top brands. Offer valid while stocks last.",
    date: "July 10, 2025",
    expiry: "July 15, 2025",
    image:
      "https://static.vecteezy.com/system/resources/previews/051/824/613/non_2x/water-pump-icon-design-template-simple-and-clean-vector.jpg",
  },
  {
    id: 2,
    title: "Kitchen Appliances Mega Sale",
    description:
      "Save big on blenders, rice cookers, and microwave ovens. Limited-time offer! Enjoy up to 30% off on select Smart TVs from top brands. Offer valid while stocks last.",
    date: "July 15, 2025",
    expiry: "July 20, 2025",
    image:
      "https://static.vecteezy.com/system/resources/previews/051/824/613/non_2x/water-pump-icon-design-template-simple-and-clean-vector.jpg",
  },
  {
    id: 3,
    title: "Buy 1 Get 1 Free: Fans & Coolers",
    description:
      "Beat the heat with our Buy 1 Get 1 Free offer on selected cooling appliances. Enjoy up to 30% off on select Smart TVs from top brands. Offer valid while stocks last.",
    date: "July 20, 2025",
    expiry: "July 30, 2025",
    image:
      "https://static.vecteezy.com/system/resources/previews/051/824/613/non_2x/water-pump-icon-design-template-simple-and-clean-vector.jpg",
  },
];


export async function generateMetadata({ params }) {
  const offer =  offers.find((b) => b.id === parseInt(params?.id));

  if (!offer) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

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

export default async function OfferDetails({ params }) {
  const offer = offers.find((o) => o.id === parseInt(params?.id));

   if (!offer) {
    return <p className="text-center mt-10 text-red-500">Offer not found.</p>;
  }

  return (
    <SingleOffer offer={offer} />
  );
}
