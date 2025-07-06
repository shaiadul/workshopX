import SingleBlogsClient from "./SingleBlogsClient";


export async function generateMetadata({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/blogs/${params.id}`,
    {
      cache: "no-store",
    }
  );

  if (!res) {
    return {
      title: "Blog Not Found",
      description: "The requested blog could not be found.",
    };
  }

  const blog = await res.json();

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },
  };
}

export default async function BlogDetails({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/blogs/${params.id}`,
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

  const blog = await res.json();
  return <SingleBlogsClient blog={blog} />;
}
