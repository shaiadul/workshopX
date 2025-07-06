import SingleBlog from "./singleBlog";

export default function SingleServicesClient({ blog }) {

  if (!blog) {
    return <p className="text-center mt-10 text-red-500">Blogs not found.</p>;
  }

  return <SingleBlog blog={blog} />;
}
