import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schema from "./sanity/schemas"
const config = defineConfig({
    projectId:process.env.SANITY_PROJECT_ID || "",
    dataset:process.env.SANITY_DATASET || "production",
    title:process.env.SANITY_TITLE || "My personal website",
    apiVersion:process.env.SANITY_API_VERSION || "2024-11-27",
    basePath: process.env.SANITY_BASEPATH || "/admin",
    schema:schema,
    plugins:[deskTool()]
});

export default config;