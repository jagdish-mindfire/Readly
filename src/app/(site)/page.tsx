import Image from "next/image";
import Link from "next/link";
import { getProjects } from "../../../sanity/sanity-utils";
export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="max-w-5xl mx-auto mt-10">
     <h1 className="text-3xl font-extrabold  mt-2">
  Bonjore ! I&apos;m <span className="bg-gradient-to-r from-green-300  via-red-500 to-purple-600 bg-clip-text text-transparent">Jagdish</span> Pal.
</h1>
<p>Hi, Nice to meet you..</p>
<h3 className="mt-24 text-2xl font-bold p-2">My Projects</h3>

<div className="container-fluid mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {projects.map((project)=>(
        
        <Link href={`/projects/${project.slug}`} key={project._id} className="mt-2  hover:scale-105 transition p-2 m-2 ">
          {project.name}
          {/* {console.log(project)} */}
          <Image src={project.image} className="border-2 border-grey-700 object-cover rounded-xl" alt={project.name} width={200} height={150}/>
          </Link>
      ))
    }
    </div>
      </div> 
  );
}
