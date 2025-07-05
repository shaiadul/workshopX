import axios from "axios";
import { notFound } from "next/navigation";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const fetchApi = async (path, method, data = null) => {
  const url = `${API_ENDPOINT}${path}`;
  let token = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token") || "";
  }

  try {
    let response;
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    const isFormData =
      typeof FormData !== "undefined" && data instanceof FormData;

    const config = {
      headers: {
        ...(isFormData
          ? {} 
          : { "Content-Type": "application/json" }),
        Authorization: `Bearer ${token}`,
      },
    };

    switch (method) {
      case "GET":
        response = await axios.get(url, config);
        break;
      case "POST":
        response = await axios.post(url, data, config);
        break;
      case "PATCH":
        response = await axios.patch(url, data, config);
        break;
      case "PUT":
        response = await axios.put(url, data, config);
        break;
      case "DELETE":
        response = await axios.delete(url, config);
        break;
      default:
        throw new Error("Method not allowed");
    }

    return response.data;
  } catch (error) {
    console.error(error);
    notFound();
  }
};
