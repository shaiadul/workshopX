"use client";

import { useSelector } from "react-redux";
import SingleServices from "./singleService";
import { useMemo } from "react";

export default function SingleServicesClient({ service }) {
//   const { list } = useSelector((state) => state.services);

//   const service = useMemo(() => list.find((b) => b.id === id), [list, id]);

  if (!service) {
    return <p className="text-center mt-10 text-red-500">Service not found.</p>;
  }

  return <SingleServices service={service} />;
}
