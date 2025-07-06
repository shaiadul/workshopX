import BlogsPageClient from "./BlogsPageClient";

export function generateMetadata() {
  return {
    title: "Blogs | workshopBD",
    description:
      "Explore our wide range of professional development and design services that empower businesses to scale with innovation.",
    openGraph: {
      title: "Blogs | workshopBD",
      description:
        "Explore our wide range of professional development and design services that empower businesses to scale with innovation.",
    },
  };
}

export default function BlogsPage() {
  return <BlogsPageClient />;
}
