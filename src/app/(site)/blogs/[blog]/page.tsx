import { getBlogData } from "../../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type tParams = Promise<{ blog: string }>;

export default async function Project(props: { params: tParams }) {
  const { blog } = await props.params;
  const blogData = await getBlogData(blog);
  return (
    <div className="max-w-6xl mx-auto px-6 mt-10">
      <header className="flex flex-col md:flex-row items-center justify-between mt-10">
        <h1 className="bg-gradient-to-r from-red-400 via-red-500 to-purple-900 bg-clip-text text-transparent text-5xl font-extrabold">
          {blogData.title}
        </h1>
      </header>

      <div className="mt-10">
        <Image
          src={blogData.image}
          alt={blogData.title}
          className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          width={800}
          height={600}
        />
      </div>
      <div className="mt-8 text-lg text-black ">
        <PortableText value={blogData?.content}  />

      </div>

    </div>
  );
}
