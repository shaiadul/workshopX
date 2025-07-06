"use client";

import SingleServices from "./singleService";

export default function SingleServicesClient({ service }) {
  if (!service) {
    return <p className="text-center mt-10 text-red-500">Service not found.</p>;
  }

  return <SingleServices service={service} />;
}
