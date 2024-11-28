import { getProject } from "../../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: {
    project: string;
  };
};

export default async function Project({ params }: Props) {
  const parameters = await params;
  const slug = parameters.project;
  const project = await getProject(slug);

  return (
    <div className="max-w-6xl mx-auto px-6 mt-10">
      <header className="flex flex-col md:flex-row items-center justify-between mt-10">
        <h1 className="bg-gradient-to-r from-red-400 via-red-500 to-purple-900 bg-clip-text text-transparent text-5xl font-extrabold">
          {project.name}
        </h1>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 md:mt-0 bg-yellow-500 text-white rounded-full px-8 py-3 font-semibold hover:bg-yellow-600 transition duration-300"
        >
          View Project
        </a>
      </header>

      <div className="mt-8 text-lg text-gray-700 leading-relaxed">
        <PortableText value={project.content} />
      </div>

      <div className="mt-10">
        <Image
          src={project.image}
          alt={project.name}
          className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          width={800}
          height={600}
        />
      </div>
    </div>
  );
}
