export const clientConfig = {
    projectId:process.env.SANITY_PROJECT_ID || "",
    dataset:process.env.SANITY_DATASET || "production",
    apiVersion:process.env.SANITY_API_VERSION || "2024-11-27",
};