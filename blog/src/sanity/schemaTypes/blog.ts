import { defineField , defineType } from "sanity";



export default defineType({

    name: "blog",
    title: "blog",
    type: "document",
    fields: [
        defineField({
            name : "heading",
            title : "Title",
            type : "string",
        }),
        defineField({
            name : "description",
            title : "Description",
            type : "text",
        }),
        defineField({
            name : "slug",
            title : "Slug",
            type : "slug",
            options: {
                source: "heading",
                maxLength: 200
            }
        }),
        defineField({
            name : "image",
            title : "Image",
            type : "image",
            options: {
                hotspot: true
            }
        }),
    ]

})