import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "../../../../../types/blog";

type tparam = {
    blog : Blog
}
export default function BlogCard(params:tparam) {
    const { blog } = params;
  return (
    <>
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
              By {blog.author} on {moment(blog._createdAt).format("ll")}
            </p>
          </div>
        </div>
        <div className="p-4">
          <p className="text-gray-700">{blog.description}</p>
        </div>
      </Link>
    </>
  );
}
