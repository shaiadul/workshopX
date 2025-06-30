import SingleBlog from "./singleBlog";

const blogs = [
  {
    id: 1,
    title: "How to Build a Modern Web App",
    excerpt:
      "Learn the step-by-step process of building a performant and responsive web app using the latest tools.",
    image:
      "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    author: "John Doe",
    date: "June 28, 2025",
  },
  {
    id: 2,
    title: "UI/UX Trends to Watch in 2025",
    excerpt:
      "Explore the most important user experience and design trends shaping the digital landscape in 2025.",
    image:
      " https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    author: "Jane Smith",
    date: "June 26, 2025",
  },
  {
    id: 3,
    title: "Performance Optimization Techniques",
    excerpt:
      "Boost your website speed and efficiency with proven frontend and backend performance tips.",
    image:
      " https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    author: "Alex Johnson",
    date: "June 24, 2025",
  },
  {
    id: 4,
    title: "Frontend Framework Comparison",
    excerpt:
      "Evaluate the performance and features of popular frontend frameworks like React, Vue, and Angular.",
    image:
      " https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    author: "Sarah Thompson",
    date: "June 22, 2025",
  },
  {
    id: 5,
    title: "Best Practices for SEO Optimization",
    excerpt:
      "Learn how to optimize your website for search engine optimization (SEO) to improve visibility and organic traffic.",
    image:
      " https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    author: "Michael Brown",
    date: "June 20, 2025",
  },
  {
    id: 6,
    title: "Responsive Web Design Principles",
    excerpt:
      "Understand the importance of responsive design and learn how to create websites that adapt to different screen sizes.",
    image:
      " https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    author: "Emily Wilson",
    date: "June 18, 2025",
  },
  {
    id: 7,
    title: "Accessibility Best Practices",
    excerpt:
      "Learn how to create accessible websites that meet the needs of users with disabilities.",
    image:
      " https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    author: "David Lee",
    date: "June 16, 2025",
  },
  {
    id: 8,
    title: "Server-Side Rendering (SSR) vs Client-Side Rendering (CSR)",
    excerpt:
      "Compare the performance and SEO benefits of server-side rendering (SSR) and client-side rendering (CSR).",
    image:
      " https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    author: "Olivia Martinez",
    date: "June 14, 2025",
  },
  {
    id: 9,
    title: "Web Accessibility Guidelines",
    excerpt:
      "Understand the web accessibility guidelines and best practices for creating accessible websites.",
    image:
      " https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    author: "Daniel Clark",
    date: "June 12, 2025",
  },
  {
    id: 10,
    title: "Performance Optimization Techniques",
    excerpt:
      "Boost your website speed and efficiency with proven frontend and backend performance tips.",
    image:
      " https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    author: "Sophia Lewis",
    date: "June 10, 2025",
  },
];
export async function generateMetadata({ params }) {
  const blog = blogs.find((b) => b.id === parseInt(params.id));

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
    },
  };
}

export default function BlogDetails({ params }) {
  const blog = blogs.find((b) => b.id === parseInt(params.id));

  if (!blog) {
    return <p className="text-center mt-10 text-red-500">Blog not found.</p>;
  }

  return <SingleBlog blog={blog} />;
}
