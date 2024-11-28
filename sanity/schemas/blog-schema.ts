const blog = {
    name: "blog",
    title: "Blogs",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "description",
        title: "Description",
        type: "string",
      },
      {
        name:"author",
        title:"Author",
        type: "string",
      },
      {
        name:"slug",
        title:"Slug",
        type: "slug",
        options:{
            source:"title",
            maxLength:100
        }
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string",
          },
        ],
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [{ type: "block" }],
      },
    ],
  };
  export default blog;
  