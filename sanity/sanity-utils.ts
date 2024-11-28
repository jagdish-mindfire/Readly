import { createClient, groq } from "next-sanity";
import { Project } from "../types/project";
import { Page } from "../types/page";
import {clientConfig} from './client-config';

export async function getProjects():Promise<Project[]>{
    const client = createClient(clientConfig);
    return client.fetch(
        groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        "image": image.asset->url,
        url,
        }`
    )  
}

export async function getProject(slug : string):Promise<Project>{
    const client = createClient(clientConfig);
    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug":slug.current,
        content
        }`
        ,{slug})  
}

export async function getAllPages():Promise<Page[]>{
    const client = createClient(clientConfig);
    return client.fetch(
        groq`*[_type == "page" ]{
        _id,
        _createdAt,
        title,
        "slug":slug.current,
        }`
        )  
}

export async function getPageData(slug:string):Promise<Page>{
    const client = createClient(clientConfig);
    return client.fetch(
        groq`*[_type == "page" && slug.current==$slug][0]{
         _id,
        _createdAt,
        title,
        "slug":slug.current,
        content
        }`,{slug}
        )  
}