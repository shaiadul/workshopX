"use client";
import SingleOffer from "./singleOffer";

export default async function SingleOffersClient({ offer }) {
  if (!offer) {
    return <p className="text-center mt-10 text-red-500">Offer not found.</p>;
  }

  return <SingleOffer offer={offer} />;
}
