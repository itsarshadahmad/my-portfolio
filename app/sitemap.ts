export const baseUrl = "https://arshadahmad.vercel.app/";

export default async function sitemap() {
    let routes = ["", "/og"].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split("T")[0],
    }));

    return [...routes];
}
