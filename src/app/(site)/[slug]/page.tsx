import { PortableText } from "next-sanity";
import { getPageData } from "../../../../sanity/sanity-utils";

type Params = {
    params : {
        slug:string;
    }
}
export default  async function Page({params}:Params){
    const parameters = await params;
    const slug = parameters.slug;
    const pageData = await getPageData(slug);
    return (<>
    <div>
        <h1 className="text-3xl mt-10 font-extrabold">{pageData.title}</h1>
        <p className="mt-4">
        <PortableText value={pageData.content} />
        </p>
    </div>
    </>);
}