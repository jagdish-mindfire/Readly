import Image from "next/image";
import Link from "next/link";
import { getProjects } from "../../../sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="max-w-7xl mx-auto mt-10 px-6">
      <h1 className="text-5xl font-extrabold mt-2 text-center">
        Bonjour! I &apos;m{" "}
        <span className="bg-gradient-to-r from-green-300 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Jagdish
        </span>{" "}
        Pal.
      </h1>
      <p className="mt-4 text-lg text-gray-600 text-center">
        Hi, nice to meet you.
      </p>
      <h3 className="mt-16 text-3xl font-bold text-center">My Projects</h3>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="group relative block overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <Image
              src={project.image}
              alt={project.name}
              width={400}
              height={300}
              className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <h4 className="text-white text-xl font-semibold">
                {project.name}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
