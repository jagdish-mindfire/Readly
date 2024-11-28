import { PortableText } from "next-sanity";
import { getPageData } from "../../../../sanity/sanity-utils";
type tParams = Promise<{ slug: string }>;

export default async function Page(props: { params: tParams }) {
  const { slug } = await props.params;

  const pageData = await getPageData(slug);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl sm:text-5xl font-extrabold mt-10 text-center">
        {pageData.title}
      </h1>
      <div className="mt-8 prose prose-lg mx-auto">
        <PortableText value={pageData.content} />
      </div>
    </div>
  );
}
