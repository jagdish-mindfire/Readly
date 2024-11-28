import Image from "next/image";
import Link from "next/link";
import { getAllBlogs } from "../../../sanity/sanity-utils";
import moment from "moment";

export default async function Home() {
  const blogsData = await getAllBlogs()

  return (
    <div className="max-w-7xl mx-auto mt-10 px-6">
      <h1 className="text-5xl font-extrabold mt-2 text-center">
        Welcome to
        <span className="bg-gradient-to-r from-red-800 via-blue-500 to-purple-800 bg-clip-text text-transparent">
          {" "}
          Readly
        </span>
      </h1>
      <p className="mt-4 text-lg text-gray-600 text-center">
        Discover and share amazing stories from around the world.
      </p>

      {/* Search Bar */}
      <div className="mt-8 flex justify-center">
        <input
          type="text"
          placeholder="Search blogs..."
          className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <h3 className="mt-16 text-3xl font-bold text-center">Latest Blogs</h3>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogsData.map((blog) => (
          <Link
            href={`/blogs/${blog.slug}`}
            key={blog._id}
            className="block overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <div className="relative">
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                <h4 className="text-xl font-semibold">{blog.title}</h4>
                <p className="text-sm">
                  By {blog.author} on {moment(blog._createdAt).format('ll')}
                </p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-700">{blog.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
