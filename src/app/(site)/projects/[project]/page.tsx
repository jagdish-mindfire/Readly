import { getProject } from "../../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
type props = {
    params : {
        project : string;
    }
}
export default async function Project({params}:props){
    const parameters = await params;
    const slug = parameters.project;
    // console.log
    const project = await getProject(slug); 
    return (
        <div >

        <header className="flex items-center justify-between mt-10">
            <h1 className="bg-gradient-to-r from-red-400 via-red-500 to-purple-900 bg-clip-text text-transparent text-4xl font-extrabold">{project.name + " "}</h1>
            <a href={project.url} title="_blank" rel="noopener noreferrer"
            className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-yellow-600 hover:text-white"
            >View Project</a>

        </header>
            <div className="text=lg text-gray-700 mt-5"><PortableText value={project.content}/></div>
            <Image src={project.image} alt={project.name} className="mt-10 border-2 border-grey-700 object-cover rounded-xl" width={500} height={350}/>
        </div>
    )
} 