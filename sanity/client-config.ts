export const clientConfig = {
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion:process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-11-27",
};